// Extracts the "## Overview" prose section from each cached .mdx doc (fetch-mdx-docs.mjs)
// — the real explanatory text Carbon writes for the component. Drops any paragraph that
// contains JSX (<Canvas .../>, <InlineNotification>...</InlineNotification>, etc.) since
// those are embeds we can't render as plain prose; keeps the surrounding text paragraphs.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const dir = 'scripts/mdx-cache';
const out = {};

for (const file of readdirSync(dir)) {
  if (!file.endsWith('.mdx')) continue;
  const folder = file.replace(/\.mdx$/, '');
  const src = readFileSync(`${dir}/${file}`, 'utf8');

  const m = src.match(/## Overview\n([\s\S]*?)\n## /);
  if (!m) continue;
  // Strip fenced code blocks first (```scss ... ```) — otherwise splitting into paragraphs
  // by blank line chops a multi-line fence into fragments that don't filter out cleanly.
  const section = m[1].replace(/```[\s\S]*?```/g, '');

  let paragraphs = section
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p && !p.includes('<') && !p.startsWith('#') && !p.includes('```'))
    .map((p) => p.replace(/\s+/g, ' '))
    // a paragraph ending in ":" was almost always introducing the code block we just
    // stripped out, so on its own it reads as a dangling, incomplete lead-in — drop it.
    .filter((p) => !p.endsWith(':'));

  // The very last kept paragraph, if short and missing terminal punctuation, is usually a
  // dangling clause that originally finished inside a removed inline JSX embed (e.g. "To
  // get the prefix, use <LinkTo>usePrefix</LinkTo>") rather than a real standalone
  // sentence — longer such paragraphs are almost always just missing a trailing period in
  // the source itself and are fine to keep as-is.
  const last = paragraphs[paragraphs.length - 1];
  if (last && last.length < 40 && !/[.!?`)]$/.test(last)) paragraphs = paragraphs.slice(0, -1);

  if (paragraphs.length) out[folder] = paragraphs;
}

writeFileSync('scripts/overview-text.json', JSON.stringify(out, null, 2));
console.log(`extracted overviews: ${Object.keys(out).length} / ${readdirSync(dir).length}`);
