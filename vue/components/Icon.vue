<!--
  Vue wrapper for Carbon's official Web Component <cds-icon>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      icon (CarbonIcon | undefined) — The imported icon
      size (number) — The size of the icon (16, 20, 24, 32)
      class (string | undefined) — Custom CSS classes
      aria-label (string | null) — The aria-label for the icon

  Usage:
    <script setup> import Icon from './components/Icon.vue' </script>
    <Icon>Example</Icon>
-->
<script setup>
import '@carbon/web-components/es/components/icon/index.js';
</script>

<template>
  <cds-icon v-bind="$attrs"><slot /></cds-icon>
</template>
