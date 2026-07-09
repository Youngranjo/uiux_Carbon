<!--
  Vue wrapper for Carbon's official Web Component <cds-date-picker-input>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      color-scheme (FORM_ELEMENT_COLOR_SCHEME) — The color scheme.
      disabled (boolean) — `true` if the check box should be disabled.
      hide-label (boolean) — `true` if the label should be hidden.
      invalid (boolean) — Controls the invalid state and visibility of the `validityMessage`.
      invalid-text (string) — Message which is displayed if the value is invalid.
      kind (DATE_PICKER_INPUT_KIND) — Date picker input kind.
      label-text (string) — The label text.
      pattern (string) — The `pattern` attribute for the `<input>` in the shadow DOM.

  Usage:
    <script setup> import DatePickerInput from './components/DatePickerInput.vue' </script>
    <DatePickerInput>Example</DatePickerInput>
-->
<script setup>
import '@carbon/web-components/es/components/date-picker/index.js';
</script>

<template>
  <cds-date-picker-input v-bind="$attrs"><slot /></cds-date-picker-input>
</template>
