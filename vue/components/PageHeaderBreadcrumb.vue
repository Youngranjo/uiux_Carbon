<!--
  Vue wrapper for Carbon's official Web Component <cds-page-header-breadcrumb>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      border (boolean) — Specify if breadcrumb bar has bottom border.
      within-grid (boolean) — Set to `true` if the breadcrumb bar is sitting within a grid
      page-actions-flush (boolean) — Set to `true` if page actions should be flush (no padding)
      content-actions-flush (boolean) — Set to `true` if content actions should be flush (no padding)

  Usage:
    <script setup> import PageHeaderBreadcrumb from './components/PageHeaderBreadcrumb.vue' </script>
    <PageHeaderBreadcrumb>Example</PageHeaderBreadcrumb>
-->
<script setup>
import '@carbon/web-components/es/components/page-header/index.js';
</script>

<template>
  <cds-page-header-breadcrumb v-bind="$attrs"><slot /></cds-page-header-breadcrumb>
</template>
