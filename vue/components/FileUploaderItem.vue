<!--
  Vue wrapper for Carbon's official Web Component <cds-file-uploader-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      icon-description (string) — The `aria-label` attribute for the icon to delete this file uploader item.
      invalid (boolean) — Controls the invalid state and visibility of the `validityMessage`.
      disabled (boolean) — Controls the disabled state of this file uploader item.
      size (FILE_UPLOADER_ITEM_SIZE) — The size of this file uploader item.
      state (FILE_UPLOADER_ITEM_STATE) — The state of this file uploader item.
      error-subject (string) — The error subject text.
      error-body (string) — The error body text

  Usage:
    <script setup> import FileUploaderItem from './components/FileUploaderItem.vue' </script>
    <FileUploaderItem>Example</FileUploaderItem>
-->
<script setup>
import '@carbon/web-components/es/components/file-uploader/index.js';
</script>

<template>
  <cds-file-uploader-item v-bind="$attrs"><slot /></cds-file-uploader-item>
</template>
