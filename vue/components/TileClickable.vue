<!--
  Vue wrapper for the REAL, official @carbon/vue component <CvTileClickable>.

  Note: @carbon/vue targets Carbon 10 (the "carbon-components" package, "bx--" class
  prefix) — one major version behind the Carbon 11 design (@carbon/react, @carbon/styles,
  @carbon/web-components) used everywhere else in this project. It is genuinely IBM's
  official Vue package, but it will render with older colors/spacing/typography.

  Install:
    npm install --save @carbon/vue vue

  Global setup (main.js):
    import CarbonVue3 from '@carbon/vue';
    import '@carbon/vue/dist/carbon-vue-3.css';
    app.use(CarbonVue3);

  Usage:
    import TileClickable from './components/TileClickable.vue';
    <TileClickable>...</TileClickable>
-->
<script>
import { CvTileClickable } from '@carbon/vue';
export default CvTileClickable;
</script>
