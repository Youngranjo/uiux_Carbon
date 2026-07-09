<!--
  Vue wrapper for Carbon's official Web Component <cds-side-nav>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      collapse-mode (SIDE_NAV_COLLAPSE_MODE) — Collapse mode of the side nav.
      expanded (boolean) — `true` to expand the side nav.
      is-not-child-of-header (boolean) — If `true` will style the side nav to sit below the header
      is-not-persistent (boolean) — Specify if the side-nav will be persistent above the lg breakpoint

  Usage:
    <script setup> import SideNav from './components/SideNav.vue' </script>
    <SideNav>Example</SideNav>
-->
<script setup>
import '@carbon/web-components/es/components/ui-shell/index.js';
</script>

<template>
  <cds-side-nav v-bind="$attrs"><slot /></cds-side-nav>
</template>
