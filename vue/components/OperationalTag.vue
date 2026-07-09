<!--
  Vue wrapper for Carbon's official Web Component <cds-operational-tag>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (boolean) — `true` if the tag should be disabled
      selected (boolean) — Specify the state of the selectable tag.
      size (TAG_SIZE) — The size of the tag.
      text (string) — Provide text to be rendered inside of a the tag.
      type (TAG_TYPE) — The type of the tag.

  Usage:
    <script setup> import OperationalTag from './components/OperationalTag.vue' </script>
    <OperationalTag>Example</OperationalTag>
-->
<script setup>
import '@carbon/web-components/es/components/tag/index.js';
</script>

<template>
  <cds-operational-tag v-bind="$attrs"><slot /></cds-operational-tag>
</template>
