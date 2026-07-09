// Generates the whole style guide (core/react/vue component files + index.html) from
// scripts/manifest.json, which was extracted from the REAL installed @carbon/react and
// @carbon/web-components source in node_modules (see extract-manifest.mjs).
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const families = JSON.parse(readFileSync('scripts/manifest.json', 'utf8'));

mkdirSync('core/components', { recursive: true });
mkdirSync('react/components', { recursive: true });
mkdirSync('vue/components', { recursive: true });

// ---------- helpers ----------
function tagToPascal(tagName) {
  return tagName
    .replace(/^cds-/, '')
    .split('-')
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join('');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const CATEGORY_RULES = [
  [/^(Button|IconButton|PrimaryButton|SecondaryButton|DangerButton|ButtonSet|ComboButton|CopyButton|ChatButton)$/, 'Buttons'],
  [/^(TextInput|TextArea|NumberInput|PasswordInput|Search|ExpandableSearch|Slider|Toggle|ToggleSmall|Checkbox|CheckboxGroup|InlineCheckbox|RadioButton|RadioButtonGroup|Select|SelectItem|SelectItemGroup|Dropdown|MultiSelect|ComboBox|ComboBox|FileUploader|Form|FormGroup|FormItem|FormLabel|FluidForm|Fluid.*|DatePicker.*|TimePicker.*)$/, 'Forms & inputs'],
  [/^(DataTable|DataTableSkeleton|StructuredList|Table)$/, 'Data display'],
  [/^(Accordion|Tabs|TabContent|Tile|TileGroup|ContentSwitcher|TreeView|OverflowMenu|OverflowMenuItem|Menu|MenuButton|ContextMenu|ContainedList)$/, 'Content layout'],
  [/^(UIShell|SideNav.*|Header.*|Switcher.*|Breadcrumb|BreadcrumbItem|Pagination|PaginationNav|SkipToContent|PageHeader)$/, 'Navigation & shell'],
  [/^(Modal|ComposedModal|ModalWrapper|Dialog|Popover|Tooltip|Toggletip|Overlay|SidePanel|Tearsheet)$/, 'Overlays'],
  [/^(Notification|ActionableNotification|StaticNotification|InlineLoading|Loading|ProgressBar|ProgressIndicator|BadgeIndicator|ShapeIndicator|IconIndicator)$/, 'Feedback & status'],
  [/^(Grid|FlexGrid|Row|Column|Stack|Layer|AspectRatio|Layout)$/, 'Layout'],
  [/^(Heading|Text|Link|CodeSnippet|Copy|Icon|Tag|OperationalTag|SelectableTag|DismissibleTag)$/, 'Typography & content'],
  [/^(SkeletonIcon|SkeletonPlaceholder|SkeletonText)$/, 'Skeletons'],
  [/^(AILabel|AISkeleton|Slug)$/, 'AI'],
  [/^(ClassPrefix|IdPrefix|LayoutDirection|FeatureFlags|ErrorBoundary|Theme|Portal|Utilities)$/, 'Utilities'],
];
function categorize(folder) {
  for (const [re, cat] of CATEGORY_RULES) if (re.test(folder)) return cat;
  return 'Other';
}

const PREFERRED_DEMO_ATTRS = ['kind', 'size', 'value', 'label', 'title', 'placeholder', 'name', 'type', 'alignment'];

function sampleAttrs(tag) {
  // Prefer well-known, illustrative string attributes over boolean/internal ones.
  const candidates = (tag.attributes || []).filter(
    (a) => a.name !== 'styles' && !/^on/.test(a.name) && a.type !== 'boolean' && a.default && a.default !== '""'
  );
  const preferred = PREFERRED_DEMO_ATTRS.map((name) => candidates.find((a) => a.name === name)).filter(Boolean);
  const rest = candidates.filter((a) => !preferred.includes(a));
  return [...preferred, ...rest].slice(0, 3);
}

function demoMarkupForTag(tag) {
  const attrs = sampleAttrs(tag);
  const attrStr = attrs
    .map((a) => {
      const val = a.default.replace(/^"|"$/g, '');
      return `${a.name}="${escapeHtml(val)}"`;
    })
    .join(' ');
  const label = tagToPascal(tag.name).replace(/([a-z])([A-Z])/g, '$1 $2');
  return `<${tag.name}${attrStr ? ' ' + attrStr : ''}>${escapeHtml(label)}</${tag.name}>`;
}

// ---------- 1. core/components/<Tag>.html — one real, runnable HTML file per Web Component tag ----------
const allTags = families.flatMap((f) => f.tags.map((t) => ({ ...t, family: f.folder })));
const uniqueTags = [...new Map(allTags.map((t) => [t.name, t])).values()].sort((a, b) => a.name.localeCompare(b.name));

for (const tag of uniqueTags) {
  const pascal = tagToPascal(tag.name);
  const demo = demoMarkupForTag(tag);
  const attrRows = (tag.attributes || [])
    .map((a) => `        <tr><td><code>${escapeHtml(a.name)}</code></td><td><code>${escapeHtml(a.type || 'string')}</code></td><td>${escapeHtml(a.default ?? '')}</td><td>${escapeHtml(a.description || '')}</td></tr>`)
    .join('\n');
  const html = `<!doctype html>
<!--
  ${tag.name} — real Carbon Web Component, loaded from the official @carbon/web-components
  package (bundled offline at ../../assets/carbon-web-components.bundle.js).
  Source: node_modules/@carbon/web-components (npm install --save @carbon/web-components)
-->
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${pascal} — Carbon Web Component</title>
  <link rel="stylesheet" href="../../assets/carbon-styles.min.css" />
  <style>
    body { font-family: 'IBM Plex Sans', sans-serif; margin: 0; padding: 2rem; background: #fff; }
    .demo { padding: 2rem; border: 1px solid #e0e0e0; margin-block: 1.5rem; }
    table { border-collapse: collapse; width: 100%; font-size: 13px; }
    td, th { border: 1px solid #e0e0e0; padding: 6px 10px; text-align: left; vertical-align: top; }
    h1 { font-size: 1.5rem; } code { background: #f4f4f4; padding: 1px 5px; }
  </style>
</head>
<body>
  <p><a href="../../index.html">&larr; back to index</a></p>
  <h1><code>${tag.name}</code></h1>
  <p>${escapeHtml(tag.description || '')}</p>

  <div class="demo">
    ${demo}
  </div>

  <h2>Attributes</h2>
  <table>
    <thead><tr><th>name</th><th>type</th><th>default</th><th>description</th></tr></thead>
    <tbody>
${attrRows || '        <tr><td colspan="4">none documented</td></tr>'}
    </tbody>
  </table>

  <script type="module">
    import '../../assets/carbon-web-components.bundle.js';
  </script>
</body>
</html>
`;
  writeFileSync(`core/components/${pascal}.html`, html);
}

// ---------- 2. vue/components/<Tag>.vue — thin Vue wrapper per Web Component tag ----------
for (const tag of uniqueTags) {
  const pascal = tagToPascal(tag.name);
  const wcFolder = families.find((f) => f.tags.some((t) => t.name === tag.name))?.wcFolder;
  const importPath = `@carbon/web-components/es/components/${wcFolder}/index.js`;
  const attrDocs = (tag.attributes || [])
    .slice(0, 8)
    .map((a) => `      ${a.name} (${a.type || 'string'})${a.description ? ' — ' + a.description.split('\n')[0] : ''}`)
    .join('\n');
  const vue = `<!--
  Vue wrapper for Carbon's official Web Component <${tag.name}>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
${attrDocs || '      (none documented)'}

  Usage:
    <script setup> import ${pascal} from './components/${pascal}.vue' </script>
    <${pascal}>Example</${pascal}>
-->
<script setup>
import '${importPath}';
</script>

<template>
  <${tag.name} v-bind="$attrs"><slot /></${tag.name}>
</template>
`;
  writeFileSync(`vue/components/${pascal}.vue`, vue);
}

// ---------- 3. react/components/<Folder>.jsx — thin re-export wrapper per React family ----------
for (const family of families) {
  const { folder, reactExports, wcFolder, tags } = family;
  let jsx;
  if (reactExports.length > 0) {
    jsx = `// react/components/${folder}.jsx
//
// @carbon/react re-export — Carbon officially supports React, so this file does not
// reimplement anything: it re-exports the real, installed package source as-is.
//
// Install:
//   npm install --save @carbon/react @carbon/styles react react-dom
//
// Project entry, once:
//   import '@carbon/react/index.scss';  // or the precompiled ../../assets/carbon-styles.min.css
//
// Usage:
//   import { ${reactExports[0]} } from './components/${folder}';

export {
${reactExports.map((n) => `  ${n},`).join('\n')}
} from '@carbon/react';
`;
  } else {
    const tagList = tags.map((t) => t.name).join(', ') || '(see @carbon/web-components)';
    jsx = `// react/components/${folder}.jsx
//
// ${folder} is stable as a Carbon Web Component (${tagList}) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_${folder} } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/${wcFolder}/index.js';
//        <${tags[0]?.name ?? 'cds-' + wcFolder} />

import '@carbon/web-components/es/components/${wcFolder}/index.js';

export function ${folder}(props) {
  return React.createElement('${tags[0]?.name ?? 'cds-' + wcFolder}', props);
}
`;
  }
  writeFileSync(`react/components/${folder}.jsx`, jsx);
}

console.log(`core html files: ${uniqueTags.length}`);
console.log(`vue files: ${uniqueTags.length}`);
console.log(`react files: ${families.length}`);

writeFileSync('scripts/categories.json', JSON.stringify(
  Object.fromEntries(families.map((f) => [f.folder, categorize(f.folder)])),
  null,
  2
));

// ---------- 4. assets/index-data.js — catalog data consumed by the root index.html ----------
const indexFamilies = families
  .map((family) => {
    const { folder, reactExports, wcFolder, tags } = family;
    const tagEntries = tags.map((tag) => {
      const pascal = tagToPascal(tag.name);
      return {
        name: tag.name,
        description: (tag.description || '').split('\n')[0],
        demoHtml: demoMarkupForTag(tag),
        coreFile: `core/components/${pascal}.html`,
        vueFile: `vue/components/${pascal}.vue`,
        attrCount: (tag.attributes || []).length,
      };
    });
    const description = tagEntries[0]?.description || (reactExports.length ? `React: ${reactExports.slice(0, 3).join(', ')}` : '');
    return {
      folder,
      category: categorize(folder),
      description,
      reactExports,
      reactFile: reactExports.length || tags.length ? `react/components/${folder}.jsx` : null,
      wcFolder,
      tags: tagEntries,
    };
  })
  .sort((a, b) => a.folder.localeCompare(b.folder));

mkdirSync('assets', { recursive: true });
writeFileSync('assets/index-data.js', `// Generated by scripts/generate.mjs — do not hand-edit.\nwindow.__CARBON_INDEX__ = ${JSON.stringify({ families: indexFamilies, generatedTagCount: uniqueTags.length }, null, 0)};\n`);
console.log('assets/index-data.js written');
