<!--
  Vue wrapper for Carbon's official Web Component <cds-badge-indicator>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      count (string) — Count of badge indicator
      slot (string) — The shadow slot the badge-indicator should be in.

  Usage:
    <script setup> import BadgeIndicator from './components/BadgeIndicator.vue' </script>
    <BadgeIndicator>Example</BadgeIndicator>
-->
<script setup>
import '@carbon/web-components/es/components/badge-indicator/index.js';
</script>

<template>
  <cds-badge-indicator v-bind="$attrs"><slot /></cds-badge-indicator>
</template>
