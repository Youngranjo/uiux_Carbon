<!--
  Vue wrapper for Carbon's official Web Component <cds-tab>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      type (TABS_TYPE) — Tab type.
      vertical (boolean) — `true` if the tab is in vertical orientation.
      icon-only (boolean) — `true` if this tab is icon-only.
      icon-size (TABS_ICON_SIZE | undefined) — Specify the icon size used by icon-only tabs.
      tabTitle (string) — The tab text content.
      secondary-label (string | undefined) — An optional label to render under the primary tab label.
      badge-indicator (boolean) — **Experimental**: Display an empty dot badge on the Tab.
      disabled (boolean) — `true` if this content switcher item should be disabled.

  Usage:
    <script setup> import Tab from './components/Tab.vue' </script>
    <Tab>Example</Tab>
-->
<script setup>
import '@carbon/web-components/es/components/tabs/index.js';
</script>

<template>
  <cds-tab v-bind="$attrs"><slot /></cds-tab>
</template>
