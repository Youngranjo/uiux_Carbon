<!--
  Vue wrapper for Carbon's official Web Component <cds-overflow-menu-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      danger (boolean) — `true` if the action is danger.
      danger-description (string) — Specify the message read by screen readers for the danger over flow menu item variant
      disabled (boolean) — `true` if the overflow menu item should be disabled.
      divider (boolean) — `true` if the item has a divider
      href (string) — The link href of the overflow menu item.
      size (OVERFLOW_MENU_SIZE) — The size of the overflow menu item.

  Usage:
    <script setup> import OverflowMenuItem from './components/OverflowMenuItem.vue' </script>
    <OverflowMenuItem>Example</OverflowMenuItem>
-->
<script setup>
import '@carbon/web-components/es/components/overflow-menu/index.js';
</script>

<template>
  <cds-overflow-menu-item v-bind="$attrs"><slot /></cds-overflow-menu-item>
</template>
