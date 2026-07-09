<!--
  Vue wrapper for Carbon's official Web Component <cds-radio-tile>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      checkmark-label (string) — The a11y text for the checkmark icon of the selected state.
      color-scheme (FORM_ELEMENT_COLOR_SCHEME) — The color scheme.
      disabled (boolean) — `true` if the seletable tile should be disabled.
      has-rounded-corners (boolean) — Specify if the `SeletableTile` component should be rendered with rounded corners.
      name (string)
      selected (boolean) — `true` to show the selected state.
      value (string)

  Usage:
    <script setup> import RadioTile from './components/RadioTile.vue' </script>
    <RadioTile>Example</RadioTile>
-->
<script setup>
import '@carbon/web-components/es/components/tile/index.js';
</script>

<template>
  <cds-radio-tile v-bind="$attrs"><slot /></cds-radio-tile>
</template>
