<!--
  Vue wrapper for Carbon's official Web Component <cds-tag>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      title (string) — Text to show on filter tag "clear" buttons. Corresponds to the attribute with the same name
      disabled (boolean) — `true` if the tag should be disabled
      filter (boolean) — Determine if is a filter/chip
      has-custom-icon (boolean) — `true` if there is a custom icon.
      open (boolean) — `true` if the tag should be open.
      size (TAG_SIZE) — The size of the tag.
      type (TAG_TYPE) — The type of the tag.

  Usage:
    <script setup> import Tag from './components/Tag.vue' </script>
    <Tag>Example</Tag>
-->
<script setup>
import '@carbon/web-components/es/components/tag/index.js';
</script>

<template>
  <cds-tag v-bind="$attrs"><slot /></cds-tag>
</template>
