<!--
  Vue wrapper for Carbon's official Web Component <cds-dismissible-tag>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      dismiss-tooltip-alignment (string) — Specify the tooltip alignment for the dismiss button
      dismiss-tooltip-label (string | undefined) — Provide a custom tooltip label for the dismiss button
      tag-title (string) — Provide a custom `title` to be inserted in the tag.
      text (string) — Provide text to be rendered inside of a the tag.
      title (string) — Text to show on filter tag "clear" buttons. Corresponds to the attribute with the same name
      disabled (boolean) — `true` if the tag should be disabled
      filter (boolean) — Determine if is a filter/chip
      has-custom-icon (boolean) — `true` if there is a custom icon.

  Usage:
    <script setup> import DismissibleTag from './components/DismissibleTag.vue' </script>
    <DismissibleTag>Example</DismissibleTag>
-->
<script setup>
import '@carbon/web-components/es/components/tag/index.js';
</script>

<template>
  <cds-dismissible-tag v-bind="$attrs"><slot /></cds-dismissible-tag>
</template>
