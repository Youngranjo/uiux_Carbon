<!--
  Vue wrapper for Carbon's official Web Component <cds-slug-action-button>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      slot (string) — The shadow slot this slug-action should be in.
      autofocus (boolean) — `true` if the button should have input focus when the page loads.
      batch-action (boolean) — `true` if the button is being used within a data table batch action toolbar
      button-class-name (string) — Specify an optional className to be added to your Button
      danger-description (string) — Specify the message read by screen readers for the danger button variants
      disabled (boolean) — Specify whether the Button should be disabled, or not
      download (string) — The default file name, used if this button is rendered as `<a>`.
      has-main-content (boolean) — `true` if there is a non-icon content.

  Usage:
    <script setup> import SlugActionButton from './components/SlugActionButton.vue' </script>
    <SlugActionButton>Example</SlugActionButton>
-->
<script setup>
import '@carbon/web-components/es/components/slug/index.js';
</script>

<template>
  <cds-slug-action-button v-bind="$attrs"><slot /></cds-slug-action-button>
</template>
