<!--
  Vue wrapper for Carbon's official Web Component <cds-tabs-vertical>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      custom-height (string | undefined) — Option to set a height style only if using vertical variation.

  Usage:
    <script setup> import TabsVertical from './components/TabsVertical.vue' </script>
    <TabsVertical>Example</TabsVertical>
-->
<script setup>
import '@carbon/web-components/es/components/tabs/index.js';
</script>

<template>
  <cds-tabs-vertical v-bind="$attrs"><slot /></cds-tabs-vertical>
</template>
