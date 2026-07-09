// react/components/SidePanel.jsx
//
// SidePanel is stable as a Carbon Web Component (cds-side-panel) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_SidePanel } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/side-panel/index.js';
//        <cds-side-panel />

import '@carbon/web-components/es/components/side-panel/index.js';

export function SidePanel(props) {
  return React.createElement('cds-side-panel', props);
}
