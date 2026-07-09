<!--
  Vue wrapper for Carbon's official Web Component <cds-accordion-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (boolean) — `true` if the accordion item should be disabled.
      open (boolean) — `true` if the accordion item should be open.
      title (string) — The title text.

  Usage:
    <script setup> import AccordionItem from './components/AccordionItem.vue' </script>
    <AccordionItem>Example</AccordionItem>
-->
<script setup>
import '@carbon/web-components/es/components/accordion/index.js';
</script>

<template>
  <cds-accordion-item v-bind="$attrs"><slot /></cds-accordion-item>
</template>
