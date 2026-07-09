<!--
  Vue wrapper for Carbon's official Web Component <cds-header-menu-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      href (string) — Link `href`.
      rel (string) — The link type.
      target (string) — The link target.
      title (string) — The title.
      is-active (boolean) — Applies selected styles to the item if a user sets this to true and `aria-current !== 'page'`.
      aria-current (string) — indicates that this element represents the current item
      role (string) — As child of <ul>, this element must have role of listitem

  Usage:
    <script setup> import HeaderMenuItem from './components/HeaderMenuItem.vue' </script>
    <HeaderMenuItem>Example</HeaderMenuItem>
-->
<script setup>
import '@carbon/web-components/es/components/ui-shell/index.js';
</script>

<template>
  <cds-header-menu-item v-bind="$attrs"><slot /></cds-header-menu-item>
</template>
