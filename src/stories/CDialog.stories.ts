import type { Meta, StoryObj } from '@storybook/react-vite';

import CDialog from '../components/CDialog';
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'Example/CDialog',
  component: CDialog,
} satisfies Meta<typeof CDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // onClick: fn(),
  },
};