<!--
  Vue wrapper for Carbon's official Web Component <cds-tabs>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      selecting-items-assistive-text (string) — An assistive text for screen reader to announce, telling the open state.
      selected-item-assistive-text (string) — An assistive text for screen reader to announce, telling that an item is selected.
      trigger-content (string) — The content of the trigger button for narrow mode.
      type (TABS_TYPE) — Tabs type.
      vertical (boolean) — `true` if the tabs are in vertical orientation.
      dismissable (string) — Whether the rendered Tab children should be dismissable.
      icon-size (TABS_ICON_SIZE | undefined) — Specify the icon size used by icon-only tabs.
      full-width (boolean) — Used for tabs within a grid, this makes it so tabs span the full container width and have the same width. Only available on contained tabs with <9 children

  Usage:
    <script setup> import Tabs from './components/Tabs.vue' </script>
    <Tabs>Example</Tabs>
-->
<script setup>
import '@carbon/web-components/es/components/tabs/index.js';
</script>

<template>
  <cds-tabs v-bind="$attrs"><slot /></cds-tabs>
</template>
