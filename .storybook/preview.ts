import type { Preview } from '@storybook/react-vite';
import { Theme } from '@radix-ui/themes';
import { createElement } from 'react';

const preview: Preview = {
  decorators: [
    (Story) => createElement(Theme, null, createElement(Story, null)),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
