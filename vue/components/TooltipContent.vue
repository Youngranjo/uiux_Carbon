<!--
  Vue wrapper for Carbon's official Web Component <cds-tooltip-content>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      align (string) — Specify the popover alignment
      autoalign (boolean) — Specify whether a auto align functionality should be applied
      caret (string) — Specify whether a caret should be rendered
      dropShadow (boolean) — Specify whether a dropShadow should be rendered
      border (boolean) — Specify whether a border should be rendered on the popover
      highContrast (boolean) — Render the component using the high-contrast variant
      open (boolean) — Specify whether the component is currently open or closed
      tabTip (boolean) — Render the component using the tab tip variant

  Usage:
    <script setup> import TooltipContent from './components/TooltipContent.vue' </script>
    <TooltipContent>Example</TooltipContent>
-->
<script setup>
import '@carbon/web-components/es/components/tooltip/index.js';
</script>

<template>
  <cds-tooltip-content v-bind="$attrs"><slot /></cds-tooltip-content>
</template>
