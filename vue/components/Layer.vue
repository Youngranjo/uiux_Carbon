<!--
  Vue wrapper for Carbon's official Web Component <cds-layer>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      level (number) — Specify the layer level and override any existing levels based on hierarchy
      layers (string)
      with-background (string)

  Usage:
    <script setup> import Layer from './components/Layer.vue' </script>
    <Layer>Example</Layer>
-->
<script setup>
import '@carbon/web-components/es/components/layer/index.js';
</script>

<template>
  <cds-layer v-bind="$attrs"><slot /></cds-layer>
</template>
