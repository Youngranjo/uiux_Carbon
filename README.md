# Carbon Design System — 로컬 스타일 가이드

IBM의 오픈소스 디자인 시스템 [Carbon](https://carbondesignsystem.com/)을 HTML(Web Components) ·
React · Vue 세 가지 소스로 정리한 로컬 참고 자료입니다. `F:\UIUX\Style Guide\Astryx`와 같은 구조
(언어별 폴더 + 루트 `index.html` 카탈로그)를 따르되, Carbon은 완전한 오픈소스이므로 Astryx처럼
CSS를 실측/재구현하지 않고 **`node_modules`에 실제로 설치된 IBM 공식 패키지**를 그대로 감싸거나
재export합니다.

## 열어보기

```bash
npx serve .
# 또는 그냥 index.html을 브라우저로 직접 열어도 됩니다.
```

`index.html`이 카탈로그(왼쪽 사이드바 = 116개 컴포넌트 패밀리)입니다. 컴포넌트를 선택하면:

- 실제 `@carbon/web-components`를 오프라인 번들링한 라이브 데모
- **공식 Storybook 예제** — [react](https://react.carbondesignsystem.com/) /
  [web-components](https://web-components.carbondesignsystem.com/) /
  [vue](https://vue.carbondesignsystem.com/) 세 공식 Storybook 사이트에 있는 실제 예제 소스를
  GitHub에서 그대로 가져온 HTML/React/Vue 탭 (재구현·창작 아님). 24개 패밀리는 그 예제의 실제
  마크업을 정적으로 재구성해 **라이브 프리뷰**까지 함께 렌더링합니다 (Accordion의 "Choose your
  plan" 4단 아코디언처럼 공식 Storybook 화면과 동일한 내용이 실제로 렌더링됨).
- "소스 열기" 링크(실제 파일)

가 함께 표시됩니다.

## 폴더 구조

```
Carbon/
├── index.html                       카탈로그 (전체 컴포넌트 탐색 + 라이브 데모)
├── core/
│   ├── README.md
│   ├── components/*.html            Web Component 태그 1개당 파일 1개 (216개)
│   └── components/*.stories.ts      carbon-design-system/carbon의 실제 Storybook 예제 (99개)
├── react/
│   ├── README.md
│   ├── components/*.jsx             @carbon/react 재export 래퍼 (116개 패밀리)
│   └── components/*.stories.tsx     carbon-design-system/carbon의 실제 Storybook 예제 (81개)
├── vue/
│   ├── README.md
│   ├── components/*.vue             @carbon/vue(Carbon 10, 113개) 재export 또는 Web Component 래퍼
│   └── components/*.stories.js      carbon-components-vue의 실제 Storybook 예제 (있는 경우)
├── assets/
│   ├── carbon-web-components.bundle.js   @carbon/web-components 오프라인 번들 (esbuild)
│   ├── carbon-styles.min.css             @carbon/styles 공식 컴파일 CSS
│   └── index-data.js                     index.html이 읽는 카탈로그 데이터
├── scripts/                         이 모든 것을 생성한 빌드 스크립트 (아래 참고)
└── node_modules/@carbon/...         실제 설치된 공식 소스 (npm install로 받음)
```

## 설치 (공홈 기준)

Carbon 공식 문서([carbondesignsystem.com/developing/frameworks/react](https://carbondesignsystem.com/developing/frameworks/react/))
기준 설치 명령어입니다. 이 프로젝트의 `node_modules`에는 이미 아래가 전부 설치되어 있습니다.

| 프레임워크 | 지원 상태 | 설치 |
|---|---|---|
| React | 공식, Carbon 11 | `npm install --save @carbon/react @carbon/styles` |
| Web Components (HTML) | 공식, Carbon 11 | `npm install --save @carbon/web-components @carbon/styles` |
| Vue | 공식이지만 **Carbon 10**(`bx--` 접두사, 나머지와 디자인이 다름) | `npm install --save @carbon/vue vue` |
| Angular | 커뮤니티/별도 패키지 | `npm install --save carbon-components-angular` (이 프로젝트에는 미포함) |

> Vue는 `vue.carbondesignsystem.com`의 실제 패키지인 [`@carbon/vue`](https://github.com/carbon-design-system/carbon-components-vue)를
> 쓰지만, 이 패키지가 아직 Carbon 10을 기반으로 하고 있어(`carbon-components@^10.x`) React/HTML과
> 시각적으로 다릅니다. `@carbon/vue`에 대응하는 컴포넌트가 없는 경우에만 Carbon 11
> `@carbon/web-components`를 감싼 자체 래퍼로 대체합니다 — 자세한 내용은 [vue/README.md](vue/README.md) 참고.

## 이 카탈로그가 만들어진 방식

Astryx(비공개 디자인 시스템)는 CSS를 `getComputedStyle`로 실측해 재구현해야 했지만, Carbon은
100% 오픈소스라 다릅니다:

1. `npm install --save @carbon/react @carbon/web-components @carbon/styles @carbon/icons @carbon/vue vue`
   로 공식 패키지를 실제 설치
2. `scripts/extract-manifest.mjs` / `extract-vue-manifest.mjs` — 설치된 `@carbon/react/lib/index.js`,
   `@carbon/web-components/custom-elements.json`, `carbon-components-vue`의 실제 `src/index.js`를
   **직접 파싱**해 컴포넌트 목록/속성/설명/Cv 컴포넌트 매핑을 추출 (손으로 나열하지 않음 →
   `scripts/manifest.json`, `scripts/vue-manifest.json`)
3. `scripts/build-wc-bundle.mjs` — 실제 `@carbon/web-components` 소스를 esbuild로 오프라인 단일
   파일로 번들링 (`assets/carbon-web-components.bundle.js`) → 서버/설치 없이 브라우저에서 바로 동작
4. `scripts/fetch-stories.mjs` / `fetch-wc-stories.mjs` / `fetch-vue-stories.mjs` — 세 공식 Storybook
   (react / web-components / vue.carbondesignsystem.com)의 실제 예제 소스를 GitHub에서 가져와 캐시
5. `scripts/generate.mjs` — manifest + 캐시를 바탕으로 `core/`, `react/`, `vue/` 파일과
   `assets/index-data.js`를 생성
6. `scripts/apply-vue-overrides.mjs` — `@carbon/vue`에 대응하는 컴포넌트가 있는 곳만
   Web Component 래퍼를 실제 `@carbon/vue` 재export로 덮어씀
7. `scripts/generate-readmes.mjs` — 각 폴더 README의 컴포넌트 표 생성

다시 생성하려면:

```bash
npm run extract   # manifest.json, vue-manifest.json
npm run bundle     # carbon-web-components.bundle.js
npm run stories    # 선택: 세 공식 Storybook의 실제 예제 갱신 (네트워크 필요, 캐시되면 건너뜀)
npm run generate   # core/react/vue 파일 + index-data.js + README
```

### 공식 Storybook 예제 (`*.stories.tsx` / `*.stories.ts` / `*.stories.js`)

npm 패키지에는 컴포넌트 소스만 배포되고 Storybook 예제는 포함되지 않습니다. 그래서
`npm run stories`가 세 공식 저장소에서 실제 스토리 소스를 가져와 캐시하고, 각 언어 폴더에
`<Folder>.stories.*`로 그대로 복사합니다. "Choose your plan"(React/HTML), "Episode 1"(Vue) 같은
예제 문구는 전부 이 실제 소스에서 온 것이며 직접 지어낸 것이 아닙니다.

| 소스 | 저장소 | 매칭 |
|---|---|---|
| React | [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon) `packages/react` | 105개 중 81개 |
| Web Components | 같은 저장소 `packages/web-components` | 81개 중 72개 |
| Vue | [carbon-design-system/carbon-components-vue](https://github.com/carbon-design-system/carbon-components-vue) | 113개 매핑 중 40개 |

찾지 못한 나머지는 부모 컴포넌트 스토리에 포함되어 있거나(예: PrimaryButton은 Button 스토리 안에서
`kind` variant로만 다뤄짐) 전용 예제가 아직 없는 경우이며, 이때는 기존 재export 스니펫으로 대체됩니다.
캐시(`scripts/*-stories-cache/`)가 있으면 재실행 시 네트워크 호출 없이 건너뜁니다.

### 컴포넌트 설명 (`scripts/fetch-mdx-docs.mjs` / `extract-overview.mjs`)

각 컴포넌트 페이지의 "설명" 문단은 [react.carbondesignsystem.com](https://react.carbondesignsystem.com/)이
실제로 쓰는 `*.mdx` 문서(carbon-design-system/carbon, npm에는 미포함)의 `## Overview` 섹션을 그대로
가져온 것입니다. `<Canvas>` 임베드처럼 JSX가 섞인 문단은 그대로 렌더링할 수 없어 제외하고, 순수 텍스트
문단만 남깁니다 — 105개 중 76개에서 mdx를 찾았고, 그중 37개는 Canvas/JSX 없이 순수 텍스트만으로 된
문단이 있어 실제로 표시됩니다. 나머지는 설명 없이 요약 한 줄만 보입니다(지어내지 않음).

### 공식 예제의 라이브 프리뷰 (`scripts/extract-official-demos.mjs`)

Web Component 공식 스토리는 lit-html 템플릿(`html\`<cds-accordion alignment="${alignment}">...\``)으로
작성되어 있어서, 코드로 보여주는 것과 별개로 **실제로 렌더링**하려면 바인딩을 정적 HTML로 풀어야 합니다.
이 스크립트가 각 스토리의 `render()` 함수와 `args` 객체를 파싱해서 `${alignment}` → `"end"`,
`?disabled="${disabled}"` → (참이면) `disabled`처럼 실제 값으로 치환합니다. 아이콘 함수 호출이나
`.map()` 반복문처럼 정적으로 풀 수 없는 표현식이 하나라도 남으면 — 화면에 깨진 텍스트가 보이는 것보다
차라리 안 보여주는 게 낫다는 원칙으로 — 해당 컴포넌트는 조용히 건너뜁니다. 그 결과 81개 중 24개만
라이브 프리뷰가 있고, 나머지는 코드 탭만 보여줍니다.

### 수동 큐레이션 (`scripts/official-live-demos-manual.json`)

자동 파싱이 못 푸는 컴포넌트, 또는 공식 사이트의 **모든 변형**(기본/Controlled/Skeleton/With Layer 등)을
정확히 반영하고 싶을 때 쓰는 파일입니다. 공식 Storybook의 "Show code" 패널 내용을 그대로 붙여넣어
`{ "<wcFolder>": { "examples": [{ "title", "html", "react", "vue" }, ...] } }` 형식으로 채우면,
`generate.mjs`가 자동 추출 결과보다 이 파일을 항상 우선합니다. `npm run stories`가 덮어쓰지 않으므로
한 번 채워두면 재생성해도 유지됩니다. Accordion(기본/Controlled/Skeleton/With Layer, 4개 변형)이 예시입니다.

## 알아둘 점

- `react/components/*.jsx`의 대부분(105/116)은 `@carbon/react`의 **안정 공개 API**를 그대로
  재export합니다. 나머지 11개(Dialog, ChatButton, PageHeader 등)는 Web Component로는 안정적이지만
  `@carbon/react`에서는 아직 `unstable_`/`preview_` 접두사의 실험적 API로만 제공됩니다 — 해당 파일에
  주석으로 표시되어 있습니다.
- `vue/components/*.vue`는 대응하는 `@carbon/vue`(Carbon 10) 컴포넌트가 있으면 그것을 재export하고
  (113개), 없으면 공식 가이드대로 Web Components(Carbon 11)를 감싼 얇은 SFC를 씁니다. 두 방식이
  섞여 있으므로 실제 프로젝트에 쓸 때는 파일 상단 주석에서 어느 쪽인지 반드시 확인하세요 — Carbon
  10/11이 같은 페이지에 같이 있으면 시각적으로 어긋납니다.
- `@carbon/web-components`가 참조하는 아이콘 파일(`16.js`/`20.js`/`24.js`) 중 상당수가 현재 배포된
  `@carbon/icons` 11.83.0의 `es/` 빌드에는 없습니다(패키지 간 일시적 버전 불일치). 처음엔 같은 아이콘의
  아무 사이즈 파일로 대체했는데, chevron처럼 정사각형이 아닌 아이콘은 이렇게 하면 실제로 비율이 눌리거나
  늘어나 보였습니다. `scripts/build-icon-overrides.mjs`가 같은 패키지 안에 그대로 남아있는
  `@carbon/icons/metadata.json`(사이즈별 원본 path 데이터를 갖고 있음)에서 정확한 사이즈의 아이콘을
  다시 만들어 채워 넣어 해결했습니다 — 실제 웹 컴포넌트가 쓰는 64개 아이콘 중 62개를 이렇게 복구했고,
  `npm run bundle`을 실행할 때마다 자동으로 갱신됩니다.
- `@carbon/web-components`의 `es/index.js`(전체 컴포넌트를 한 번에 등록하는 배럴 파일)가 실제로는
  ContainedList, Grid, Copy, Menu, PageHeader, Fluid* 계열 등 85개 중 24개를 빠뜨리고 있습니다 —
  소스 파일도 완전하고 `custom-elements.json`에도 정식으로 등록돼 있는데, 배럴에서만 빠져 있어서
  그 컴포넌트들은 커스텀 엘리먼트로 아예 업그레이드되지 않고(스타일 없는 평문으로 렌더링) 조용히
  깨져 있었습니다. `scripts/build-wc-bundle.mjs`가 빌드할 때마다 실제 `es/components/` 폴더를 스캔해서
  배럴이 빠뜨린 폴더를 찾아 별도로 import하는 합성 엔트리 파일을 만들어 번들링합니다 — 결과적으로
  85개 컴포넌트 폴더 전부가 실제로 등록됩니다.
- 전체 UI 폰트는 `'IBM Plex Sans', -apple-system, 'Pretendard', 'Segoe UI', sans-serif` 순서입니다.
  IBM Plex Sans엔 한글 글리프가 없고, `-apple-system`/`Segoe UI`는 OS마다 실제 렌더링되는 한글 글꼴이
  들쭉날쭉하기 때문에, 세 번째 우선순위로 [Pretendard](https://github.com/orioncactus/pretendard)
  가변 폰트(npm `pretendard` 패키지에서 그대로 복사한 `assets/fonts/PretendardVariable.ttf`, OFL
  라이선스)를 직접 임베드해 일관된 한글 타이포그래피를 보장합니다. `assets/fonts.css`(index.html과
  모든 `core/components/*.html`이 공유)에 `@font-face`로 선언되어 있습니다.
