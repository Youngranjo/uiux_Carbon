<!--
  Vue wrapper for Carbon's official Web Component <cds-table-cell>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      overflow-menu-on-hover (boolean) — Specify whether the overflow menu (if it exists) should be shown always, or only on hover
      size (string) — The table size.

  Usage:
    <script setup> import TableCell from './components/TableCell.vue' </script>
    <TableCell>Example</TableCell>
-->
<script setup>
import '@carbon/web-components/es/components/data-table/index.js';
</script>

<template>
  <cds-table-cell v-bind="$attrs"><slot /></cds-table-cell>
</template>
