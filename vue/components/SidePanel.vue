<!--
  Vue wrapper for Carbon's official Web Component <cds-side-panel>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      animate-title (boolean) — Determines if the title will animate on scroll
      close-icon-description (string) — Sets the close button icon description
      condensed-actions (boolean) — Determines whether the side panel should render the condensed version (affects action buttons primarily)
      current-step (string) — Sets the current step of the side panel
      include-overlay (boolean) — Determines whether the side panel should render with an overlay
      label-text (string) — Sets the label text which will display above the title text
      navigation-back-icon-description (string) — Sets the icon description for the navigation back icon button
      open (boolean) — `true` if the side-panel should be open.

  Usage:
    <script setup> import SidePanel from './components/SidePanel.vue' </script>
    <SidePanel>Example</SidePanel>
-->
<script setup>
import '@carbon/web-components/es/components/side-panel/index.js';
</script>

<template>
  <cds-side-panel v-bind="$attrs"><slot /></cds-side-panel>
</template>
