import { readFileSync, writeFileSync } from 'node:fs';

const families = JSON.parse(readFileSync('scripts/manifest.json', 'utf8'));
const sorted = [...families].sort((a, b) => a.folder.localeCompare(b.folder));

function tagToPascal(tagName) {
  return tagName.replace(/^cds-/, '').split('-').map((s) => s[0].toUpperCase() + s.slice(1)).join('');
}

// ---------------- core/README.md ----------------
const coreRows = sorted
  .filter((f) => f.tags.length)
  .map((f) => f.tags.map((t) => `| \`${tagToPascal(t.name)}.html\` | \`<${t.name}>\` | ${f.folder} | ${(t.description || '').split('\n')[0].replace(/\|/g, '\\|')} |`).join('\n'))
  .join('\n');

writeFileSync('core/README.md', `# core/

프레임워크 없이 순수 HTML에서 Carbon을 쓰는 방법입니다. Astryx의 \`core/\`와 달리 CSS를 실측/재구현하지
않았습니다 — Carbon은 오픈소스이므로 **실제 IBM 공식 패키지**(\`@carbon/web-components\`, \`@carbon/styles\`)를
그대로 설치해서 씁니다.

\`\`\`
core/
└── components/*.html   Web Component 태그 1개당 파일 1개 (총 ${[...new Set(families.flatMap((f) => f.tags.map((t) => t.name)))].length}개)
\`\`\`

## 설치

\`\`\`bash
npm install --save @carbon/web-components @carbon/styles
\`\`\`

## 프로젝트에서 쓰는 법

\`\`\`html
<link rel="stylesheet" href="node_modules/@carbon/styles/css/styles.min.css" />

<cds-button kind="primary">저장</cds-button>

<script type="module">
  import '@carbon/web-components/es/index.js'; // 전체 컴포넌트 등록
  // 또는 필요한 것만:
  // import '@carbon/web-components/es/components/button/index.js';
</script>
\`\`\`

이 폴더의 각 \`.html\` 파일은 \`../assets/carbon-web-components.bundle.js\`(위 소스를 esbuild로
오프라인 번들링한 것)와 \`../assets/carbon-styles.min.css\`를 불러와 브라우저에서 바로 열어도 동작합니다.

## 컴포넌트 목록 (Web Component 태그 기준)

| 파일 | 태그 | 소속 패밀리 | 설명 |
|---|---|---|---|
${coreRows}
`);

// ---------------- react/README.md ----------------
const reactRows = sorted
  .map((f) => {
    const status = f.reactExports.length ? 'ready' : 'preview only';
    const exp = f.reactExports.length ? f.reactExports.join(', ') : `(experimental: unstable_${f.folder})`;
    return `| \`${f.folder}.jsx\` | ${status} | ${exp.replace(/\|/g, '\\|')} |`;
  })
  .join('\n');

writeFileSync('react/README.md', `# react/

Carbon은 React를 공식 지원하므로, Astryx의 react/ 폴더와 동일한 방식(공식 패키지를 그대로 감싸서
재export)으로 구성했습니다. 재구현 없음 — \`node_modules/@carbon/react\`의 실제 소스를 그대로 씁니다.

\`\`\`
react/
└── components/*.jsx   React 패밀리(폴더) 1개당 파일 1개 (총 ${sorted.length}개)
\`\`\`

## 설치

\`\`\`bash
npm install --save @carbon/react @carbon/styles react react-dom
\`\`\`

## 프로젝트 엔트리에서 한 번만

\`\`\`js
import '@carbon/react/index.scss';
// Sass 빌드 파이프라인이 없다면 미리 컴파일된 CSS를 대신 써도 됩니다:
// import '../assets/carbon-styles.min.css';
\`\`\`

## 사용

\`\`\`jsx
import { Button } from './components/Button';

<Button kind="primary">저장</Button>
\`\`\`

## 컴포넌트 목록

일부 항목(${sorted.filter((f) => !f.reactExports.length).length}개)은 \`@carbon/web-components\`에서는 안정 버전이지만
\`@carbon/react\`에서는 아직 \`unstable_\`/\`preview_\` 접두사의 실험적 API로만 제공됩니다 — 표에 "preview only"로 표시했습니다.

| 파일 | 상태 | export |
|---|---|---|
${reactRows}
`);

// ---------------- vue/README.md ----------------
const vueRows = sorted
  .filter((f) => f.tags.length)
  .map((f) => f.tags.map((t) => `| \`${tagToPascal(t.name)}.vue\` | \`<${t.name}>\` | ${f.folder} |`).join('\n'))
  .join('\n');

writeFileSync('vue/README.md', `# vue/

Carbon은 IBM 공식 Vue 패키지가 없습니다. 공식 가이드는 "Vue는 Web Components를 네이티브 HTML 태그처럼
그대로 쓸 수 있다"는 것이므로, 이 폴더의 각 \`.vue\` 파일은 \`@carbon/web-components\`의 실제 커스텀 엘리먼트를
감싸는 얇은 SFC 래퍼입니다 (재구현 아님).

\`\`\`
vue/
└── components/*.vue   Web Component 태그 1개당 파일 1개 (총 ${[...new Set(families.flatMap((f) => f.tags.map((t) => t.name)))].length}개)
\`\`\`

## 설치

\`\`\`bash
npm install --save @carbon/web-components @carbon/styles
\`\`\`

## Vue 앱 엔트리에서 한 번만

\`\`\`js
// main.js
import { createApp } from 'vue';
import '@carbon/web-components/es/index.js';

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-');
app.mount('#app');
\`\`\`

\`\`\`html
<!-- index.html -->
<link rel="stylesheet" href="node_modules/@carbon/styles/css/styles.min.css" />
\`\`\`

## 사용

\`\`\`vue
<script setup>
import Button from './components/Button.vue';
</script>

<template>
  <Button kind="primary">저장</Button>
</template>
\`\`\`

## 컴포넌트 목록

| 파일 | 태그 | 소속 패밀리 |
|---|---|---|
${vueRows}
`);

console.log('READMEs written: core/README.md, react/README.md, vue/README.md');
