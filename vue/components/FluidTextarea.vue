<!--
  Vue wrapper for Carbon's official Web Component <cds-fluid-textarea>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      cols (string) — The number of columns for the textarea to show by default
      counter-mode ("character" | "word") — Specify the method used for calculating the counter number
      id (string) — ID to link the `label` and `textarea`
      rows (number) — The number of rows for the textarea to show by default
      autocomplete (string) — May be any of the standard HTML autocomplete options
      autofocus (boolean) — Sets the input to be focussed automatically on page load. Defaults to false
      disabled (boolean) — Controls the disabled state of the input
      enable-counter (boolean) — Specify whether to display the character counter

  Usage:
    <script setup> import FluidTextarea from './components/FluidTextarea.vue' </script>
    <FluidTextarea>Example</FluidTextarea>
-->
<script setup>
import '@carbon/web-components/es/components/fluid-textarea/index.js';
</script>

<template>
  <cds-fluid-textarea v-bind="$attrs"><slot /></cds-fluid-textarea>
</template>
