<!--
  Vue wrapper for Carbon's official Web Component <cds-table-header-row>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      batch-expansion (boolean) — `true` if this table should support batch expansion
      disabled (boolean) — `true` if this table row should be disabled.
      filtered (boolean) — `true` if this table row should be filtered out.
      hide-checkbox (boolean) — Specify whether the checkbox should be present in the DOM,
      highlighted (boolean) — `true` if the table row should be highlighted.
      overflow-menu-on-hover (boolean) — Specify whether the overflow menu (if it exists) should be shown always, or only on hover
      selected (boolean) — `true` if this table row should be selected.
      selection-label (string) — The `aria-label` attribute for the `<label>` for selection.

  Usage:
    <script setup> import TableHeaderRow from './components/TableHeaderRow.vue' </script>
    <TableHeaderRow>Example</TableHeaderRow>
-->
<script setup>
import '@carbon/web-components/es/components/data-table/index.js';
</script>

<template>
  <cds-table-header-row v-bind="$attrs"><slot /></cds-table-header-row>
</template>
