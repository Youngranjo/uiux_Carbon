<!--
  Vue wrapper for Carbon's official Web Component <cds-fluid-number-input-skeleton>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      hide-label (boolean) — `true` if the label should be hidden. Corresponds to the attribute with the same name.
      size (INPUT_SIZE) — Specify the size of the Number Input skeleton.

  Usage:
    <script setup> import FluidNumberInputSkeleton from './components/FluidNumberInputSkeleton.vue' </script>
    <FluidNumberInputSkeleton>Example</FluidNumberInputSkeleton>
-->
<script setup>
import '@carbon/web-components/es/components/fluid-number-input/index.js';
</script>

<template>
  <cds-fluid-number-input-skeleton v-bind="$attrs"><slot /></cds-fluid-number-input-skeleton>
</template>
