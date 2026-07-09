<!--
  Vue wrapper for Carbon's official Web Component <cds-slider-input>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      disabled (boolean) — `true` if the input should be disabled.
      invalid (boolean) — true to specify if the control is invalid.
      warn (boolean) — true to specify if the control should display warn icon and text.
      hideTextInput (boolean) — true to specify if the control should display warn icon and text.
      max (string) — The maximum value.
      min (string) — The minimum value.
      step (string) — The snapping step of the value.
      type (string) — The type of the `<input>`.

  Usage:
    <script setup> import SliderInput from './components/SliderInput.vue' </script>
    <SliderInput>Example</SliderInput>
-->
<script setup>
import '@carbon/web-components/es/components/slider/index.js';
</script>

<template>
  <cds-slider-input v-bind="$attrs"><slot /></cds-slider-input>
</template>
