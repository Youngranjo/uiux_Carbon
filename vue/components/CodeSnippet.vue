<!--
  Vue wrapper for Carbon's official Web Component <cds-code-snippet>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      copy-text (string) — Optional text to copy. If not specified, the `children` node's `innerText`
      disabled (boolean) — `true` if the button should be disabled.
      feedback (string) — Specify the string displayed when the snippet is copied
      feedback-timeout (number) — Specify the time it takes for the feedback message to timeout
      hide-copy-button (boolean) — Specify whether or not a copy button should be used/rendered.
      maxCollapsedNumberOfRows (number) — Specify the maximum number of rows to be shown when in collapsed view
      maxExpandedNumberOfRows (number) — Specify the maximum number of rows to be shown when in expanded view
      minCollapsedNumberOfRows (number) — Specify the minimum number of rows to be shown when in collapsed view

  Usage:
    <script setup> import CodeSnippet from './components/CodeSnippet.vue' </script>
    <CodeSnippet>Example</CodeSnippet>
-->
<script setup>
import '@carbon/web-components/es/components/code-snippet/index.js';
</script>

<template>
  <cds-code-snippet v-bind="$attrs"><slot /></cds-code-snippet>
</template>
