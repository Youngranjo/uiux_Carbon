<!--
  Vue wrapper for Carbon's official Web Component <cds-progress-bar>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      helper-text (string) — The current progress as a textual representation.
      hide-label (string) — Whether the label should be visually hidden.
      label (string) — A label describing the progress bar.
      max (number) — The maximum value.
      size (PROGRESS_BAR_SIZE) — Specify the size of the ProgressBar.
      status (PROGRESS_BAR_STATUS) — Specify the status.
      type (PROGRESS_BAR_TYPE) — Defines the alignment variant of the progress bar.
      value (string) — The current value.

  Usage:
    <script setup> import ProgressBar from './components/ProgressBar.vue' </script>
    <ProgressBar>Example</ProgressBar>
-->
<script setup>
import '@carbon/web-components/es/components/progress-bar/index.js';
</script>

<template>
  <cds-progress-bar v-bind="$attrs"><slot /></cds-progress-bar>
</template>
