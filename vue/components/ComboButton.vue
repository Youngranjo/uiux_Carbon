<!--
  Vue wrapper for Carbon's official Web Component <cds-combo-button>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (string) — Specify whether the ComboButton should be disabled, or not.
      label (string) — Provide the label to be rendered on the primary action button.
      menu-alignment (POPOVER_ALIGNMENT) — Experimental property. Specify how the menu should align with the button element
      onClick (((event: Event) => void) | undefined) — Provide an optional function to be called when the primary action element is clicked.
      size (COMBO_BUTTON_SIZE) — Specify the size of the button and menu.
      tooltip-alignment (ICON_BUTTON_TOOLTIP_ALIGNMENT) — Specify how the trigger tooltip should be aligned.
      tooltip-content (string) — Provide the tooltip content for the icon button.

  Usage:
    <script setup> import ComboButton from './components/ComboButton.vue' </script>
    <ComboButton>Example</ComboButton>
-->
<script setup>
import '@carbon/web-components/es/components/combo-button/index.js';
</script>

<template>
  <cds-combo-button v-bind="$attrs"><slot /></cds-combo-button>
</template>
