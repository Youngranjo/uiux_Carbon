<!--
  Vue wrapper for Carbon's official Web Component <cds-contained-list-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      clickable (boolean) — Whether this item is clickable
      disabled (boolean) — Whether this item is disabled.

  Usage:
    <script setup> import ContainedListItem from './components/ContainedListItem.vue' </script>
    <ContainedListItem>Example</ContainedListItem>
-->
<script setup>
import '@carbon/web-components/es/components/contained-list/index.js';
</script>

<template>
  <cds-contained-list-item v-bind="$attrs"><slot /></cds-contained-list-item>
</template>
