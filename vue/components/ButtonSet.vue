<!--
  Vue wrapper for Carbon's official Web Component <cds-button-set>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      stacked (boolean) — `true` if the buttons should be stacked. Only applies to the button-set variant.

  Usage:
    <script setup> import ButtonSet from './components/ButtonSet.vue' </script>
    <ButtonSet>Example</ButtonSet>
-->
<script setup>
import '@carbon/web-components/es/components/button/index.js';
</script>

<template>
  <cds-button-set v-bind="$attrs"><slot /></cds-button-set>
</template>
