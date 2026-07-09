<!--
  Vue wrapper for Carbon's official Web Component <cds-radio-button-group>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      defaultSelected (string) — The `value` attribute for the `<input>` for selection.
      disabled (boolean) — `true` if the radio button group should be disabled.
      label-position (RADIO_BUTTON_LABEL_POSITION) — The label position.
      legend-text (string) — The label position.
      helper-text (string) — The helper text.
      warn (boolean) — Specify whether the control is currently in warning state
      warn-text (string) — Provide the text that is displayed when the control is in warning state
      invalid (boolean) — Specify if the currently value is invalid.

  Usage:
    <script setup> import RadioButtonGroup from './components/RadioButtonGroup.vue' </script>
    <RadioButtonGroup>Example</RadioButtonGroup>
-->
<script setup>
import '@carbon/web-components/es/components/radio-button/index.js';
</script>

<template>
  <cds-radio-button-group v-bind="$attrs"><slot /></cds-radio-button-group>
</template>
