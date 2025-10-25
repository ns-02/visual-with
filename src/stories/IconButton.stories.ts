import type { Meta, StoryObj } from '@storybook/react-vite';

import IconButton from "../components/ui/IconButton";
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'Example/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '🔍',
    onClick: fn(),
  },
};