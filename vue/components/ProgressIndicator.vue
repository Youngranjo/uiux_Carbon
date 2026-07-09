<!--
  Vue wrapper for Carbon's official Web Component <cds-progress-indicator>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      vertical (boolean) — Determines whether or not the progress indicator should be rendered
      space-equally (boolean) — Specify whether the progress steps should be split equally in size in the
      current-index (number) — Optionally specify the current step array index.

  Usage:
    <script setup> import ProgressIndicator from './components/ProgressIndicator.vue' </script>
    <ProgressIndicator>Example</ProgressIndicator>
-->
<script setup>
import '@carbon/web-components/es/components/progress-indicator/index.js';
</script>

<template>
  <cds-progress-indicator v-bind="$attrs"><slot /></cds-progress-indicator>
</template>
