<!--
  Vue wrapper for Carbon's official Web Component <cds-inline-loading>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      assistive-text (string)
      icon-description (string) — The assistive text for the spinner icon.
      success-delay (number) — Provide a delay for the setTimeout for success
      status (INLINE_LOADING_STATE) — The loading status.

  Usage:
    <script setup> import InlineLoading from './components/InlineLoading.vue' </script>
    <InlineLoading>Example</InlineLoading>
-->
<script setup>
import '@carbon/web-components/es/components/inline-loading/index.js';
</script>

<template>
  <cds-inline-loading v-bind="$attrs"><slot /></cds-inline-loading>
</template>
