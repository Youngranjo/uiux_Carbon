import { readFileSync, writeFileSync } from 'node:fs';

const treePath = process.argv[2];
const d = JSON.parse(readFileSync(treePath, 'utf8'));
console.log('truncated:', d.truncated, 'total entries:', d.tree.length);

const stories = d.tree.filter(
  (t) => t.path.startsWith('packages/react/src/components/') && /\.stories\.(tsx|js|jsx)$/.test(t.path)
);
console.log('story files found:', stories.length);

// path like packages/react/src/components/DataTable/stories/DataTable.stories.tsx
// -> top-level folder = 'DataTable'
const byFolder = {};
for (const s of stories) {
  const rest = s.path.replace('packages/react/src/components/', '');
  const folder = rest.split('/')[0];
  (byFolder[folder] ??= []).push(s.path);
}
writeFileSync('scripts/story-paths-by-folder.json', JSON.stringify(byFolder, null, 2));
console.log('folders with at least one story file:', Object.keys(byFolder).length);
