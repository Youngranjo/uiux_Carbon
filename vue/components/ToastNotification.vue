<!--
  Vue wrapper for Carbon's official Web Component <cds-toast-notification>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      caption (string) — Specify the caption
      aria-label (string) — Provide a description for "close" icon button that can be read by screen readers
      hide-close-button (boolean) — `true` to hide the close button.
      status-icon-description (string) — Provide a description for "status" icon that can be read by screen readers
      kind (NOTIFICATION_KIND) — Notification kind.
      low-contrast (boolean) — Low contrast mode
      open (boolean) — `true` if the notification should be open.
      timeout (number | null) — Specify an optional duration the notification should be closed in

  Usage:
    <script setup> import ToastNotification from './components/ToastNotification.vue' </script>
    <ToastNotification>Example</ToastNotification>
-->
<script setup>
import '@carbon/web-components/es/components/notification/index.js';
</script>

<template>
  <cds-toast-notification v-bind="$attrs"><slot /></cds-toast-notification>
</template>
