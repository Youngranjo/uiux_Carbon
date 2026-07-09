<!--
  Vue wrapper for Carbon's official Web Component <cds-fluid-textarea-skeleton>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      hide-label (boolean) — Specify whether the label should be hidden, or not

  Usage:
    <script setup> import FluidTextareaSkeleton from './components/FluidTextareaSkeleton.vue' </script>
    <FluidTextareaSkeleton>Example</FluidTextareaSkeleton>
-->
<script setup>
import '@carbon/web-components/es/components/fluid-textarea/index.js';
</script>

<template>
  <cds-fluid-textarea-skeleton v-bind="$attrs"><slot /></cds-fluid-textarea-skeleton>
</template>
