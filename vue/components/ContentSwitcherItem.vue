<!--
  Vue wrapper for Carbon's official Web Component <cds-content-switcher-item>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (boolean) — `true` if this content switcher item should be disabled.
      target (string) — The element ID of target panel.
      value (string) — The `value` attribute that is set to the parent `<cds-content-switcher>`
      icon (boolean) — `true` if the content switcher button should be icon-only.
      align (string) — Specify how the trigger should align with the tooltip for icon-only
      close-on-activation (boolean) — Determines whether the tooltip should close when inner content is

  Usage:
    <script setup> import ContentSwitcherItem from './components/ContentSwitcherItem.vue' </script>
    <ContentSwitcherItem>Example</ContentSwitcherItem>
-->
<script setup>
import '@carbon/web-components/es/components/content-switcher/index.js';
</script>

<template>
  <cds-content-switcher-item v-bind="$attrs"><slot /></cds-content-switcher-item>
</template>
