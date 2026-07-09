// react/components/PageHeader.jsx
//
// PageHeader is stable as a Carbon Web Component (cds-page-header-breadcrumb, cds-page-header-content-text, cds-page-header-content, cds-page-header-hero-image, cds-page-header-tabs, cds-page-header) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_PageHeader } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/page-header/index.js';
//        <cds-page-header-breadcrumb />

import '@carbon/web-components/es/components/page-header/index.js';

export function PageHeader(props) {
  return React.createElement('cds-page-header-breadcrumb', props);
}
