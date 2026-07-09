<!--
  Vue wrapper for Carbon's official Web Component <cds-clickable-tile>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      color-scheme (FORM_ELEMENT_COLOR_SCHEME) — The color scheme.
      has-rounded-corners (boolean) — Specify if the `ClickableTile` component should be rendered with rounded corners.
      ai-label (boolean)
      slug (boolean) — deprecated - remove in v12
      disabled (boolean) — `true` if the link should be disabled.
      download (string) — The default file name.
      href (string) — Link `href`.
      hreflang (string) — The language of what `href` points to.

  Usage:
    <script setup> import ClickableTile from './components/ClickableTile.vue' </script>
    <ClickableTile>Example</ClickableTile>
-->
<script setup>
import '@carbon/web-components/es/components/tile/index.js';
</script>

<template>
  <cds-clickable-tile v-bind="$attrs"><slot /></cds-clickable-tile>
</template>
