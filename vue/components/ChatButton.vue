<!--
  Vue wrapper for Carbon's official Web Component <cds-chat-button>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (boolean) — `true` if the button should be disabled.
      kind (CHAT_BUTTON_KIND) — Specify whether the `ChatButton` should be disabled
      size (CHAT_BUTTON_SIZE) — Chat button size.
      is-quick-action (boolean) — Specify whether the `ChatButton` should be rendered as a quick action button
      is-selected (boolean) — Specify whether the quick action `ChatButton` should be rendered as selected. This disables the input

  Usage:
    <script setup> import ChatButton from './components/ChatButton.vue' </script>
    <ChatButton>Example</ChatButton>
-->
<script setup>
import '@carbon/web-components/es/components/chat-button/index.js';
</script>

<template>
  <cds-chat-button v-bind="$attrs"><slot /></cds-chat-button>
</template>
