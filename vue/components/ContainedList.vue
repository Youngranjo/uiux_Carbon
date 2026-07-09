<!--
  Vue wrapper for Carbon's official Web Component <cds-contained-list>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      is-inset (boolean) — Specify whether the dividing lines in between list items should be inset.
      kind (Variants) — The kind of ContainedList you want to display
      label (string) — A label describing the contained list.
      size ("lg" | "md" | "sm" | "xl" | undefined) — Specify the size of the contained list.

  Usage:
    <script setup> import ContainedList from './components/ContainedList.vue' </script>
    <ContainedList>Example</ContainedList>
-->
<script setup>
import '@carbon/web-components/es/components/contained-list/index.js';
</script>

<template>
  <cds-contained-list v-bind="$attrs"><slot /></cds-contained-list>
</template>
