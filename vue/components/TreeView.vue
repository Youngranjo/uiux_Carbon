<!--
  Vue wrapper for Carbon's official Web Component <cds-tree-view>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      hide-label (boolean) — Specify whether or not the label should be hidden
      label (string) — Provide the label text that will be read by a screen reader
      size (TREE_SIZE) — Specify the size of the tree from a list of available sizes.

  Usage:
    <script setup> import TreeView from './components/TreeView.vue' </script>
    <TreeView>Example</TreeView>
-->
<script setup>
import '@carbon/web-components/es/components/tree-view/index.js';
</script>

<template>
  <cds-tree-view v-bind="$attrs"><slot /></cds-tree-view>
</template>
