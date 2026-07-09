<!--
  Vue wrapper for Carbon's official Web Component <cds-checkbox>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      checked (boolean) — Specify whether the underlying input should be checked
      data-table (boolean) — Specify if checkbox is being used in a data table
      disabled (boolean) — Specify whether the Checkbox should be disabled
      helper-text (string) — Provide text for the form group for additional help
      hide-checkbox (boolean) — Specify whether the checkbox should be present in the DOM,
      hide-label (boolean) — Specify whether the label should be hidden, or not
      id (string) — Specify a custom id for the checkbox
      indeterminate (boolean) — Specify whether the Checkbox is in an indeterminate state

  Usage:
    <script setup> import Checkbox from './components/Checkbox.vue' </script>
    <Checkbox>Example</Checkbox>
-->
<script setup>
import '@carbon/web-components/es/components/checkbox/index.js';
</script>

<template>
  <cds-checkbox v-bind="$attrs"><slot /></cds-checkbox>
</template>
