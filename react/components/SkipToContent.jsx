// react/components/SkipToContent.jsx
//
// SkipToContent is stable as a Carbon Web Component (cds-skip-to-content) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_SkipToContent } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/skip-to-content/index.js';
//        <cds-skip-to-content />

import '@carbon/web-components/es/components/skip-to-content/index.js';

export function SkipToContent(props) {
  return React.createElement('cds-skip-to-content', props);
}
