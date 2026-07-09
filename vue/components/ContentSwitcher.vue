<!--
  Vue wrapper for Carbon's official Web Component <cds-content-switcher>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      value (string) — The value of the selected item.
      selected-index (number) — Specify a selected index for the initially selected content
      selection-mode (string) — Choose whether or not to automatically change selection on focus when left/right arrow pressed. Defaults to 'automatic'
      size (CONTENT_SWITCHER_SIZE) — Content switcher size.
      icon (boolean) — Icon only.
      low-contrast (boolean) — `true` to use the low contrast version.

  Usage:
    <script setup> import ContentSwitcher from './components/ContentSwitcher.vue' </script>
    <ContentSwitcher>Example</ContentSwitcher>
-->
<script setup>
import '@carbon/web-components/es/components/content-switcher/index.js';
</script>

<template>
  <cds-content-switcher v-bind="$attrs"><slot /></cds-content-switcher>
</template>
