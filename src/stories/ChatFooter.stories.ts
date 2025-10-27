import type { Meta, StoryObj } from '@storybook/react-vite';

import ChatFooter from "../components/ChatFooter";
import { fn } from 'storybook/internal/test';
import { Plus } from 'lucide-react';

const meta = {
  title: 'Example/ChatFooter',
  component: ChatFooter,
} satisfies Meta<typeof ChatFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    button1: '',
    onClick1: fn(),
    icon1: Plus,
    button2: '',
    onClick2: fn(),
    icon2: Plus,
    chat: "채팅",
    setChat: fn(),
    onKeyDown: fn(),
  },
};