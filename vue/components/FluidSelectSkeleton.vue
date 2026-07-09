<!--
  Vue wrapper for Carbon's official Web Component <cds-fluid-select-skeleton>.
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

  Usage:
    <script setup> import FluidSelectSkeleton from './components/FluidSelectSkeleton.vue' </script>
    <FluidSelectSkeleton>Example</FluidSelectSkeleton>
-->
<script setup>
import '@carbon/web-components/es/components/fluid-select/index.js';
</script>

<template>
  <cds-fluid-select-skeleton v-bind="$attrs"><slot /></cds-fluid-select-skeleton>
</template>
