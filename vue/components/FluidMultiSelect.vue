<!--
  Vue wrapper for Carbon's official Web Component <cds-fluid-multi-select>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      is-condensed (boolean) — Specify if the `FluidMultiSelect` should render its menu items in condensed mode
      filterable (string)
      autocomplete (string) — The native `autocomplete` attribute for the filterable input.
      clear-selection-label (string) — The `aria-label` attribute for the icon to clear selection.
      clear-selection-description (string) — Specify the text that should be read for screen readers that describes total items selected
      clear-selection-text (string) — Specify the text that should be read for screen readers to clear selection.
      locale (string) — Specify the locale of the control. Used for the default compareItems used for sorting the list of items in the control.
      select-all (boolean) — Enables rendering of a “Select all” multi-select-item

  Usage:
    <script setup> import FluidMultiSelect from './components/FluidMultiSelect.vue' </script>
    <FluidMultiSelect>Example</FluidMultiSelect>
-->
<script setup>
import '@carbon/web-components/es/components/fluid-multi-select/index.js';
</script>

<template>
  <cds-fluid-multi-select v-bind="$attrs"><slot /></cds-fluid-multi-select>
</template>
