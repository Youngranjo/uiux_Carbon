<!--
  Vue wrapper for Carbon's official Web Component <cds-icon-indicator>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      size (number) — Icon indicator should be size 16 or 20
      label (string) — Label next to the icon.
      kind (ICON_INDICATOR_KIND) — Icon Indicator kind

  Usage:
    <script setup> import IconIndicator from './components/IconIndicator.vue' </script>
    <IconIndicator>Example</IconIndicator>
-->
<script setup>
import '@carbon/web-components/es/components/icon-indicator/index.js';
</script>

<template>
  <cds-icon-indicator v-bind="$attrs"><slot /></cds-icon-indicator>
</template>
