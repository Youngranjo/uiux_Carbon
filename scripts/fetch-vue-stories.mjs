// Fetches the REAL Storybook story source (*.stories.mdx) for each mapped @carbon/vue
// component from carbon-design-system/carbon-components-vue on GitHub, then extracts the
// `const template = \`...\`;` Vue template literal(s) — the actual markup Carbon's own
// Vue Storybook renders (real content: "Episode 1", etc.), not fabricated placeholder text.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const vueManifest = JSON.parse(readFileSync('scripts/vue-manifest.json', 'utf8'));
// Stories are named after the individual component, not the folder (CvButton/ contains
// CvButton.stories.js, CvButtonSet.stories.js, CvIconButton.stories.js, ... separately).
const targets = [...new Set(vueManifest.map((v) => `${v.cvFolder}/${v.cvName}`))];

mkdirSync('scripts/vue-stories-cache', { recursive: true });

const BASE = 'https://raw.githubusercontent.com/carbon-design-system/carbon-components-vue/main/src/components';
const EXTS = ['.stories.mdx', '.stories.js'];

async function fetchOne(target) {
  const cvName = target.split('/')[1];
  const cachePath = `scripts/vue-stories-cache/${cvName}.txt`;
  if (existsSync(cachePath)) return { target, status: 'cached' };
  for (const ext of EXTS) {
    const url = `${BASE}/${target}${ext}`;
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
      if (res.ok) {
        writeFileSync(cachePath, await res.text());
        return { target, status: 'ok' };
      }
    } catch (e) {}
  }
  return { target, status: 'missing' };
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
if (missing.length) console.log('missing:', missing.map((m) => m.target).join(', '));
