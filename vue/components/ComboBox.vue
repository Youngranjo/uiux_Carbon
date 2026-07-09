<!--
  Vue wrapper for Carbon's official Web Component <cds-combo-box>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      clear-selection-label (string) — The `aria-label` attribute for the icon to clear selection.
      input-label (string) — The `aria-label` attribute for the `<input>` for filtering.
      should-filter-item (boolean | ShouldFilterItem) — Provide custom filtering behavior. This attribute will be ignored if
      typeahead (boolean) — **Experimental**: will enable autocomplete and typeahead for the input field.
      allow-custom-value (boolean) — `true` to allow custom values that do not match any item in the list.
      aria-label (string) — 'aria-label' of the ListBox component.
      direction (DROPDOWN_DIRECTION) — Specify the direction of the dropdown. Can be either top or bottom.
      autoalign (boolean) — Specify whether auto align functionality should be applied

  Usage:
    <script setup> import ComboBox from './components/ComboBox.vue' </script>
    <ComboBox>Example</ComboBox>
-->
<script setup>
import '@carbon/web-components/es/components/combo-box/index.js';
</script>

<template>
  <cds-combo-box v-bind="$attrs"><slot /></cds-combo-box>
</template>
