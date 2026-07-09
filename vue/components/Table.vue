<!--
  Vue wrapper for Carbon's official Web Component <cds-table>.
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
      expandable (boolean) — Specify whether the rows should be able to be expandable
      filterRows ((rowText: string, searchString: string) => boolean) — The method used when filtering the table with the search bar.
      headerCount (number) — The total headers
      is-selectable (boolean) — `true` if this table contains selectable rows
      is-sortable (boolean) — `true` if this table should support sorting.
      locale (string) — The table size.
      overflow-menu-on-hover (boolean) — Specify whether the overflow menu (if it exists) should be shown always, or only on hover

  Usage:
    <script setup> import Table from './components/Table.vue' </script>
    <Table>Example</Table>
-->
<script setup>
import '@carbon/web-components/es/components/data-table/index.js';
</script>

<template>
  <cds-table v-bind="$attrs"><slot /></cds-table>
</template>
