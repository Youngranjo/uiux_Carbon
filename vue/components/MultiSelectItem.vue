<!--
  Vue wrapper for Carbon's official Web Component <cds-multi-select-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      filtered (string) — The property to hide when item is filtered from input
      is-select-all (boolean) — Marks this item as the “select all” item.
      indeterminate (boolean) — When `true`, renders the checkbox in its indeterminate state.
      selection-name (string) — The `name` attribute for the `<input>` for selection.
      disabled (boolean) — `true` if this dropdown item should be disabled.
      size (DROPDOWN_SIZE) — Dropdown size.
      value (string) — The `value` attribute that is set to the parent `<cds-dropdown>` when this dropdown item is selected.

  Usage:
    <script setup> import MultiSelectItem from './components/MultiSelectItem.vue' </script>
    <MultiSelectItem>Example</MultiSelectItem>
-->
<script setup>
import '@carbon/web-components/es/components/multi-select/index.js';
</script>

<template>
  <cds-multi-select-item v-bind="$attrs"><slot /></cds-multi-select-item>
</template>
