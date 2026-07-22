<!--
  Vue wrapper for Carbon's official Web Component <cds-password-input>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      autocomplete (string) — May be any of the standard HTML autocomplete options
      autofocus (boolean) — Sets the input to be focussed automatically on page load. Defaults to false
      disabled (boolean) — Controls the disabled state of the input
      enable-counter (boolean) — Specify whether to display the character counter
      helper-text (string) — The helper text.
      invalid-text (string) — Message which is displayed if the value is invalid.
      max-count (string) — Max character count allowed for input. This is needed in order for enableCounter to display
      warn (boolean) — Specify whether the control is currently in warning state

  Usage:
    <script setup> import PasswordInput from './components/PasswordInput.vue' </script>
    <PasswordInput>Example</PasswordInput>
-->
<script setup>
import '@carbon/web-components/es/components/password-input/index.js';
</script>

<template>
  <cds-password-input v-bind="$attrs"><slot /></cds-password-input>
</template>
