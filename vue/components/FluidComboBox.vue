<!--
  Vue wrapper for Carbon's official Web Component <cds-fluid-combo-box>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      is-condensed (boolean) — Specify if the combo box should render its menu items in condensed mode.
      clear-selection-label (string) — The `aria-label` attribute for the icon to clear selection.
      input-label (string) — The `aria-label` attribute for the `<input>` for filtering.
      should-filter-item (boolean | ShouldFilterItem) — Provide custom filtering behavior. This attribute will be ignored if
      typeahead (boolean) — **Experimental**: will enable autocomplete and typeahead for the input field.
      allow-custom-value (boolean) — `true` to allow custom values that do not match any item in the list.
      aria-label (string) — 'aria-label' of the ListBox component.
      direction (DROPDOWN_DIRECTION) — Specify the direction of the dropdown. Can be either top or bottom.

  Usage:
    <script setup> import FluidComboBox from './components/FluidComboBox.vue' </script>
    <FluidComboBox>Example</FluidComboBox>
-->
<script setup>
import '@carbon/web-components/es/components/fluid-combo-box/index.js';
</script>

<template>
  <cds-fluid-combo-box v-bind="$attrs"><slot /></cds-fluid-combo-box>
</template>
