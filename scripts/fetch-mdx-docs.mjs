// Fetches each React family's official .mdx documentation page from
// carbon-design-system/carbon on GitHub (not published to npm) and extracts the
// "## Overview" prose section — the real explanatory text Carbon writes for the
// component, not a fabricated summary.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const families = JSON.parse(readFileSync('scripts/manifest.json', 'utf8'));
const targets = families.filter((f) => f.reactExports.length > 0).map((f) => f.folder);

mkdirSync('scripts/mdx-cache', { recursive: true });

const BASE = 'https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/react/src/components';

async function fetchOne(folder) {
  const cachePath = `scripts/mdx-cache/${folder}.mdx`;
  if (existsSync(cachePath)) return { folder, status: 'cached' };
  const url = `${BASE}/${folder}/${folder}.mdx`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (res.ok) {
      writeFileSync(cachePath, await res.text());
      return { folder, status: 'ok' };
    }
  } catch (e) {}
  return { folder, status: 'missing' };
}

async function pool(items, limit, worker) {
  const results = [];
  let i = 0;
  async function run() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx]);
    }
  }
  await Promise.all(Array.from({ length: limit }, run));
  return results;
}

const results = await pool(targets, 8, fetchOne);
const ok = results.filter((r) => r.status === 'ok').length;
const cached = results.filter((r) => r.status === 'cached').length;
const missing = results.filter((r) => r.status === 'missing');
console.log(`fetched: ${ok}, cached: ${cached}, missing: ${missing.length} / ${targets.length}`);
if (missing.length) console.log('missing:', missing.map((m) => m.folder).join(', '));
