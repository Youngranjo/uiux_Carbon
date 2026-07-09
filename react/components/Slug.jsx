// react/components/Slug.jsx
//
// Slug is stable as a Carbon Web Component (cds-slug-action-button, cds-slug) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_Slug } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/slug/index.js';
//        <cds-slug-action-button />

import '@carbon/web-components/es/components/slug/index.js';

export function Slug(props) {
  return React.createElement('cds-slug-action-button', props);
}
