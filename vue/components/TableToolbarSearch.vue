<!--
  Vue wrapper for Carbon's official Web Component <cds-table-toolbar-search>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      persistent (boolean) — `true` if the search box should be always be open.
      autocomplete (string) — Specify an optional value for the autocomplete property on the underlying <input>,
      autofocus (boolean) — Sets the input to be focussed automatically on page load. Defaults to false
      close-button-label-text (string) — Specify a label to be read by screen readers on the "close" button
      disabled (boolean) — `true` if the search box should be disabled.
      expandable (boolean) — `true` if the search bar can be expandable
      expanded (boolean) — `true` if the search box should be expanded.
      hasCustomIcon (boolean)

  Usage:
    <script setup> import TableToolbarSearch from './components/TableToolbarSearch.vue' </script>
    <TableToolbarSearch>Example</TableToolbarSearch>
-->
<script setup>
import '@carbon/web-components/es/components/data-table/index.js';
</script>

<template>
  <cds-table-toolbar-search v-bind="$attrs"><slot /></cds-table-toolbar-search>
</template>
