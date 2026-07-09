<!--
  Vue wrapper for Carbon's official Web Component <cds-ai-skeleton-text>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      heading (boolean) — Generates skeleton text at a larger size.
      width (string) — width (in px or %) of single line of text or max-width of paragraph lines
      paragraph (boolean) — will generate multiple lines of text
      lineCount (number) — the number of lines in a paragraph

  Usage:
    <script setup> import AiSkeletonText from './components/AiSkeletonText.vue' </script>
    <AiSkeletonText>Example</AiSkeletonText>
-->
<script setup>
import '@carbon/web-components/es/components/ai-skeleton/index.js';
</script>

<template>
  <cds-ai-skeleton-text v-bind="$attrs"><slot /></cds-ai-skeleton-text>
</template>
