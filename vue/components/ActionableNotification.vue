<!--
  Vue wrapper for Carbon's official Web Component <cds-actionable-notification>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      inline (boolean) — Inline notification type.
      action-button-label (string) — Pass in the action button label that will be rendered within the ActionableNotification.
      close-on-escape (boolean) — Specify if pressing the escape key should close notifications
      has-focus (boolean) — Specify if focus should be moved to the component when the notification contains actions
      caption (string) — The caption.
      aria-label (string) — Provide a description for "close" icon button that can be read by screen readers
      hide-close-button (boolean) — `true` to hide the close button.
      status-icon-description (string) — Provide a description for "status" icon that can be read by screen readers

  Usage:
    <script setup> import ActionableNotification from './components/ActionableNotification.vue' </script>
    <ActionableNotification>Example</ActionableNotification>
-->
<script setup>
import '@carbon/web-components/es/components/notification/index.js';
</script>

<template>
  <cds-actionable-notification v-bind="$attrs"><slot /></cds-actionable-notification>
</template>
