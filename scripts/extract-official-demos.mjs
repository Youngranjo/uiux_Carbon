// Turns each cached Web Component Storybook source (scripts/wc-stories-cache/*.txt) into
// real, static HTML that can be rendered live — the same markup Carbon's own Storybook
// renders for its "Default" story, with lit bindings (${arg}, ?bool="${arg}", @event="${fn}")
// resolved against that story's real `args` object wherever possible. Best-effort: anything
// that can't be statically resolved (icon loader calls, imported enum refs, ...) is just
// dropped rather than guessed at, so the output never contains literal "${...}" noise.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const SRC_DIR = 'scripts/wc-stories-cache';
const out = {};

function findMatchingBrace(src, openIdx, openChar, closeChar) {
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    if (src[i] === openChar) depth++;
    else if (src[i] === closeChar) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

// Extract `const NAME = { ...literal-ish... };` as a Map<string, string|boolean|number>.
// Only captures simple literals — identifiers/enum refs/expressions are left unresolved.
function parseArgsObject(objSrc) {
  const map = new Map();
  const re = /['"]?([A-Za-z0-9_]+)['"]?\s*:\s*('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|true|false|-?\d+(?:\.\d+)?)\s*,?/g;
  let m;
  while ((m = re.exec(objSrc))) {
    const key = m[1];
    let val = m[2];
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    else if (/^-?\d+(?:\.\d+)?$/.test(val)) val = Number(val);
    else val = val.slice(1, -1); // strip quotes
    map.set(key, val);
  }
  return map;
}

function extractTemplateFromArrow(src, startIdx) {
  // src[startIdx..] looks like "(...) => { ... return html`...`; ... }" or "(...) => html`...`"
  const arrowIdx = src.indexOf('=>', startIdx);
  if (arrowIdx === -1) return null;
  let rest = src.slice(arrowIdx + 2).trimStart();
  if (rest.startsWith('{')) {
    const bodyEnd = findMatchingBrace(rest, 0, '{', '}');
    const body = bodyEnd === -1 ? rest : rest.slice(0, bodyEnd + 1);
    const htmlIdx = body.indexOf('html`');
    if (htmlIdx === -1) return null;
    return extractBacktickString(body, htmlIdx + 'html'.length);
  }
  const htmlIdx = rest.indexOf('html`');
  if (htmlIdx !== 0 && htmlIdx !== -1 && rest.slice(0, htmlIdx).trim() !== '') return null;
  if (htmlIdx === -1) return null;
  return extractBacktickString(rest, htmlIdx + 'html'.length);
}

function extractBacktickString(src, backtickIdx) {
  // src[backtickIdx] === '`' — find the matching unescaped closing backtick.
  let i = backtickIdx + 1;
  let out = '';
  while (i < src.length) {
    if (src[i] === '\\' && src[i + 1] === '`') {
      out += '`';
      i += 2;
      continue;
    }
    if (src[i] === '`') return out;
    out += src[i];
    i++;
  }
  return null;
}

// `const NAME = { ... };` anywhere in the file, keyed by NAME — resolves `args: defaultArgs`
// style indirection (the args object isn't always inline or literally named `args`).
function collectNamedObjects(src) {
  const map = new Map();
  const re = /const (\w+) = \{/g;
  let m;
  while ((m = re.exec(src))) {
    const braceIdx = m.index + m[0].length - 1;
    const braceEnd = findMatchingBrace(src, braceIdx, '{', '}');
    if (braceEnd === -1) continue;
    map.set(m[1], parseArgsObject(src.slice(braceIdx, braceEnd + 1)));
  }
  return map;
}

// `const NAME = 'literal';` / true / false / 123 anywhere in the file — covers helper
// consts referenced directly in a template (e.g. `${checkboxLabel}`) that aren't part of
// any args object at all.
function collectTopLevelPrimitives(src) {
  const map = new Map();
  const re = /const (\w+) = ('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|true|false|-?\d+(?:\.\d+)?);/g;
  let m;
  while ((m = re.exec(src))) {
    let val = m[2];
    if (val === 'true') val = true;
    else if (val === 'false') val = false;
    else if (/^-?\d+(?:\.\d+)?$/.test(val)) val = Number(val);
    else val = val.slice(1, -1);
    map.set(m[1], val);
  }
  return map;
}

// Finds `const NAME = (...) => { ... html`...` ... }` or `function NAME(...) { ... html`...` ... }`
// anywhere in the file and returns its template body — used to inline helper render
// functions like `${renderTextInput(args)}` that the top-level render() delegates to.
function findFunctionTemplate(src, name) {
  const arrowDecl = src.match(new RegExp(`const ${name} = \\(`));
  if (arrowDecl) return extractTemplateFromArrow(src, arrowDecl.index + `const ${name} =`.length);
  const fnDecl = src.match(new RegExp(`function ${name}\\(`));
  if (fnDecl) {
    const parenStart = src.indexOf('(', fnDecl.index);
    const parenEnd = findMatchingBrace(src, parenStart, '(', ')');
    const braceStart = src.indexOf('{', parenEnd);
    const braceEnd = findMatchingBrace(src, braceStart, '{', '}');
    const body = src.slice(braceStart, braceEnd + 1);
    const htmlIdx = body.indexOf('html`');
    if (htmlIdx !== -1) return extractBacktickString(body, htmlIdx + 'html'.length);
  }
  return null;
}

// Inlines `${helperFn(args)}` / `${helperFn(someArg)}` calls by substituting the helper's
// own template in place — one level deep (Carbon's stories nest at most one helper).
function inlineFunctionCalls(templateSrc, src, depth) {
  if (depth <= 0) return templateSrc;
  return templateSrc.replace(/\$\{\s*(\w+)\([\w.]*\)\s*\}/g, (m, fnName) => {
    const inner = findFunctionTemplate(src, fnName);
    return inner === null ? m : inlineFunctionCalls(inner, src, depth - 1);
  });
}

function resolveIdent(ident, argsMap) {
  // strips lit directive wrappers (ifDefined(x), live(x), ...) down to the bare identifier
  const bare = ident.replace(/^\w+\(([^)]*)\)$/, '$1').trim();
  // `ident ?? 'fallback'` — use the fallback literal when ident itself can't be resolved
  const nullish = bare.match(/^([\w.]+)\s*\?\?\s*'([^']*)'$/);
  if (nullish) {
    const val = argsMap.get(nullish[1].split('.').pop());
    return val === undefined || val === '' ? nullish[2] : val;
  }
  if (!/^[\w.]+$/.test(bare)) return undefined; // still a real expression — can't resolve
  return argsMap.get(bare.split('.').pop());
}

function resolveTemplate(templateSrc, argsMap) {
  let html = templateSrc;
  // event bindings: @event=/"${handler}"/ (quoted or not) -> drop
  html = html.replace(/\s+@[\w-]+=(?:"\$\{[^}]*\}"|\$\{[^}]*\})/g, '');
  // boolean directive: ?attr=/"${expr}"/ -> bare "attr" if truthy else drop
  html = html.replace(/\s+\?([\w-]+)=(?:"\$\{([^}]*)\}"|\$\{([^}]*)\})/g, (m, attr, e1, e2) => {
    const val = resolveIdent((e1 ?? e2).trim(), argsMap);
    return val ? ` ${attr}` : '';
  });
  // property binding: .prop=/"${expr}"/ -> treat like a regular attribute
  html = html.replace(/\s+\.([\w-]+)=(?:"\$\{([^}]*)\}"|\$\{([^}]*)\})/g, (m, attr, e1, e2) => {
    const val = resolveIdent((e1 ?? e2).trim(), argsMap);
    if (val === undefined || val === '') return '';
    return ` ${attr}="${String(val).replace(/"/g, '&quot;')}"`;
  });
  // regular attribute: attr=/"${expr}"/ -> resolved value, or drop if unresolvable
  html = html.replace(/\s+([\w-]+)=(?:"\$\{([^}]*)\}"|\$\{([^}]*)\})/g, (m, attr, e1, e2) => {
    const val = resolveIdent((e1 ?? e2).trim(), argsMap);
    if (val === undefined || val === '') return '';
    return ` ${attr}="${String(val).replace(/"/g, '&quot;')}"`;
  });
  // any remaining ${...} in text content — resolve simple idents/ifDefined/??, else drop
  html = html.replace(/\$\{([^}]*)\}/g, (m, expr) => {
    const val = resolveIdent(expr.trim(), argsMap);
    return val === undefined ? '' : String(val);
  });
  return html.trim();
}

for (const file of readdirSync(SRC_DIR)) {
  if (!file.endsWith('.txt')) continue;
  const folder = file.replace(/\.txt$/, '');
  const src = readFileSync(`${SRC_DIR}/${file}`, 'utf8');

  const exportMatch = src.match(/export const \w+ = \{/);
  if (!exportMatch) continue;
  const blockStart = exportMatch.index + exportMatch[0].length - 1;
  const blockEnd = findMatchingBrace(src, blockStart, '{', '}');
  if (blockEnd === -1) continue;
  const block = src.slice(blockStart, blockEnd + 1);

  const namedObjects = collectNamedObjects(src);
  const topLevelPrimitives = collectTopLevelPrimitives(src);

  // args: inline `args: {...}` in this export block, OR `args: someIdentifier` pointing at
  // a `const someIdentifier = {...}` elsewhere, OR a shared top-level `const args = {...}`.
  let argsMap = new Map();
  const inlineArgsMatch = block.match(/args:\s*(\{|\w+)/);
  if (inlineArgsMatch) {
    if (inlineArgsMatch[1] === '{') {
      const braceIdx = block.indexOf('{', inlineArgsMatch.index);
      const braceEnd = findMatchingBrace(block, braceIdx, '{', '}');
      if (braceEnd !== -1) argsMap = parseArgsObject(block.slice(braceIdx, braceEnd + 1));
    } else if (namedObjects.has(inlineArgsMatch[1])) {
      argsMap = new Map(namedObjects.get(inlineArgsMatch[1]));
    }
  }
  if (namedObjects.has('args')) {
    for (const [k, v] of namedObjects.get('args')) if (!argsMap.has(k)) argsMap.set(k, v);
  }
  // helper consts referenced directly (not via args) — lowest priority
  for (const [k, v] of topLevelPrimitives) if (!argsMap.has(k)) argsMap.set(k, v);

  // render: an inline arrow in this export block, OR `render: someHelper` pointing at a
  // `const someHelper = (...) => ...` elsewhere, OR (most common) inherited from the
  // Storybook default-export "meta" object when the individual story doesn't set its own.
  function templateFromBlock(blk) {
    const idx = blk.indexOf('render:');
    if (idx === -1) return null;
    const inline = extractTemplateFromArrow(blk, idx + 'render:'.length);
    if (inline !== null) return inline;
    const identMatch = blk.slice(idx, idx + 120).match(/render:\s*(\w+)\s*[,}]/);
    return identMatch ? findFunctionTemplate(src, identMatch[1]) : null;
  }

  let template = templateFromBlock(block);
  if (template === null) {
    const metaMatch = src.match(/(?:const meta = |export default )\{/);
    if (metaMatch) {
      const braceIdx = metaMatch.index + metaMatch[0].length - 1;
      const braceEnd = findMatchingBrace(src, braceIdx, '{', '}');
      if (braceEnd !== -1) template = templateFromBlock(src.slice(braceIdx, braceEnd + 1));
    }
  }
  if (template === null) continue;
  template = inlineFunctionCalls(template, src, 2);

  const resolved = resolveTemplate(template, argsMap);
  if (resolved && isClean(resolved)) out[folder] = resolved;
}

// Reject anything where the resolver couldn't fully eliminate lit/JS syntax — better to
// fall back to the auto-generated demo than to render literal "${...}" or a dangling
// attr= to the user. Real Storybook markup only wins when it comes out genuinely clean.
function isClean(html) {
  if (!html.includes('<')) return false;
  if (!/<cds-/.test(html)) return false; // not an actual component demo (e.g. deprecation notices)
  if (/\$\{|=>|html`|\.map\(|<style>|\)\}|\)\{|\}\}|\}>/.test(html)) return false;
  if (/[\w-]+=(?!["'])/.test(html)) return false; // attr= with no quoted value
  if (/=""/.test(html)) return false; // attr="" left empty by an unresolved binding
  // reject if it looks like it collapsed to near-empty content (labels stripped out)
  const textContent = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (textContent.length < 3 && !/<cds-(button|tag|link)/.test(html)) return false;
  // reject if attribute-looking fragments leaked into the text content (a duplicated /
  // malformed source branch, not real copy — e.g. `helper-text="..." label-text="...">`)
  if (/[\w-]+="[^"]{0,120}"/.test(textContent)) return false;
  return true;
}

writeFileSync('scripts/official-live-demos.json', JSON.stringify(out, null, 2));
console.log(`resolved live demos: ${Object.keys(out).length} / ${readdirSync(SRC_DIR).filter((f) => f.endsWith('.txt')).length}`);
