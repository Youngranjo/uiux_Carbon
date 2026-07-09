<!--
  Vue wrapper for Carbon's official Web Component <cds-breadcrumb-overflow-menu>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      data-table (boolean) — `true` if this tooltip is in a data table row
      enable-v12-overflowmenu (boolean) — Enables the menu-composition OverflowMenu implementation leveraging `cds-menu`.
      flipped (boolean) — `true` if this overflow menu body should be flipped.
      index (number) — Index (starting at 1) of overflow menu item to focus on open.
      label (string) — A label describing the menu options. Used for the trigger tooltip and the menu's accessible label.
      menu-alignment (string) — Specify how the menu should align with the trigger button.
      toolbar-action (boolean) — `true` if this menu is a toolbar action
      breadcrumb (boolean) — `true` if this overflow menu use inside breadcrumb.

  Usage:
    <script setup> import BreadcrumbOverflowMenu from './components/BreadcrumbOverflowMenu.vue' </script>
    <BreadcrumbOverflowMenu>Example</BreadcrumbOverflowMenu>
-->
<script setup>
import '@carbon/web-components/es/components/breadcrumb/index.js';
</script>

<template>
  <cds-breadcrumb-overflow-menu v-bind="$attrs"><slot /></cds-breadcrumb-overflow-menu>
</template>
