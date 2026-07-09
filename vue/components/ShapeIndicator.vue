<!--
  Vue wrapper for Carbon's official Web Component <cds-shape-indicator>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      text-size (number) — Shape indicator size (12 or 14)
      label (string) — Label next to the shape.
      kind (SHAPE_INDICATOR_KIND) — Shape Indicator kind

  Usage:
    <script setup> import ShapeIndicator from './components/ShapeIndicator.vue' </script>
    <ShapeIndicator>Example</ShapeIndicator>
-->
<script setup>
import '@carbon/web-components/es/components/shape-indicator/index.js';
</script>

<template>
  <cds-shape-indicator v-bind="$attrs"><slot /></cds-shape-indicator>
</template>
