<!--
  Vue wrapper for Carbon's official Web Component <cds-modal-footer>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      has-three-buttons (boolean) — `true` if this modal footer has more than two buttons.

  Usage:
    <script setup> import ModalFooter from './components/ModalFooter.vue' </script>
    <ModalFooter>Example</ModalFooter>
-->
<script setup>
import '@carbon/web-components/es/components/modal/index.js';
</script>

<template>
  <cds-modal-footer v-bind="$attrs"><slot /></cds-modal-footer>
</template>
