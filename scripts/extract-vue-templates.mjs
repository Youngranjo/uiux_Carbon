// Extracts the real Vue template markup (e.g. `const template = \`<cv-accordion>...\`;`)
// out of each cached carbon-components-vue story file — this is the actual HTML-like Vue
// source Carbon's own Vue Storybook renders, real content included ("Episode 1", ...).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const dir = 'scripts/vue-stories-cache';
const out = {};

for (const file of readdirSync(dir)) {
  if (!file.endsWith('.txt')) continue;
  const cvName = file.replace(/\.txt$/, '');
  const src = readFileSync(`${dir}/${file}`, 'utf8');
  const m = src.match(/const template\w* = `((?:\\`|[^`])*)`;/);
  if (!m) continue;
  const template = m[1].replace(/\\`/g, '`').trim();
  out[cvName] = template;
}

writeFileSync('scripts/vue-story-templates.json', JSON.stringify(out, null, 2));
console.log(`extracted templates: ${Object.keys(out).length} / ${readdirSync(dir).length}`);
