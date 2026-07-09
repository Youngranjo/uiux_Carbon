// react/components/IconIndicator.jsx
//
// IconIndicator is stable as a Carbon Web Component (cds-icon-indicator) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_IconIndicator } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/icon-indicator/index.js';
//        <cds-icon-indicator />

import '@carbon/web-components/es/components/icon-indicator/index.js';

export function IconIndicator(props) {
  return React.createElement('cds-icon-indicator', props);
}
