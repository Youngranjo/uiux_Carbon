<!--
  Vue wrapper for Carbon's official Web Component <cds-pagination-nav>.
  Carbon has no separate IBM-maintained Vue package: the official guidance is that Vue
  can use Web Components directly, the same as native HTML tags. This file is a thin
  convenience wrapper around the real, installed @carbon/web-components source so it can
  be imported like any other Vue component.

  Setup once in your Vue app entry (vite.config or main.js):
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('cds-')

  Install:
    npm install --save @carbon/web-components @carbon/styles

  Attributes (see custom-elements.json for the full list):
      items-shown (number) — The number of items to be shown (minimum of 4 unless props.items < 4).
      loop (boolean) — Whether user should be able to loop through the items when reaching first / last.
      page (number) — The index of current page.
      total-items (number) — The total number of items.
      size (PAGINATION_NAV_SIZE) — Specify the size of the PaginationNav.
      tooltip-alignment (PAGINATION_TOOLTIP_ALIGNMENT) — Specify the alignment of the tooltip for the icon-only next/prev buttons.
      tooltip-position (PAGINATION_TOOLTIP_POSITION) — Specify the position of the tooltip for the icon-only next/prev buttons.
      disable-overflow (boolean | undefined) — If true, the '...' pagination overflow will not render page links between the first and last rendered buttons.

  Usage:
    <script setup> import PaginationNav from './components/PaginationNav.vue' </script>
    <PaginationNav>Example</PaginationNav>
-->
<script setup>
import '@carbon/web-components/es/components/pagination-nav/index.js';
</script>

<template>
  <cds-pagination-nav v-bind="$attrs"><slot /></cds-pagination-nav>
</template>
