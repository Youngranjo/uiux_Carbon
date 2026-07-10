// Fetches the REAL Storybook story source (*.stories.ts) for each Web Component family
// from carbon-design-system/carbon on GitHub — mirrors fetch-stories.mjs (React) but for
// the web-components package. Not published to npm, so GitHub is the only source.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const families = JSON.parse(readFileSync('scripts/manifest.json', 'utf8'));
const targets = [...new Set(families.filter((f) => f.wcFolder).map((f) => f.wcFolder))];

mkdirSync('scripts/wc-stories-cache', { recursive: true });

const BASE = 'https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/web-components/src/components';

async function fetchOne(folder) {
  const cachePath = `scripts/wc-stories-cache/${folder}.txt`;
  if (existsSync(cachePath)) return { folder, status: 'cached' };
  const url = `${BASE}/${folder}/${folder}.stories.ts`;
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
