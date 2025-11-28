import type { Meta, StoryObj } from '@storybook/react-vite';

import DropdownButton from '@components/Dropdown';
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'Example/DropdownButton',
  component: DropdownButton,
} satisfies Meta<typeof DropdownButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // onClick: fn(),
  },
};
