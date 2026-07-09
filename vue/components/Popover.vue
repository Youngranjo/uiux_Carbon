<!--
  Vue wrapper for Carbon's official Web Component <cds-popover>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      align (string) — Specify direction of alignment
      alignment-axis-offset (number | undefined) — **Experimental:** Provide an offset value for alignment axis. Only takes effect when `autoalign` is enabled.
      autoalign (boolean) — Specify whether a auto align functionality should be applied
      caret (boolean) — Specify whether a caret should be rendered
      dropShadow (boolean) — Specify whether a dropShadow should be rendered
      border (boolean) — Specify whether a border should be rendered on the popover
      highContrast (boolean) — Render the component using the high-contrast variant
      open (boolean) — Specify whether the component is currently open or closed

  Usage:
    <script setup> import Popover from './components/Popover.vue' </script>
    <Popover>Example</Popover>
-->
<script setup>
import '@carbon/web-components/es/components/popover/index.js';
</script>

<template>
  <cds-popover v-bind="$attrs"><slot /></cds-popover>
</template>
