// Generates the whole style guide (core/react/vue component files + index.html) from
// scripts/manifest.json, which was extracted from the REAL installed @carbon/react and
// @carbon/web-components source in node_modules (see extract-manifest.mjs).
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs';

const families = JSON.parse(readFileSync('scripts/manifest.json', 'utf8'));

// Clean slate each run — otherwise a tag/family removed from the manifest (e.g. the
// 'tabs-story-wrapper' internal Storybook helper filtered out in extract-manifest.mjs)
// leaves its old generated file behind forever, silently drifting from the manifest.
for (const dir of ['core/components', 'react/components', 'vue/components']) {
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
}

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

// Attribute names that directly carry visible text — worth setting even when their
// documented default is "" (an empty default just means "no placeholder text", not
// "not meant to be used"). Carbon commonly pairs one of these with a same-named slot
// that falls back to the attribute's value (e.g. accordion-item's `title` attr feeds
// its `slot="title"` fallback), so filling the attribute is often enough on its own.
const CONTENT_ATTR_NAMES = ['title', 'label', 'label-text', 'helper-text', 'value', 'placeholder', 'name'];
const PREFERRED_DEMO_ATTRS = ['kind', 'size', 'value', 'label', 'title', 'placeholder', 'name', 'type', 'alignment'];

function humanize(name) {
  return name.replace(/^cds-/, '').replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());
}

function sampleAttrs(tag) {
  const usable = (tag.attributes || []).filter((a) => a.name !== 'styles' && !/^on/.test(a.name) && a.type !== 'boolean');
  const withValue = usable
    .filter((a) => (a.default && a.default !== '""') || CONTENT_ATTR_NAMES.includes(a.name) || tag.slots?.includes(a.name))
    .map((a) => ({ ...a, demoValue: a.default && a.default !== '""' ? a.default.replace(/^"|"$/g, '') : humanize(tag.name) }));
  const preferred = PREFERRED_DEMO_ATTRS.map((name) => withValue.find((a) => a.name === name)).filter(Boolean);
  const rest = withValue.filter((a) => !preferred.includes(a));
  return [...preferred, ...rest].slice(0, 3);
}

// A handful of Carbon components are containers that only look/behave right with real
// children (an <cds-accordion> with plain text isn't valid usage — it expects
// <cds-accordion-item> children). Composing 2-3 real child tags here, instead of a
// generic text node, is the difference between a demo that looks broken and one that
// actually shows the component.
const CONTAINER_CHILDREN = {
  'cds-accordion': () => `<cds-accordion-item title="Section 1 title">Section 1 content.</cds-accordion-item><cds-accordion-item title="Section 2 title">Section 2 content.</cds-accordion-item>`,
  'cds-tabs': () => `<cds-tab id="tab-1" target="panel-1" value="tab-1">Tab 1</cds-tab><cds-tab id="tab-2" target="panel-2" value="tab-2">Tab 2</cds-tab>`,
  'cds-select': () => `<cds-select-item value="1">Option 1</cds-select-item><cds-select-item value="2">Option 2</cds-select-item>`,
  'cds-dropdown': () => `<cds-dropdown-item value="1">Option 1</cds-dropdown-item><cds-dropdown-item value="2">Option 2</cds-dropdown-item>`,
  'cds-multi-select': () => `<cds-multi-select-item value="1">Option 1</cds-multi-select-item><cds-multi-select-item value="2">Option 2</cds-multi-select-item>`,
  'cds-combo-box': () => `<cds-combo-box-item value="1">Option 1</cds-combo-box-item><cds-combo-box-item value="2">Option 2</cds-combo-box-item>`,
  'cds-radio-button-group': () => `<cds-radio-button value="1" label-text="Option 1"></cds-radio-button><cds-radio-button value="2" label-text="Option 2"></cds-radio-button>`,
  'cds-content-switcher': () => `<cds-content-switcher-item value="1">First</cds-content-switcher-item><cds-content-switcher-item value="2">Second</cds-content-switcher-item>`,
  'cds-tile-group': () => `<cds-radio-tile value="1">Tile 1</cds-radio-tile><cds-radio-tile value="2">Tile 2</cds-radio-tile>`,
  'cds-breadcrumb': () => `<cds-breadcrumb-item><cds-breadcrumb-link href="#">Home</cds-breadcrumb-link></cds-breadcrumb-item><cds-breadcrumb-item><cds-breadcrumb-link href="#">Section</cds-breadcrumb-link></cds-breadcrumb-item>`,
  'cds-contained-list': () => `<cds-contained-list-item>Item 1</cds-contained-list-item><cds-contained-list-item>Item 2</cds-contained-list-item>`,
  'cds-overflow-menu': () => `<cds-overflow-menu-body><cds-overflow-menu-item>Action 1</cds-overflow-menu-item><cds-overflow-menu-item>Action 2</cds-overflow-menu-item></cds-overflow-menu-body>`,
  'cds-ordered-list': () => `<cds-list-item>First item</cds-list-item><cds-list-item>Second item</cds-list-item>`,
  'cds-unordered-list': () => `<cds-list-item>First item</cds-list-item><cds-list-item>Second item</cds-list-item>`,
  'cds-button-set': () => `<cds-button kind="secondary">Cancel</cds-button><cds-button kind="primary">Save</cds-button>`,
  'cds-checkbox-group': () => `<cds-checkbox value="1">Option 1</cds-checkbox><cds-checkbox value="2">Option 2</cds-checkbox>`,
  'cds-structured-list': () => `<cds-structured-list-head><cds-structured-list-header-row><cds-structured-list-header-cell>Column A</cds-structured-list-header-cell></cds-structured-list-header-row></cds-structured-list-head><cds-structured-list-body><cds-structured-list-row><cds-structured-list-cell>Row 1</cds-structured-list-cell></cds-structured-list-row></cds-structured-list-body>`,
};

function demoMarkupForTag(tag, outerName) {
  const outer = outerName || tag.name;
  // Composed containers get curated children only — generic attribute-filling (e.g.
  // `value`/`name` falling back to the humanized tag name) produces nonsensical values
  // like name="Radio button group" that add noise without adding clarity.
  if (CONTAINER_CHILDREN[tag.name]) {
    return `<${outer}>${CONTAINER_CHILDREN[tag.name]()}</${outer}>`;
  }

  const attrs = sampleAttrs(tag);
  const usedNames = new Set(attrs.map((a) => a.name));
  const attrStr = attrs.map((a) => `${a.name}="${escapeHtml(a.demoValue)}"`).join(' ');
  const label = humanize(tag.name);

  // Fill any named slot not already covered by an attribute of the same name (e.g.
  // notification's slot="subtitle" has no matching attribute, so it needs real markup).
  const slotChildren = (tag.slots || [])
    .filter((slotName) => !usedNames.has(slotName))
    .map((slotName) => `<span slot="${slotName}">${escapeHtml(humanize(slotName))}</span>`)
    .join('');
  const bodyText = tag.hasDefaultSlot || !tag.slots?.length ? escapeHtml(label) : '';

  return `<${outer}${attrStr ? ' ' + attrStr : ''}>${slotChildren}${bodyText}</${outer}>`;
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
  <link rel="stylesheet" href="../../assets/fonts.css" />
  <style>
    body { font-family: 'IBM Plex Sans', -apple-system, 'Pretendard', 'Segoe UI', sans-serif; margin: 0; padding: 2rem; background: #fff; }
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

  <script src="../../assets/carbon-web-components.bundle.js"></script>
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

  // Real Storybook example source, fetched from carbon-design-system/carbon on GitHub
  // (scripts/fetch-stories.mjs) — not published to npm, so this is the only way to get
  // Carbon's own realistic multi-variant examples (Default/Controlled/...) instead of a
  // generic one-liner. Kept as a sibling file so it's inspectable like any other source.
  const storyCachePath = `scripts/stories-cache/${folder}.txt`;
  if (existsSync(storyCachePath)) {
    const storySrc = readFileSync(storyCachePath, 'utf8');
    writeFileSync(`react/components/${folder}.stories.tsx`, storySrc);
  }
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
let vueManifest = [];
let vueStoryTemplates = {};
let officialLiveDemos = {};
let officialLiveDemosManual = {};
try {
  vueManifest = JSON.parse(readFileSync('scripts/vue-manifest.json', 'utf8'));
  vueStoryTemplates = JSON.parse(readFileSync('scripts/vue-story-templates.json', 'utf8'));
  officialLiveDemos = JSON.parse(readFileSync('scripts/official-live-demos.json', 'utf8'));
} catch (e) {}
try {
  // Hand-curated overrides, keyed by wcFolder: { examples: [{title, html, react, vue}] }.
  // Filled in when the user pastes real Storybook source directly (every named variant —
  // Default, Controlled, Skeleton, ... — not just one), which is higher-fidelity than the
  // automated lit-template resolver in extract-official-demos.mjs. Always wins over the
  // auto-extracted version, and `npm run stories` never touches this file, so entries
  // persist across rebuilds.
  officialLiveDemosManual = JSON.parse(readFileSync('scripts/official-live-demos-manual.json', 'utf8'));
} catch (e) {}

const indexFamilies = families
  .map((family) => {
    const { folder, reactExports, wcFolder, tags } = family;

    // Official example content, straight from GitHub source (not fabricated):
    // React from carbon-design-system/carbon, Web Components from the same monorepo,
    // Vue from carbon-design-system/carbon-components-vue (Carbon 10, "Cv" components).
    const wcStoryPath = wcFolder ? `scripts/wc-stories-cache/${wcFolder}.txt` : null;
    const officialHtml = wcStoryPath && existsSync(wcStoryPath)
      ? readFileSync(wcStoryPath, 'utf8').replace(/^\/\*\*[\s\S]*?\*\/\n+/, '')
      : null;
    const cvMatches = vueManifest.filter((v) => v.folder === folder);
    const officialVue = cvMatches
      .map((v) => vueStoryTemplates[v.cvName])
      .find((t) => t) || null;
    const officialVueComponent = cvMatches[0]?.cvName || null;
    const vueStoryCachePath = officialVueComponent ? `scripts/vue-stories-cache/${officialVueComponent}.txt` : null;
    // Real Storybook markup, statically resolved from the lit render() template so it can
    // be mounted as an actual live custom-element demo (scripts/extract-official-demos.mjs)
    // — best-effort: only present when the resolver could fully eliminate lit/JS syntax.
    const officialLiveDemo = wcFolder ? officialLiveDemos[wcFolder] || null : null;

    if (officialHtml) writeFileSync(`core/components/${folder}.stories.ts`, readFileSync(wcStoryPath, 'utf8'));
    if (vueStoryCachePath && existsSync(vueStoryCachePath)) {
      writeFileSync(`vue/components/${folder}.stories.js`, readFileSync(vueStoryCachePath, 'utf8'));
    }
    const tagEntries = tags.map((tag) => {
      const pascal = tagToPascal(tag.name);
      return {
        name: tag.name,
        description: (tag.description || '').split('\n')[0],
        demoHtml: demoMarkupForTag(tag),
        vueSnippet: demoMarkupForTag(tag, pascal),
        coreFile: `core/components/${pascal}.html`,
        vueFile: `vue/components/${pascal}.vue`,
        attrCount: (tag.attributes || []).length,
      };
    });
    const description = tagEntries[0]?.description || (reactExports.length ? `React: ${reactExports.slice(0, 3).join(', ')}` : '');

    const storyCachePath = `scripts/stories-cache/${folder}.txt`;
    const hasStory = reactExports.length > 0 && existsSync(storyCachePath);
    const reactSnippet = hasStory
      ? readFileSync(storyCachePath, 'utf8').replace(/^\/\*\*[\s\S]*?\*\/\n+/, '') // strip license header
      : reactExports.length
      ? `import { ${reactExports.slice(0, 4).join(', ')}${reactExports.length > 4 ? ', ...' : ''} } from './react/components/${folder}';\n\n// re-exports the real @carbon/react package (${reactExports.length} export${reactExports.length > 1 ? 's' : ''} total — see the full file)`
      : `// ${folder} is only experimental (unstable_/preview_) in @carbon/react today.\n// Stable today via the real Web Component:\nimport '@carbon/web-components/es/components/${wcFolder}/index.js';`;

    // One or more named examples (Default, Controlled, Skeleton, ...) per family. Manual
    // curation (pasted straight from the official Storybook "Show code" panels) wins when
    // present; otherwise falls back to the single auto-extracted/generic example. Keyed by
    // the React family name (always unique) — NOT wcFolder, which several families can
    // share (e.g. AspectRatio, Column and Row all alias to the "grid" web component).
    const manual = officialLiveDemosManual[folder];
    const officialExamples = manual && manual.examples
      ? manual.examples.map((ex) => ({
          title: ex.title,
          html: ex.html || null,
          liveRenderable: !!ex.html,
          react: ex.react || null,
          vue: ex.vue || null,
        }))
      : [{
          title: '기본',
          html: officialLiveDemo || officialHtml,
          liveRenderable: !!officialLiveDemo,
          react: reactSnippet,
          vue: officialVue,
        }];

    return {
      folder,
      category: categorize(folder),
      description,
      reactExports,
      reactFile: reactExports.length || tags.length ? `react/components/${folder}.jsx` : null,
      reactStoryFile: hasStory ? `react/components/${folder}.stories.tsx` : null,
      reactSnippet,
      wcFolder,
      officialHtml,
      officialHtmlFile: officialHtml ? `core/components/${folder}.stories.ts` : null,
      officialVue,
      officialVueComponent,
      officialVueFile: vueStoryCachePath && existsSync(vueStoryCachePath) ? `vue/components/${folder}.stories.js` : null,
      officialLiveDemo,
      officialExamples,
      officialExamplesAreManual: !!(manual && manual.examples),
      tags: tagEntries,
    };
  })
  .sort((a, b) => a.folder.localeCompare(b.folder));

mkdirSync('assets', { recursive: true });
writeFileSync('assets/index-data.js', `// Generated by scripts/generate.mjs — do not hand-edit.\nwindow.__CARBON_INDEX__ = ${JSON.stringify({ families: indexFamilies, generatedTagCount: uniqueTags.length }, null, 0)};\n`);
console.log('assets/index-data.js written');
