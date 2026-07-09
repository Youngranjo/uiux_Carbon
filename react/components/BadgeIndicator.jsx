// react/components/BadgeIndicator.jsx
//
// BadgeIndicator is stable as a Carbon Web Component (cds-badge-indicator) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_BadgeIndicator } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/badge-indicator/index.js';
//        <cds-badge-indicator />

import '@carbon/web-components/es/components/badge-indicator/index.js';

export function BadgeIndicator(props) {
  return React.createElement('cds-badge-indicator', props);
}
