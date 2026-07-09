// react/components/ShapeIndicator.jsx
//
// ShapeIndicator is stable as a Carbon Web Component (cds-shape-indicator) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_ShapeIndicator } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/shape-indicator/index.js';
//        <cds-shape-indicator />

import '@carbon/web-components/es/components/shape-indicator/index.js';

export function ShapeIndicator(props) {
  return React.createElement('cds-shape-indicator', props);
}
