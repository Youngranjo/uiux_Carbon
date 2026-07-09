<!--
  Vue wrapper for Carbon's official Web Component <cds-table-expanded-row>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      colspan (number) — The colspan.
      expanded (boolean) — `true` if the table row should be expanded.
      filtered (boolean) — `true` if the table row should be filtered.
      highlighted (boolean) — `true` if the table row should be highlighted.
      selected (boolean) — `true` if the previous table row has been selected

  Usage:
    <script setup> import TableExpandedRow from './components/TableExpandedRow.vue' </script>
    <TableExpandedRow>Example</TableExpandedRow>
-->
<script setup>
import '@carbon/web-components/es/components/data-table/index.js';
</script>

<template>
  <cds-table-expanded-row v-bind="$attrs"><slot /></cds-table-expanded-row>
</template>
