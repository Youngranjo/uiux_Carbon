<!--
  Vue wrapper for Carbon's official Web Component <cds-copy>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      feedback (string) — Specify the string that is displayed when the button is clicked and the content is copi
      feedback-timeout (number) — The number in milliseconds to determine how long the tooltip should remain.
      align (string) — Checks if a badge indicator is being used with incorrect properties
      autoalign (boolean) — Specify whether a auto align functionality should be applied
      close-on-activation (boolean) — Determines whether the tooltip should close when inner content is activated (click, Enter or Space)
      defaultOpen (boolean) — Specify whether the tooltip should be open when it first renders
      enter-delay-ms (number) — Specify the duration in milliseconds to delay before displaying the tooltip
      leave-delay-ms (number) — Specify the duration in milliseconds to delay before hiding the tooltip

  Usage:
    <script setup> import Copy from './components/Copy.vue' </script>
    <Copy>Example</Copy>
-->
<script setup>
import '@carbon/web-components/es/components/copy/index.js';
</script>

<template>
  <cds-copy v-bind="$attrs"><slot /></cds-copy>
</template>
