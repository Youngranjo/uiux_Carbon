<!--
  Vue wrapper for Carbon's official Web Component <cds-date-picker>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      allow-input (boolean) — flatpickr prop passthrough. Allows the user to enter a date directly into the input field
      close-on-select (boolean) — flatpickr prop passthrough. Controls whether the calendar dropdown closes upon selection.
      date-format (string) — The date format to let Flatpickr use.
      disabled (boolean) — Controls the disabled state of the input
      enabled-range (string) — The date range that a user can pick in calendar dropdown.
      max-date (string) — The maximum date that a user can start picking from.
      min-date (string) — The minimum date that a user can start picking from.
      name (string) — Name for the input in the `FormData`

  Usage:
    <script setup> import DatePicker from './components/DatePicker.vue' </script>
    <DatePicker>Example</DatePicker>
-->
<script setup>
import '@carbon/web-components/es/components/date-picker/index.js';
</script>

<template>
  <cds-date-picker v-bind="$attrs"><slot /></cds-date-picker>
</template>
