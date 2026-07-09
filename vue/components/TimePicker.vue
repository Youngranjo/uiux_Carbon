<!--
  Vue wrapper for Carbon's official Web Component <cds-time-picker>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (boolean) — Specify whether the control is disabled
      invalid-text (string) — Provide the text that is displayed when the control is in an invalid state
      warning (boolean) — Specify whether the control is in warning state
      warning-text (string) — Provide the text that is displayed when the control is in a warning state
      hide-label (boolean) — Specify whether the label should be hidden
      name (string) — Name for the input in FormData
      label-text (string) — Provide label text to be read by screen readers
      placeholder (string) — Placeholder text for the input

  Usage:
    <script setup> import TimePicker from './components/TimePicker.vue' </script>
    <TimePicker>Example</TimePicker>
-->
<script setup>
import '@carbon/web-components/es/components/time-picker/index.js';
</script>

<template>
  <cds-time-picker v-bind="$attrs"><slot /></cds-time-picker>
</template>
