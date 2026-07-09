<!--
  Vue wrapper for Carbon's official Web Component <cds-definition-tooltip>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      align (string) — Specify how the trigger should align with the tooltip
      autoalign (boolean) — Will auto-align Definition Tooltip. This prop is currently experimental and is subject to future changes.
      default-open (boolean) — Specify whether the tooltip should be open when it first renders
      open-on-hover (boolean) — Specifies whether the `DefinitionTooltip` should open on hover or not

  Usage:
    <script setup> import DefinitionTooltip from './components/DefinitionTooltip.vue' </script>
    <DefinitionTooltip>Example</DefinitionTooltip>
-->
<script setup>
import '@carbon/web-components/es/components/tooltip/index.js';
</script>

<template>
  <cds-definition-tooltip v-bind="$attrs"><slot /></cds-definition-tooltip>
</template>
