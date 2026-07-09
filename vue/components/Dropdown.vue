<!--
  Vue wrapper for Carbon's official Web Component <cds-dropdown>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      aria-label (string) — 'aria-label' of the ListBox component.
      direction (DROPDOWN_DIRECTION) — Specify the direction of the dropdown. Can be either top or bottom.
      autoalign (boolean) — Specify whether auto align functionality should be applied
      disabled (boolean) — `true` if this dropdown should be disabled.
      helper-text (string) — The helper text.
      hide-label (boolean) — Specify whether the title text should be hidden or not
      invalid-text (string) — Message which is displayed if the value is invalid.
      title-text (string) — Provide the title text that will be read by a screen reader when visiting this control

  Usage:
    <script setup> import Dropdown from './components/Dropdown.vue' </script>
    <Dropdown>Example</Dropdown>
-->
<script setup>
import '@carbon/web-components/es/components/dropdown/index.js';
</script>

<template>
  <cds-dropdown v-bind="$attrs"><slot /></cds-dropdown>
</template>
