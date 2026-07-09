<!--
  Vue wrapper for Carbon's official Web Component <cds-grid>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      align (GridAlignmentType | undefined) — Specify grid alignment. Default is center
      condensed (boolean) — Collapse the gutter to 1px. Useful for fluid layouts.
      narrow (boolean) — Container hangs 16px into the gutter. Useful for
      full-width (boolean) — Remove the default max width that the grid has set
      with-row-gap (boolean) — Add a row gap to the grid that matches the current gutter size.

  Usage:
    <script setup> import Grid from './components/Grid.vue' </script>
    <Grid>Example</Grid>
-->
<script setup>
import '@carbon/web-components/es/components/grid/index.js';
</script>

<template>
  <cds-grid v-bind="$attrs"><slot /></cds-grid>
</template>
