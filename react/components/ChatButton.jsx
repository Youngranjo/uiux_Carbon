// react/components/ChatButton.jsx
//
// ChatButton is stable as a Carbon Web Component (cds-chat-button-skeleton, cds-chat-button) but is still only
// exposed from @carbon/react under an experimental preview_/unstable_ prefix, so there
// is no stable named export to re-export here yet.
//
// Two real options today:
//   1. Experimental React API (may change):
//        import { unstable_ChatButton } from '@carbon/react';
//   2. Use the real Web Component directly inside React (stable today):
//        import '@carbon/web-components/es/components/chat-button/index.js';
//        <cds-chat-button-skeleton />

import '@carbon/web-components/es/components/chat-button/index.js';

export function ChatButton(props) {
  return React.createElement('cds-chat-button-skeleton', props);
}
