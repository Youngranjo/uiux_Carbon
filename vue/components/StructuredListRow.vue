<!--
  Vue wrapper for Carbon's official Web Component <cds-structured-list-row>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      selected (boolean) — `true` if this structured list row should be selectable and selected.
      selection-name (string) — The `name` attribute for the `<input>` for selection.
      selection-value (string) — The `value` attribute for the `<input>` for selection.
      selection-icon-title (string) — The content to put into the `<title>` attribute of the selection icon.

  Usage:
    <script setup> import StructuredListRow from './components/StructuredListRow.vue' </script>
    <StructuredListRow>Example</StructuredListRow>
-->
<script setup>
import '@carbon/web-components/es/components/structured-list/index.js';
</script>

<template>
  <cds-structured-list-row v-bind="$attrs"><slot /></cds-structured-list-row>
</template>
