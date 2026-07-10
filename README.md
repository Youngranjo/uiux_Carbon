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
- HTML / React / Vue 소스 코드 미리보기 + "소스 열기" 링크(실제 파일)

가 함께 표시됩니다.

## 폴더 구조

```
Carbon/
├── index.html                       카탈로그 (전체 컴포넌트 탐색 + 라이브 데모)
├── core/
│   ├── README.md
│   └── components/*.html            Web Component 태그 1개당 파일 1개 (216개)
├── react/
│   ├── README.md
│   ├── components/*.jsx             @carbon/react 재export 래퍼 (116개 패밀리)
│   └── components/*.stories.tsx     carbon-design-system/carbon의 실제 Storybook 예제 (81개)
├── vue/
│   ├── README.md
│   └── components/*.vue             Web Component를 감싼 얇은 Vue SFC (216개)
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
| React | 공식 | `npm install --save @carbon/react @carbon/styles` |
| Web Components (HTML) | 공식 | `npm install --save @carbon/web-components @carbon/styles` |
| Vue | 커뮤니티 가이드 (Web Components를 네이티브 태그처럼 사용) | `npm install --save @carbon/web-components @carbon/styles` |
| Angular | 커뮤니티/별도 패키지 | `npm install --save carbon-components-angular` (이 프로젝트에는 미포함) |

## 이 카탈로그가 만들어진 방식

Astryx(비공개 디자인 시스템)는 CSS를 `getComputedStyle`로 실측해 재구현해야 했지만, Carbon은
100% 오픈소스라 다릅니다:

1. `npm install --save @carbon/react @carbon/web-components @carbon/styles @carbon/icons` 로 공식
   패키지를 실제 설치
2. `scripts/extract-manifest.mjs` — 설치된 `@carbon/react/lib/index.js`와
   `@carbon/web-components/custom-elements.json`을 **직접 파싱**해 컴포넌트 목록/속성/설명을 추출
   (손으로 나열하지 않음 → `scripts/manifest.json`)
3. `scripts/build-wc-bundle.mjs` — 실제 `@carbon/web-components` 소스를 esbuild로 오프라인 단일
   파일로 번들링 (`assets/carbon-web-components.bundle.js`) → 서버/설치 없이 브라우저에서 바로 동작
4. `scripts/generate.mjs` — manifest를 바탕으로 `core/`, `react/`, `vue/` 파일과
   `assets/index-data.js`를 생성
5. `scripts/generate-readmes.mjs` — 각 폴더 README의 컴포넌트 표 생성

다시 생성하려면:

```bash
node scripts/extract-manifest.mjs
node scripts/build-wc-bundle.mjs
node scripts/fetch-stories.mjs   # 선택: carbon-design-system/carbon GitHub에서 실제 Storybook 예제 갱신 (네트워크 필요)
node scripts/generate.mjs
node scripts/generate-readmes.mjs
```

### 실제 Storybook 예제 (`react/components/*.stories.tsx`)

npm에는 컴포넌트 소스만 배포되고 Storybook 예제(`*.stories.tsx`)는 포함되지 않습니다. 그래서
`scripts/fetch-stories.mjs`가 [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon)
GitHub 저장소에서 각 컴포넌트의 실제 스토리 소스를 가져와 `scripts/stories-cache/`에 캐시하고,
`react/components/<Folder>.stories.tsx`로 그대로 복사합니다 — "Choose your plan", "Controlled" 같은
실제 예제 문구는 전부 이 실제 소스에서 온 것이며 직접 지어낸 것이 아닙니다. 105개 React 패밀리 중
81개는 전용 스토리 파일을 찾아 반영했고(직접 매칭 74개 + 하위 `stories/` 폴더·다른 파일명까지 리포지토리
전체 트리를 뒤져서 찾은 7개), 나머지 24개(PrimaryButton·SelectItem 등)는 부모 컴포넌트 스토리에 포함되어
있어 자체 파일이 없으므로 기존 간단한 재export 스니펫을 그대로 씁니다. 캐시가 있으면 재실행 시 네트워크
호출 없이 건너뜁니다.

## 알아둘 점

- `react/components/*.jsx`의 대부분(105/116)은 `@carbon/react`의 **안정 공개 API**를 그대로
  재export합니다. 나머지 11개(Dialog, ChatButton, PageHeader 등)는 Web Component로는 안정적이지만
  `@carbon/react`에서는 아직 `unstable_`/`preview_` 접두사의 실험적 API로만 제공됩니다 — 해당 파일에
  주석으로 표시되어 있습니다.
- `vue/components/*.vue`는 Carbon 공식 Vue 패키지가 없다는 전제하에, 공식이 권장하는 방식(Web
  Components를 그대로 사용)을 얇은 SFC로 감싼 것입니다.
- 아이콘 일부(`@carbon/web-components` 2.x가 기대하는 `16.js`/`20.js`/`24.js`)가 현재 배포된
  `@carbon/icons` 11.83.0에는 없어(패키지 간 일시적 버전 불일치), 번들링 시 같은 아이콘의 사용 가능한
  파일로 자동 대체했습니다 (`scripts/build-wc-bundle.mjs` 참고). 시각적으로는 문제없이 렌더링됩니다.
