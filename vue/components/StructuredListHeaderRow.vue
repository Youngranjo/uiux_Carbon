<!--
  Vue wrapper for Carbon's official Web Component <cds-structured-list-header-row>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      selection-name (string) — The `name` attribute for the `<input>` for selection.

  Usage:
    <script setup> import StructuredListHeaderRow from './components/StructuredListHeaderRow.vue' </script>
    <StructuredListHeaderRow>Example</StructuredListHeaderRow>
-->
<script setup>
import '@carbon/web-components/es/components/structured-list/index.js';
</script>

<template>
  <cds-structured-list-header-row v-bind="$attrs"><slot /></cds-structured-list-header-row>
</template>
