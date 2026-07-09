// react/components/Dialog.jsx
//
// Dialog is stable as a Carbon Web Component (cds-dialog-body, cds-dialog-close-button, cds-dialog-controls, cds-dialog-footer-button, cds-dialog-footer, cds-dialog-header, cds-dialog-subtitle, cds-dialog-title, cds-dialog) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_Dialog } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/dialog/index.js';
//        <cds-dialog-body />

import '@carbon/web-components/es/components/dialog/index.js';

export function Dialog(props) {
  return React.createElement('cds-dialog-body', props);
}
