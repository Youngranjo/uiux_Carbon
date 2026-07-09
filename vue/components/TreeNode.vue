<!--
  Vue wrapper for Carbon's official Web Component <cds-tree-node>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      active (boolean) — sets if tree node is active
      disabled (boolean) — disabled property
      is-expanded (boolean) — Specify if the TreeNode is expanded (only applicable to parent nodes)
      href (string) — Optional: The URL the TreeNode is linking to
      id (string) — Specify the TreeNode's ID. Must be unique in the DOM and is used for props.active, props.selected and aria-owns
      label (string) — Rendered label for the TreeNode
      selected (boolean) — sets if tree node is selected
      onClick (((event: Event) => void) | undefined) — when adding an href to control the click functionality

  Usage:
    <script setup> import TreeNode from './components/TreeNode.vue' </script>
    <TreeNode>Example</TreeNode>
-->
<script setup>
import '@carbon/web-components/es/components/tree-view/index.js';
</script>

<template>
  <cds-tree-node v-bind="$attrs"><slot /></cds-tree-node>
</template>
