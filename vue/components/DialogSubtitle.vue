<!--
  Vue wrapper for Carbon's official Web Component <cds-dialog-subtitle>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      id (string) — Specify an optional id for the subtitle element

  Usage:
    <script setup> import DialogSubtitle from './components/DialogSubtitle.vue' </script>
    <DialogSubtitle>Example</DialogSubtitle>
-->
<script setup>
import '@carbon/web-components/es/components/dialog/index.js';
</script>

<template>
  <cds-dialog-subtitle v-bind="$attrs"><slot /></cds-dialog-subtitle>
</template>
