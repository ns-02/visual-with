import type { Meta, StoryObj } from '@storybook/react-vite';

import Field from '../components/ui/Field';
import { fn } from 'storybook/internal/test';

const meta = {
  title: 'Example/Field',
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // onClick: fn(),
  },
};