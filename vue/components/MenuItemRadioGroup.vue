<!--
  Vue wrapper for Carbon's official Web Component <cds-menu-item-radio-group>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      label (string) — Label for the menu item radio group.
      items (never[]) — List of items in the radio group.
      selectedItem (string) — Selected item in the radio group.
      itemToString (((item: (string | number)[]) => string) | undefined) — List of items in the radio group.

  Usage:
    <script setup> import MenuItemRadioGroup from './components/MenuItemRadioGroup.vue' </script>
    <MenuItemRadioGroup>Example</MenuItemRadioGroup>
-->
<script setup>
import '@carbon/web-components/es/components/menu/index.js';
</script>

<template>
  <cds-menu-item-radio-group v-bind="$attrs"><slot /></cds-menu-item-radio-group>
</template>
