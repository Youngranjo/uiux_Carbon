<!--
  Vue wrapper for Carbon's official Web Component <cds-checkbox-group>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      aria-labelledby (string) — fieldset `aria-labelledby`
      disabled (string) — Specify whether the form group is currently disabled
      helper-text (string) — Provide text for the form group for additional help
      invalid (string) — Specify whether the form group is currently invalid
      invalid-text (string) — Provide the text that is displayed when the form group is in an invalid state
      legend-id (string) — Provide id for the fieldset <legend> which corresponds to the fieldset
      legend-text (string) — Provide the text to be rendered inside of the fieldset <legend>
      orientation (CHECKBOX_ORIENTATION) — Provide the orientation for how the checkbox should be displayed

  Usage:
    <script setup> import CheckboxGroup from './components/CheckboxGroup.vue' </script>
    <CheckboxGroup>Example</CheckboxGroup>
-->
<script setup>
import '@carbon/web-components/es/components/checkbox/index.js';
</script>

<template>
  <cds-checkbox-group v-bind="$attrs"><slot /></cds-checkbox-group>
</template>
