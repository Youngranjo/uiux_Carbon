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
  const section = m[1];

  const paragraphs = section
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p && !p.includes('<') && !p.startsWith('#'))
    .map((p) => p.replace(/\s+/g, ' '));

  if (paragraphs.length) out[folder] = paragraphs;
}

writeFileSync('scripts/overview-text.json', JSON.stringify(out, null, 2));
console.log(`extracted overviews: ${Object.keys(out).length} / ${readdirSync(dir).length}`);
