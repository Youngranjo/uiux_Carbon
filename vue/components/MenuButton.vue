<!--
  Vue wrapper for Carbon's official Web Component <cds-menu-button>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (string) — Specify whether the MenuButton should be disabled, or not.
      kind (MENU_BUTTON_KIND) — Specify the type of button to be used as the base for the trigger button.
      label (string) — Provide the label to be rendered on the trigger button.
      menu-alignment (POPOVER_ALIGNMENT) — Experimental property. Specify how the menu should align with the button element
      menu-border (boolean) — Specify whether the menu should have a border.
      menu-background-token (MENU_BACKGROUND_TOKEN) — Specify the background token to use for the menu. Default is 'layer'.
      size (MENU_BUTTON_SIZE) — Specify the size of the button and menu.
      tab-index (number) — Specify the tabIndex of the button.

  Usage:
    <script setup> import MenuButton from './components/MenuButton.vue' </script>
    <MenuButton>Example</MenuButton>
-->
<script setup>
import '@carbon/web-components/es/components/menu-button/index.js';
</script>

<template>
  <cds-menu-button v-bind="$attrs"><slot /></cds-menu-button>
</template>
