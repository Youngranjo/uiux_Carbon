<!--
  Vue wrapper for Carbon's official Web Component <cds-inline-notification>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      aria-label (string) — Provide a description for "close" icon button that can be read by screen readers
      hide-close-button (boolean) — `true` to hide the close button.
      status-icon-description (string) — Provide a description for "status" icon that can be read by screen readers
      kind (NOTIFICATION_KIND) — Notification kind.
      low-contrast (boolean) — Low contrast mode
      open (boolean) — `true` if the notification should be open.
      timeout (number | null) — Specify an optional duration the notification should be closed in
      subtitle (string) — The subtitle.

  Usage:
    <script setup> import InlineNotification from './components/InlineNotification.vue' </script>
    <InlineNotification>Example</InlineNotification>
-->
<script setup>
import '@carbon/web-components/es/components/notification/index.js';
</script>

<template>
  <cds-inline-notification v-bind="$attrs"><slot /></cds-inline-notification>
</template>
