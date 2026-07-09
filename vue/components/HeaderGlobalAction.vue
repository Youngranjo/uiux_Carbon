<!--
  Vue wrapper for Carbon's official Web Component <cds-header-global-action>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      active (string) — Specify whether the action is currently active
      panel-id (string) — Specify which header panel the button is associated with.
      button-label-active (string) — The `aria-label` attribute for the button in its active state.
      button-label-inactive (string) — The `aria-label` attribute for the button in its inactive state.
      autofocus (boolean) — `true` if the button should have input focus when the page loads.
      batch-action (boolean) — `true` if the button is being used within a data table batch action toolbar
      button-class-name (string) — Specify an optional className to be added to your Button
      danger-description (string) — Specify the message read by screen readers for the danger button variants

  Usage:
    <script setup> import HeaderGlobalAction from './components/HeaderGlobalAction.vue' </script>
    <HeaderGlobalAction>Example</HeaderGlobalAction>
-->
<script setup>
import '@carbon/web-components/es/components/ui-shell/index.js';
</script>

<template>
  <cds-header-global-action v-bind="$attrs"><slot /></cds-header-global-action>
</template>
