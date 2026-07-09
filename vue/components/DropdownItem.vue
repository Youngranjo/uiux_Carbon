<!--
  Vue wrapper for Carbon's official Web Component <cds-dropdown-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (boolean) — `true` if this dropdown item should be disabled.
      size (DROPDOWN_SIZE) — Dropdown size.
      value (string) — The `value` attribute that is set to the parent `<cds-dropdown>` when this dropdown item is selected.

  Usage:
    <script setup> import DropdownItem from './components/DropdownItem.vue' </script>
    <DropdownItem>Example</DropdownItem>
-->
<script setup>
import '@carbon/web-components/es/components/dropdown/index.js';
</script>

<template>
  <cds-dropdown-item v-bind="$attrs"><slot /></cds-dropdown-item>
</template>
