<!--
  Vue wrapper for Carbon's official Web Component <cds-table-batch-actions>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      active (boolean) — `true` if this batch actions bar should be active.
      selected-rows-count (number) — Numeric representation of the total number of items selected in a table.
      total-rows-count (number) — Numeric representation of the total number of items in a table.
      size (string) — The table size.

  Usage:
    <script setup> import TableBatchActions from './components/TableBatchActions.vue' </script>
    <TableBatchActions>Example</TableBatchActions>
-->
<script setup>
import '@carbon/web-components/es/components/data-table/index.js';
</script>

<template>
  <cds-table-batch-actions v-bind="$attrs"><slot /></cds-table-batch-actions>
</template>
