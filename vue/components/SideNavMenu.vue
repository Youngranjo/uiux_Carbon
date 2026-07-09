<!--
  Vue wrapper for Carbon's official Web Component <cds-side-nav-menu>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      active (boolean) — `true` if the menu has active menu item.
      expanded (boolean) — `true` if the menu should be open.
      large (boolean) — Specify if this is a large variation of the side nav menu
      force-collapsed (boolean) — `true` if the menu should be forced collapsed upon side nav's expanded state.
      title (string) — The title text.

  Usage:
    <script setup> import SideNavMenu from './components/SideNavMenu.vue' </script>
    <SideNavMenu>Example</SideNavMenu>
-->
<script setup>
import '@carbon/web-components/es/components/ui-shell/index.js';
</script>

<template>
  <cds-side-nav-menu v-bind="$attrs"><slot /></cds-side-nav-menu>
</template>
