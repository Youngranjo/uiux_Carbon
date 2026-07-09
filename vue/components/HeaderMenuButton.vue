<!--
  Vue wrapper for Carbon's official Web Component <cds-header-menu-button>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      active (boolean) — `true` if the button should represent its active state.
      button-label-active (string) — The `aria-label` attribute for the button in its active state.
      button-label-inactive (string) — The `aria-label` attribute for the button in its inactive state.
      collapse-mode (SIDE_NAV_COLLAPSE_MODE) — Collapse mode of the side nav.
      disabled (boolean) — `true` if the button should be disabled.
      is-not-child-of-header (boolean) — If `true` will style the side nav to sit below the header

  Usage:
    <script setup> import HeaderMenuButton from './components/HeaderMenuButton.vue' </script>
    <HeaderMenuButton>Example</HeaderMenuButton>
-->
<script setup>
import '@carbon/web-components/es/components/ui-shell/index.js';
</script>

<template>
  <cds-header-menu-button v-bind="$attrs"><slot /></cds-header-menu-button>
</template>
