<!--
  Vue wrapper for Carbon's official Web Component <cds-page-header-hero-image>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      (none documented)

  Usage:
    <script setup> import PageHeaderHeroImage from './components/PageHeaderHeroImage.vue' </script>
    <PageHeaderHeroImage>Example</PageHeaderHeroImage>
-->
<script setup>
import '@carbon/web-components/es/components/page-header/index.js';
</script>

<template>
  <cds-page-header-hero-image v-bind="$attrs"><slot /></cds-page-header-hero-image>
</template>
