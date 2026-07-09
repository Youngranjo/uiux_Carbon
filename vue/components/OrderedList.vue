<!--
  Vue wrapper for Carbon's official Web Component <cds-ordered-list>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      native (boolean) — Specify whether the ordered list should use native list styles instead of
      is-expressive (boolean) — `true` if expressive theme enabled.
      nested (boolean) — Specify whether the list is nested, or not

  Usage:
    <script setup> import OrderedList from './components/OrderedList.vue' </script>
    <OrderedList>Example</OrderedList>
-->
<script setup>
import '@carbon/web-components/es/components/list/index.js';
</script>

<template>
  <cds-ordered-list v-bind="$attrs"><slot /></cds-ordered-list>
</template>
