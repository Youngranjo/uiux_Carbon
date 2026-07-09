<!--
  Vue wrapper for Carbon's official Web Component <cds-select-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (boolean) — `true` to disable this option.
      label (string) — The label. If this is not specified, the child text content is used.
      selected (boolean) — `true` to select this option.
      value (string) — The value.

  Usage:
    <script setup> import SelectItem from './components/SelectItem.vue' </script>
    <SelectItem>Example</SelectItem>
-->
<script setup>
import '@carbon/web-components/es/components/select/index.js';
</script>

<template>
  <cds-select-item v-bind="$attrs"><slot /></cds-select-item>
</template>
