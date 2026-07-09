<!--
  Vue wrapper for Carbon's official Web Component <cds-toggletip>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      alignment (POPOVER_ALIGNMENT) — How the tooltip is aligned to the trigger button.
      alignment-axis-offset (number) — **Experimental:** Provide an offset value for alignment axis. Only takes effect when `autoalign` is enabled.
      autoalign (boolean) — Specify whether a auto align functionality should be applied
      button-label (string) — The label for the toggle button
      open (boolean) — Set whether toggletip is open
      default-open (boolean) — Set whether toggletip is open by default.

  Usage:
    <script setup> import Toggletip from './components/Toggletip.vue' </script>
    <Toggletip>Example</Toggletip>
-->
<script setup>
import '@carbon/web-components/es/components/toggle-tip/index.js';
</script>

<template>
  <cds-toggletip v-bind="$attrs"><slot /></cds-toggletip>
</template>
