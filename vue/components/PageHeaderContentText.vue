<!--
  Vue wrapper for Carbon's official Web Component <cds-page-header-content-text>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      subtitle (string) — Subtitle text of the page-header-content

  Usage:
    <script setup> import PageHeaderContentText from './components/PageHeaderContentText.vue' </script>
    <PageHeaderContentText>Example</PageHeaderContentText>
-->
<script setup>
import '@carbon/web-components/es/components/page-header/index.js';
</script>

<template>
  <cds-page-header-content-text v-bind="$attrs"><slot /></cds-page-header-content-text>
</template>
