import React from 'react';
import type { Preview } from '@storybook/react-vite'
import { Theme } from "@radix-ui/themes";

const preview: Preview = {
  decorators: [
    (Story) => React.createElement(Theme, null, React.createElement(Story, null))
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
      test: 'todo'
    }
  },
};

export default preview;