<!--
  Vue wrapper for Carbon's official Web Component <cds-skip-to-content>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      link-assistive-text (string) — The assistive text for the link,
      href (string | undefined) — The skip link href.

  Usage:
    <script setup> import SkipToContent from './components/SkipToContent.vue' </script>
    <SkipToContent>Example</SkipToContent>
-->
<script setup>
import '@carbon/web-components/es/components/skip-to-content/index.js';
</script>

<template>
  <cds-skip-to-content v-bind="$attrs"><slot /></cds-skip-to-content>
</template>
