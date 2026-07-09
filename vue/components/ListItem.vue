<!--
  Vue wrapper for Carbon's official Web Component <cds-list-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      nested (boolean) — `true` if this list item is a child of a nested list.

  Usage:
    <script setup> import ListItem from './components/ListItem.vue' </script>
    <ListItem>Example</ListItem>
-->
<script setup>
import '@carbon/web-components/es/components/list/index.js';
</script>

<template>
  <cds-list-item v-bind="$attrs"><slot /></cds-list-item>
</template>
