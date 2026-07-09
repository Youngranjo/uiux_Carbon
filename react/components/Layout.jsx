// react/components/Layout.jsx
//
// Layout is stable as a Carbon Web Component (cds-layout-constraint, cds-layout) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_Layout } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/layout/index.js';
//        <cds-layout-constraint />

import '@carbon/web-components/es/components/layout/index.js';

export function Layout(props) {
  return React.createElement('cds-layout-constraint', props);
}
