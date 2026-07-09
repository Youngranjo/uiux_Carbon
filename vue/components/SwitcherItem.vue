<!--
  Vue wrapper for Carbon's official Web Component <cds-switcher-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      aria-label (string) — Required props for accessibility label
      aria-labelledby (string) — Props for accessibility labelled by
      href (string) — Link `href`.
      selected (boolean) — Specify if this is a large variation of the side nav link
      tab-index (number) — Specify if this is a large variation of the side nav link

  Usage:
    <script setup> import SwitcherItem from './components/SwitcherItem.vue' </script>
    <SwitcherItem>Example</SwitcherItem>
-->
<script setup>
import '@carbon/web-components/es/components/ui-shell/index.js';
</script>

<template>
  <cds-switcher-item v-bind="$attrs"><slot /></cds-switcher-item>
</template>
