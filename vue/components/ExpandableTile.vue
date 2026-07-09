<!--
  Vue wrapper for Carbon's official Web Component <cds-expandable-tile>.
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
      expanded (boolean) — `true` to expand this expandable tile.
      has-rounded-corners (boolean) — Specify if the `ExpandableTile` component should be rendered with rounded corners.
      with-interactive (boolean) — `true` to expand this expandable tile.

  Usage:
    <script setup> import ExpandableTile from './components/ExpandableTile.vue' </script>
    <ExpandableTile>Example</ExpandableTile>
-->
<script setup>
import '@carbon/web-components/es/components/tile/index.js';
</script>

<template>
  <cds-expandable-tile v-bind="$attrs"><slot /></cds-expandable-tile>
</template>
