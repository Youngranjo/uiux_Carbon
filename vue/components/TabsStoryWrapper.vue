<!--
  Vue wrapper for Carbon's official Web Component <tabs-story-wrapper>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      with-icons (boolean) — Whether to render tabs with icons
      disabled (boolean) — Whether tabs are disabled
      contained (boolean) — Whether tabs are contained
      dismissable (boolean) — Whether the rendered Tab children should be dismissable.
      selection-mode (string) — Selection mode
      selected-index (number) — Selected index for the initially selected content
      size (TABS_SIZE | undefined) — Size of the tabs

  Usage:
    <script setup> import TabsStoryWrapper from './components/TabsStoryWrapper.vue' </script>
    <TabsStoryWrapper>Example</TabsStoryWrapper>
-->
<script setup>
import '@carbon/web-components/es/components/tabs/index.js';
</script>

<template>
  <tabs-story-wrapper v-bind="$attrs"><slot /></tabs-story-wrapper>
</template>
