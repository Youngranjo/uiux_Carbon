<!--
  Vue wrapper for Carbon's official Web Component <cds-table-skeleton>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      column-count (number) — Specify the number of columns that you want to render in the skeleton state
      row-count (number) — Specify the number of rows that you want to render in the skeleton state
      show-header (boolean) — Specify if the table header should be rendered as part of the skeleton.
      show-toolbar (boolean) — Specify if the table toolbar should be rendered as part of the skeleton.
      zebra (boolean) — true to add useZebraStyles striping.

  Usage:
    <script setup> import TableSkeleton from './components/TableSkeleton.vue' </script>
    <TableSkeleton>Example</TableSkeleton>
-->
<script setup>
import '@carbon/web-components/es/components/data-table/index.js';
</script>

<template>
  <cds-table-skeleton v-bind="$attrs"><slot /></cds-table-skeleton>
</template>
