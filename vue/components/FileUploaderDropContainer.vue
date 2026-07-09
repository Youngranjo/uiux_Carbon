<!--
  Vue wrapper for Carbon's official Web Component <cds-file-uploader-drop-container>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      accept (string) — The file types the file input should accept, separated by spaces and/or commas.
      disabled (boolean) — `true` if this drop container should be disabled.
      multiple (boolean) — `true` if this drop container should accept more than one files at once.
      name (string) — The name of the input.
      slot (string) — The shadow DOM slot to put this drop container in.

  Usage:
    <script setup> import FileUploaderDropContainer from './components/FileUploaderDropContainer.vue' </script>
    <FileUploaderDropContainer>Example</FileUploaderDropContainer>
-->
<script setup>
import '@carbon/web-components/es/components/file-uploader/index.js';
</script>

<template>
  <cds-file-uploader-drop-container v-bind="$attrs"><slot /></cds-file-uploader-drop-container>
</template>
