<!--
  Vue wrapper for Carbon's official Web Component <cds-slug>.
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
      kind (SLUG_KIND) — Specify the type of Slug, from the following list of types: (default, inline)
      revert-active (boolean) — Specify whether the revert button should be visible
      revert-label (string) — Specify whether the revert button should be visible
      size (SLUG_SIZE) — Slug size should be mini, 2xs, xs, sm, md, lg, xl.
      slug-label (string) — Specify the text that will be provided to the aria-label of the `Slug` button

  Usage:
    <script setup> import Slug from './components/Slug.vue' </script>
    <Slug>Example</Slug>
-->
<script setup>
import '@carbon/web-components/es/components/slug/index.js';
</script>

<template>
  <cds-slug v-bind="$attrs"><slot /></cds-slug>
</template>
