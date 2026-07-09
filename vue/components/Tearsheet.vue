<!--
  Vue wrapper for Carbon's official Web Component <cds-tearsheet>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      aria-label (string) — Optional aria label for the tearsheet
      close-icon-description (string) — Sets the close button icon description
      has-close-icon (boolean) — Enable a close icon ('x') in the header area of the tearsheet. By default,
      influencer-placement (TEARSHEET_INFLUENCER_PLACEMENT) — The placement of the influencer section, 'left' or 'right'.
      influencer-width (TEARSHEET_INFLUENCER_WIDTH) — The width of the influencer section, 'narrow' or 'wide'.
      open (boolean) — `true` if the tearsheet should be open.
      prevent-close-on-click-outside (boolean) — Prevent closing on click outside of tearsheet
      selector-initial-focus (string) — The initial location of focus in the side panel

  Usage:
    <script setup> import Tearsheet from './components/Tearsheet.vue' </script>
    <Tearsheet>Example</Tearsheet>
-->
<script setup>
import '@carbon/web-components/es/components/tearsheet/index.js';
</script>

<template>
  <cds-tearsheet v-bind="$attrs"><slot /></cds-tearsheet>
</template>
