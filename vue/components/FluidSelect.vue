<!--
  Vue wrapper for Carbon's official Web Component <cds-fluid-select>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      isFluid (boolean) — Specify whether the textarea is fluid or not
      autofocus (boolean) — Sets the select to be focussed automatically on page load. Defaults to false
      disabled (boolean) — Controls the disabled state of the select
      helper-text (string) — The helper text.
      hide-label (boolean) — Specify whether the label should be hidden, or not
      id (string) — ID to link the `label` and `select`
      invalid (boolean) — Specify if the currently value is invalid.
      invalid-text (string) — Message which is displayed if the value is invalid.

  Usage:
    <script setup> import FluidSelect from './components/FluidSelect.vue' </script>
    <FluidSelect>Example</FluidSelect>
-->
<script setup>
import '@carbon/web-components/es/components/fluid-select/index.js';
</script>

<template>
  <cds-fluid-select v-bind="$attrs"><slot /></cds-fluid-select>
</template>
