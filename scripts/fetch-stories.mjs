// Fetches the REAL Storybook story source (*.stories.tsx) for each React family from the
// official carbon-design-system/carbon GitHub repo (raw.githubusercontent.com — not the
// npm package, since stories aren't published to npm). This is the source of the realistic
// example content ("Choose your plan", "Controlled" variant, etc.) shown in Carbon's own
// Storybook — used instead of generic placeholder text in the family's React code tab.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const families = JSON.parse(readFileSync('scripts/manifest.json', 'utf8'));
const targets = families.filter((f) => f.reactExports.length > 0).map((f) => f.folder);

mkdirSync('scripts/stories-cache', { recursive: true });

const BASE = 'https://raw.githubusercontent.com/carbon-design-system/carbon/main/packages/react/src/components';
const EXTS = ['.stories.tsx', '.stories.js'];

// Fallback for folders with no `<Folder>/<Folder>.stories.tsx` at the top level (nested
// "stories/" subfolders, non-matching filenames like "Treeview.stories.js", etc.) — built
// from a full repo tree listing (scripts/find-story-paths.mjs), keyed by top-level folder.
let storyPathsByFolder = {};
try {
  storyPathsByFolder = JSON.parse(readFileSync('scripts/story-paths-by-folder.json', 'utf8'));
} catch (e) {}

function pickPaths(folder) {
  const all = storyPathsByFolder[folder] || [];
  const real = all.filter((p) => !p.includes('.featureflag.'));
  if (!real.length) return [];
  const exact = real.find((p) => p.endsWith(`/${folder}.stories.tsx`) || p.endsWith(`/${folder}.stories.js`));
  if (exact) return [exact];
  const basic = real.filter((p) => /basic/i.test(p));
  if (basic.length) return basic.slice(0, 2);
  return real.slice(0, 2); // bound output size for compound folders (DataTable, Notification, ...)
}

async function fetchOne(folder) {
  const cachePath = `scripts/stories-cache/${folder}.txt`;
  if (existsSync(cachePath)) return { folder, status: 'cached' };

  for (const ext of EXTS) {
    const url = `${BASE}/${folder}/${folder}${ext}`;
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
      if (res.ok) {
        writeFileSync(cachePath, await res.text());
        return { folder, status: 'ok', url };
      }
    } catch (e) {}
  }

  const paths = pickPaths(folder);
  if (paths.length) {
    const texts = [];
    for (const p of paths) {
      try {
        const res = await fetch(`https://raw.githubusercontent.com/carbon-design-system/carbon/main/${p}`, { signal: AbortSignal.timeout(10000) });
        if (res.ok) texts.push(`// ${p}\n\n` + (await res.text()));
      } catch (e) {}
    }
    if (texts.length) {
      writeFileSync(cachePath, texts.join('\n\n// ─────────────────────────────\n\n'));
      return { folder, status: 'ok-tree', paths };
    }
  }

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
const ok = results.filter((r) => r.status === 'ok');
const cached = results.filter((r) => r.status === 'cached');
const missing = results.filter((r) => r.status === 'missing');

console.log(`fetched: ${ok.length}, cached: ${cached.length}, missing: ${missing.length} / ${targets.length}`);
if (missing.length) console.log('missing folders:', missing.map((m) => m.folder).join(', '));

writeFileSync('scripts/stories-fetch-report.json', JSON.stringify(results, null, 2));
