<!--
  Vue wrapper for Carbon's official Web Component <cds-modal>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      enable-dialog-element (boolean) — Enable the use of native dialog element instead of div with role="dialog"
      aria-label (string | null) — Specify text for the accessibility label of the header
      container-class (string) — The additional CSS class names for the container <div> of the element.
      full-width (boolean) — Specify whether or not the Modal content should have any inner padding.
      has-scrolling-content (boolean) — Specify whether the modal contains scrolling content
      size (MODAL_SIZE) — Modal size.
      should-submit-on-enter (boolean) — Specify if Enter key should be used as "submit" action that clicks the primary footer button
      loading-status ("inactive" | "active" | "finished" | "error") — Specify the loading status

  Usage:
    <script setup> import Modal from './components/Modal.vue' </script>
    <Modal>Example</Modal>
-->
<script setup>
import '@carbon/web-components/es/components/modal/index.js';
</script>

<template>
  <cds-modal v-bind="$attrs"><slot /></cds-modal>
</template>
