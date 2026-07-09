<!--
  Vue wrapper for Carbon's official Web Component <cds-dialog-close-button>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      close-button-label (string) — Specify a label for the close button of the modal; defaults to close

  Usage:
    <script setup> import DialogCloseButton from './components/DialogCloseButton.vue' </script>
    <DialogCloseButton>Example</DialogCloseButton>
-->
<script setup>
import '@carbon/web-components/es/components/dialog/index.js';
</script>

<template>
  <cds-dialog-close-button v-bind="$attrs"><slot /></cds-dialog-close-button>
</template>
