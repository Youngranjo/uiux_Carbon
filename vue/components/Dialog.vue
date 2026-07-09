<!--
  Vue wrapper for Carbon's official Web Component <cds-dialog>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      modal (boolean) — Specifies whether the dialog is modal or non-modal
      aria-label (string | null) — Specify text for the accessibility label of the dialog
      aria-labelledby (string | null) — Specify the ID of an element that labels this dialog
      aria-describedby (string | null) — Specify the ID of an element that describes this dialog
      role ("dialog" | "alertdialog") — Specify the role of the dialog for accessibility
      loading-status ("inactive" | "active" | "finished" | "error") — Specify the loading status
      loading-description (string) — Specify the description for the loading text
      loading-success-delay (number) — Provide a delay for the setTimeout for success

  Usage:
    <script setup> import Dialog from './components/Dialog.vue' </script>
    <Dialog>Example</Dialog>
-->
<script setup>
import '@carbon/web-components/es/components/dialog/index.js';
</script>

<template>
  <cds-dialog v-bind="$attrs"><slot /></cds-dialog>
</template>
