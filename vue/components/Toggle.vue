<!--
  Vue wrapper for Carbon's official Web Component <cds-toggle>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      toggled (boolean) — Specify whether the control is toggled
      aria-labelledby (string | undefined) — Specify another element's id to be used as the label for this toggle
      label-a (string) — Specify the label for the "on" position
      read-only (boolean) — Read only boolean.
      size (TOGGLE_SIZE) — Toggle size.
      label-b (string) — Specify the label for the "off" position
      checked (boolean) — 
      data-table (boolean) — Specify if checkbox is being used in a data table

  Usage:
    <script setup> import Toggle from './components/Toggle.vue' </script>
    <Toggle>Example</Toggle>
-->
<script setup>
import '@carbon/web-components/es/components/toggle/index.js';
</script>

<template>
  <cds-toggle v-bind="$attrs"><slot /></cds-toggle>
</template>
