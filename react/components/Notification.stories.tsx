// packages/react/src/components/Notification/stories/ActionableNotification.stories.js

/**
 * Copyright IBM Corp. 2016, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ActionableNotification } from '../../Notification';
import { action } from 'storybook/actions';
import mdx from '../Notification.mdx';

// eslint-disable-next-line storybook/csf-component
export default {
  title: 'Components/Notifications/Actionable',
  component: ActionableNotification,
  parameters: {
    docs: {
      page: mdx,
    },
    controls: {
      exclude: ['aria-label', 'hasFocus'],
    },
  },
  args: {
    actionButtonLabel: 'Action',
    inline: false,
    closeOnEscape: true,
    title: 'Notification title',
    subtitle: 'Subtitle text goes here',
    kind: 'error',
    lowContrast: false,
    hideCloseButton: false,
    ['aria-label']: 'close notification',
    statusIconDescription: 'notification',
    onClose: action('onClose'),
    onCloseButtonClick: action('onCloseButtonClick'),
    onActionButtonClick: action('onActionButtonClick'),
  },
  argTypes: {
    onActionButtonClick: {
      action: 'onActionButtonClick',
    },
    onClose: {
      action: 'onClose',
    },
    onCloseButtonClick: {
      action: 'onCloseButtonClick',
    },
  },
};

export const Default = (args) => (
  <ActionableNotification {...args}></ActionableNotification>
);

export const Inline = {
  ...Default,
  args: {
    inline: true,
  },
  tags: ['!dev', '!autodocs'],
};


// ─────────────────────────────

// packages/react/src/components/Notification/stories/Callout.stories.js

/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Callout } from '../../Notification';
import { Link } from '../../Link';
import mdx from '../Notification.mdx';

export default {
  title: 'Components/Notifications/Callout',
  component: Callout,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  args: {
    kind: 'info',
    lowContrast: false,
    statusIconDescription: 'notification',
  },
};

export const Default = (args) => (
  <Callout
    title="Notification title"
    subtitle="Subtitle text goes here"
    {...args}
  />
);

export const WithInteractiveElements = () => (
  <Callout
    title="Notification title"
    titleId="my fancy id 123"
    kind="info"
    lowContrast>
    <div className="cds--inline-notification__subtitle">
      Additional text can describe the notification, or a link to{' '}
      <Link inline href="#" aria-describedby="my fancy id 123">
        learn more
      </Link>
    </div>
  </Callout>
);

Default.argTypes = {
  kind: {
    options: ['info', 'warning'],
    control: { type: 'select' },
  },
};
