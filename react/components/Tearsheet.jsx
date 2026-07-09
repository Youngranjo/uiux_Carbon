// react/components/Tearsheet.jsx
//
// Tearsheet is stable as a Carbon Web Component (cds-tearsheet) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_Tearsheet } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/tearsheet/index.js';
//        <cds-tearsheet />

import '@carbon/web-components/es/components/tearsheet/index.js';

export function Tearsheet(props) {
  return React.createElement('cds-tearsheet', props);
}
