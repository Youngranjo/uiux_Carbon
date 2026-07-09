<!--
  Vue wrapper for Carbon's official Web Component <cds-number-input>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      min (string) — The minimum value allowed in the input
      max (string) — The maximum value allowed in the input
      step (string) — The amount the value should increase or decrease by
      icon-description (string) — Provide a description for up/down icons that can be read by screen readers
      increment-button-assistive-text (string) — Aria text for the button that increments the value
      decrement-button-assistive-text (string) — Aria text for the button that decrements the value
      hide-steppers (boolean) — Specify whether you want the steppers to be hidden
      allow-empty (boolean) — `true` to allow empty string.

  Usage:
    <script setup> import NumberInput from './components/NumberInput.vue' </script>
    <NumberInput>Example</NumberInput>
-->
<script setup>
import '@carbon/web-components/es/components/number-input/index.js';
</script>

<template>
  <cds-number-input v-bind="$attrs"><slot /></cds-number-input>
</template>
