import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '@shared/components/ui/Button';
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'Example/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    text: '버튼',
    onClick: fn(),
  },
};

export const NormalIcon: Story = {
  args: {
    text: '버튼',
    onClick: fn(),
  },
};

export const Square: Story = {
  args: {
    text: '버',
    onClick: fn(),
    shape: 'square',
  },
};

export const CircleIcon: Story = {
  args: {
    onClick: fn(),
    shape: 'circle',
  },
};
