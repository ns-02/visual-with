import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/internal/test';
import { HeaderBar } from '@components/index';
import { Plus } from 'lucide-react';

const meta = {
  title: 'Example/ToolHeader',
  component: HeaderBar,
} satisfies Meta<typeof HeaderBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '텍스트',
    button: '버튼',
    onClick: fn(),
  },
};
