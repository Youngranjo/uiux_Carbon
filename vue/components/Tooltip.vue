<!--
  Vue wrapper for Carbon's official Web Component <cds-tooltip>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      data-table (boolean) — `true` if this tooltip is in a data table row
      closeOnActivation (boolean) — Specify whether the tooltip should be closed when clicked
      defaultOpen (boolean) — Specify whether the tooltip should be open when it first renders
      enter-delay-ms (number) — Specify the duration in milliseconds to delay before displaying the tooltip
      leave-delay-ms (number) — Specify the duration in milliseconds to delay before hiding the tooltip
      keyboard-only (boolean) — Only open tooltip on keyboard interactions, this is used for interactive tags
      size (boolean) — Specify the size of the tooltip
      timeoutId (number) — Specify the timeout reference for the tooltip

  Usage:
    <script setup> import Tooltip from './components/Tooltip.vue' </script>
    <Tooltip>Example</Tooltip>
-->
<script setup>
import '@carbon/web-components/es/components/tooltip/index.js';
</script>

<template>
  <cds-tooltip v-bind="$attrs"><slot /></cds-tooltip>
</template>
