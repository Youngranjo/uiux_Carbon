<!--
  Vue wrapper for Carbon's official Web Component <cds-icon-button>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      align (string) — Checks if a badge indicator is being used with incorrect properties
      autoalign (boolean) — Specify whether a auto align functionality should be applied
      close-on-activation (boolean) — Determines whether the tooltip should close when inner content is activated (click, Enter or Space)
      defaultOpen (boolean) — Specify whether the tooltip should be open when it first renders
      enter-delay-ms (number) — Specify the duration in milliseconds to delay before displaying the tooltip
      leave-delay-ms (number) — Specify the duration in milliseconds to delay before hiding the tooltip
      autofocus (boolean) — `true` if the button should have input focus when the page loads.
      batch-action (boolean) — `true` if the button is being used within a data table batch action toolbar

  Usage:
    <script setup> import IconButton from './components/IconButton.vue' </script>
    <IconButton>Example</IconButton>
-->
<script setup>
import '@carbon/web-components/es/components/icon-button/index.js';
</script>

<template>
  <cds-icon-button v-bind="$attrs"><slot /></cds-icon-button>
</template>
