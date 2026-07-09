<!--
  Vue wrapper for Carbon's official Web Component <cds-overflow-menu-body>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      size (OVERFLOW_MENU_SIZE) — The overflow menu size.
      direction (FLOATING_MENU_DIRECTION) — The menu direction.
      flipped (boolean) — How the menu is aligned to the trigger button.

  Usage:
    <script setup> import OverflowMenuBody from './components/OverflowMenuBody.vue' </script>
    <OverflowMenuBody>Example</OverflowMenuBody>
-->
<script setup>
import '@carbon/web-components/es/components/overflow-menu/index.js';
</script>

<template>
  <cds-overflow-menu-body v-bind="$attrs"><slot /></cds-overflow-menu-body>
</template>
