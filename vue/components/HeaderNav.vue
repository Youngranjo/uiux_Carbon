<!--
  Vue wrapper for Carbon's official Web Component <cds-header-nav>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      menu-bar-label (string) — The `aria-label` attribute for the menu bar UI.

  Usage:
    <script setup> import HeaderNav from './components/HeaderNav.vue' </script>
    <HeaderNav>Example</HeaderNav>
-->
<script setup>
import '@carbon/web-components/es/components/ui-shell/index.js';
</script>

<template>
  <cds-header-nav v-bind="$attrs"><slot /></cds-header-nav>
</template>
