import type { Meta, StoryObj } from '@storybook/react-vite';

import CircleButton from "../components/ui/CircleButton";
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'Example/CircleButton',
  component: CircleButton,
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '🔍',
    onClick: fn(),
  },
};