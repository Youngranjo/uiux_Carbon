<!--
  Vue wrapper for Carbon's official Web Component <cds-copy-button>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      button-class-name (string) — Specify an optional className to be added to your Button
      disabled (boolean) — `true` if the button should be disabled.
      feedback (string) — Specify the string that is displayed when the button is clicked and the content is copi
      align (POPOVER_ALIGNMENT) — How the tooltip is aligned to the trigger button.
      autoAlign (boolean) — Specify whether a auto align functionality should be applied
      feedback-timeout (number) — The number in milliseconds to determine how long the tooltip should remain.

  Usage:
    <script setup> import CopyButton from './components/CopyButton.vue' </script>
    <CopyButton>Example</CopyButton>
-->
<script setup>
import '@carbon/web-components/es/components/copy-button/index.js';
</script>

<template>
  <cds-copy-button v-bind="$attrs"><slot /></cds-copy-button>
</template>
