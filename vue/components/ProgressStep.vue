<!--
  Vue wrapper for Carbon's official Web Component <cds-progress-step>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (boolean) — `true` if the progress step should be disabled.
      icon-label (string) — The a11y text for the icon.
      description (string)
      label (string)
      secondary-label-text (string) — The secondary progress label.
      secondary-label (string)
      state (PROGRESS_STEP_STAT) — The progress state.
      clickable (boolean) — Set by the parent indicator. If true, the step is interactive unless it is

  Usage:
    <script setup> import ProgressStep from './components/ProgressStep.vue' </script>
    <ProgressStep>Example</ProgressStep>
-->
<script setup>
import '@carbon/web-components/es/components/progress-indicator/index.js';
</script>

<template>
  <cds-progress-step v-bind="$attrs"><slot /></cds-progress-step>
</template>
