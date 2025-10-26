import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from "../components/ui/Button";
import { fn } from 'storybook/internal/test';
import { Plus } from 'lucide-react';

const meta = {
  title: 'Example/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: '버튼',
    onClick: fn(),
  },
};

export const Icon: Story = {
  args: {
    text: '버튼',
    onClick: fn(),
    icon: Plus,
  },
};