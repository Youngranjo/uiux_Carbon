<!--
  Vue wrapper for Carbon's official Web Component <cds-stack>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      orientation (STACK_ORIENTATION) — Specify the orientation of them items in the Stack
      gap (string) — Provide either a custom value or a step from the spacing scale to be used
      use-custom-gap-value (boolean) — Turn on when passing in custom value to 'gap' attribute (ie. gap="2rem")

  Usage:
    <script setup> import Stack from './components/Stack.vue' </script>
    <Stack>Example</Stack>
-->
<script setup>
import '@carbon/web-components/es/components/stack/index.js';
</script>

<template>
  <cds-stack v-bind="$attrs"><slot /></cds-stack>
</template>
