<!--
  Vue wrapper for Carbon's official Web Component <cds-slider>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      value-upper (string) — The upper bound when there are two handles..
      disabled (boolean) — `true` if the check box should be disabled.
      required (boolean) — true to specify if the control is required.
      readonly (boolean) — Whether the slider should be read-only
      label-text (string) — The label text.
      max-label (string) — The label associated with the maximum value.
      min-label (string) — The label associated with the minimum value.
      hide-label (boolean) — Specify whether you want the underlying label to be visually hidden

  Usage:
    <script setup> import Slider from './components/Slider.vue' </script>
    <Slider>Example</Slider>
-->
<script setup>
import '@carbon/web-components/es/components/slider/index.js';
</script>

<template>
  <cds-slider v-bind="$attrs"><slot /></cds-slider>
</template>
