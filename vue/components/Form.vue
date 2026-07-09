<!--
  Vue wrapper for Carbon's official Web Component <cds-form>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      (none documented)

  Usage:
    <script setup> import Form from './components/Form.vue' </script>
    <Form>Example</Form>
-->
<script setup>
import '@carbon/web-components/es/components/form/index.js';
</script>

<template>
  <cds-form v-bind="$attrs"><slot /></cds-form>
</template>
