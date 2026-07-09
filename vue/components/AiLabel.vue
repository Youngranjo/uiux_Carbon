<!--
  Vue wrapper for Carbon's official Web Component <cds-ai-label>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      slot (string)
      ai-text (string) — Specify the correct translation of the AI text
      ai-text-label (string) — Specify additional text to be rendered next to the AI label in the inline variant
      kind (AI_LABEL_KIND) — Specify the type of AI Label, from the following list of types: (default, inline)
      revert-active (boolean) — Specify whether the revert button should be visible
      revert-label (string) — Specify whether the revert button should be visible
      size (AI_LABEL_SIZE) — AI Label size should be mini, 2xs, xs, sm, md, lg, xl.
      previousValue (string)

  Usage:
    <script setup> import AiLabel from './components/AiLabel.vue' </script>
    <AiLabel>Example</AiLabel>
-->
<script setup>
import '@carbon/web-components/es/components/ai-label/index.js';
</script>

<template>
  <cds-ai-label v-bind="$attrs"><slot /></cds-ai-label>
</template>
