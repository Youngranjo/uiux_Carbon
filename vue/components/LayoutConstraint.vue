<!--
  Vue wrapper for Carbon's official Web Component <cds-layout-constraint>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      size-default ("lg" | "md" | "sm" | "xl" | "xs" | "2xl" | undefined)
      size-min ("lg" | "md" | "sm" | "xl" | "xs" | "2xl" | undefined)
      size-max ("lg" | "md" | "sm" | "xl" | "xs" | "2xl" | undefined)

  Usage:
    <script setup> import LayoutConstraint from './components/LayoutConstraint.vue' </script>
    <LayoutConstraint>Example</LayoutConstraint>
-->
<script setup>
import '@carbon/web-components/es/components/layout/index.js';
</script>

<template>
  <cds-layout-constraint v-bind="$attrs"><slot /></cds-layout-constraint>
</template>
