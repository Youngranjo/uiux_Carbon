<!--
  Vue wrapper for Carbon's official Web Component <cds-table-header-cell>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      expandable (boolean) — `true` if the table has expandable rows
      is-selectable (boolean) — `true` if this table has selectable rows
      is-sortable (boolean) — `true` if this table header column should be sortable
      sort-active (boolean) — `true` if this table header cell is of a primary sorting column.
      sort-cycle (TABLE_SORT_CYCLE | undefined) — The table sort cycle in use.
      sort-direction (TABLE_SORT_DIRECTION | undefined) — The table sort direction.

  Usage:
    <script setup> import TableHeaderCell from './components/TableHeaderCell.vue' </script>
    <TableHeaderCell>Example</TableHeaderCell>
-->
<script setup>
import '@carbon/web-components/es/components/data-table/index.js';
</script>

<template>
  <cds-table-header-cell v-bind="$attrs"><slot /></cds-table-header-cell>
</template>
