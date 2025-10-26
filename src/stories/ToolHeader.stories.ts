import type { Meta, StoryObj } from '@storybook/react-vite';

import ToolHeader from "../components/ToolHeader";
import { fn } from 'storybook/internal/test';
import { Plus } from 'lucide-react';

const meta = {
  title: 'Example/ToolHeader',
  component: ToolHeader,
} satisfies Meta<typeof ToolHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '텍스트',
    button: '버튼',
    onClick: fn(),
    icon: Plus,
  },
};