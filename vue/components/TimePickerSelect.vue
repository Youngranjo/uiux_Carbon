<!--
  Vue wrapper for Carbon's official Web Component <cds-time-picker-select>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      aria-label (string) — The ARIA label for the UI control.
      default-value (string) — Optionally provide the default value of the select
      readOnly (boolean) — Controls the readOnly state of the select
      disabled (boolean) — Specify whether the control is disabled
      id (string) — Specify a custom id for the select box
      name (string) — Name for the select in the `FormData`
      value (string) — The value of the select.
      size (TIME_PICKER_SIZE) — Size of the time picker select

  Usage:
    <script setup> import TimePickerSelect from './components/TimePickerSelect.vue' </script>
    <TimePickerSelect>Example</TimePickerSelect>
-->
<script setup>
import '@carbon/web-components/es/components/time-picker/index.js';
</script>

<template>
  <cds-time-picker-select v-bind="$attrs"><slot /></cds-time-picker-select>
</template>
