<!--
  Vue wrapper for Carbon's official Web Component <cds-breadcrumb-link>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      aria-current (string) — indicates that this breadcrumb item represents the current item
      is-currentpage (boolean) — Provide if this breadcrumb item represents the current page
      disabled (boolean) — `true` if the link should be disabled.
      download (string) — The default file name.
      href (string) — Link `href`.
      hreflang (string) — The language of what `href` points to.
      inline (boolean) — `true` if the link should be inline.
      link-role (string) — The a11y role for `<a>`.

  Usage:
    <script setup> import BreadcrumbLink from './components/BreadcrumbLink.vue' </script>
    <BreadcrumbLink>Example</BreadcrumbLink>
-->
<script setup>
import '@carbon/web-components/es/components/breadcrumb/index.js';
</script>

<template>
  <cds-breadcrumb-link v-bind="$attrs"><slot /></cds-breadcrumb-link>
</template>
