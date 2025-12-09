import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Dropdown } from '@components/ui';
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'Example/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>드롭다운</Button>,
  },
};
