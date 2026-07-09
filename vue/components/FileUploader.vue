<!--
  Vue wrapper for Carbon's official Web Component <cds-file-uploader>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (boolean) — `true` if the file uploader should disabled.
      label-description (string) — The description text.
      label-title (string) — The label title.

  Usage:
    <script setup> import FileUploader from './components/FileUploader.vue' </script>
    <FileUploader>Example</FileUploader>
-->
<script setup>
import '@carbon/web-components/es/components/file-uploader/index.js';
</script>

<template>
  <cds-file-uploader v-bind="$attrs"><slot /></cds-file-uploader>
</template>
