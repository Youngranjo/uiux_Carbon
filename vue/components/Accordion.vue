<!--
  Vue wrapper for Carbon's official Web Component <cds-accordion>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      size (ACCORDION_SIZE) — Accordion size should be sm, md, lg.
      alignment (ACCORDION_ALIGNMENT) — Specify the alignment of the accordion heading title and chevron
      isFlush (boolean) — Specify whether Accordion text should be flush, default is false, does not work with align="start"
      disabled (boolean) — Disable all accordion items inside this accordion.

  Usage:
    <script setup> import Accordion from './components/Accordion.vue' </script>
    <Accordion>Example</Accordion>
-->
<script setup>
import '@carbon/web-components/es/components/accordion/index.js';
</script>

<template>
  <cds-accordion v-bind="$attrs"><slot /></cds-accordion>
</template>
