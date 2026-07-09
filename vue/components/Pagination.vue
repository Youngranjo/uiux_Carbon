<!--
  Vue wrapper for Carbon's official Web Component <cds-pagination>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      backward-text (string) — The assistive text for the button to go to previous page.
      backward-text-tooltip-position (PAGINATION_TOOLTIP_POSITION) — Specify the position of the tooltip for the backward button. Can be one of: top, right, bottom, or left.
      page (number) — The current page
      is-last-page (boolean) — `true` to explicitly state that user is at the last page.
      items-per-page-text (string) — The translatable text indicating the number of items per page.
      disabled (boolean) — `true` if the pagination UI should be disabled.
      forward-text (string) — The assistive text for the button to go to next page.
      forward-text-tooltip-position (PAGINATION_TOOLTIP_POSITION) — Specify the position of the tooltip for the forward button. Can be one of: top, right, bottom, or left.

  Usage:
    <script setup> import Pagination from './components/Pagination.vue' </script>
    <Pagination>Example</Pagination>
-->
<script setup>
import '@carbon/web-components/es/components/pagination/index.js';
</script>

<template>
  <cds-pagination v-bind="$attrs"><slot /></cds-pagination>
</template>
