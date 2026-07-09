<!--
  Vue wrapper for Carbon's official Web Component <cds-menu-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      label (string) — Label for the menu item.
      shortcut (string) — Shortcut for the menu item.
      disabled (string) — Disabled property for the menu item.
      danger-description (string) — Specify the message read by screen readers for the danger menu item variant
      submenuOpen (boolean) — Whether the menu submen for an item is open or not.
      kind (MENU_ITEM_KIND)
      boundaries ({ x: number | [number, number]; y: number | [number, number]; }) — Menu boundaries.
      aria-checked (string | null)

  Usage:
    <script setup> import MenuItem from './components/MenuItem.vue' </script>
    <MenuItem>Example</MenuItem>
-->
<script setup>
import '@carbon/web-components/es/components/menu/index.js';
</script>

<template>
  <cds-menu-item v-bind="$attrs"><slot /></cds-menu-item>
</template>
