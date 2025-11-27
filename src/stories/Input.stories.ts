import type { Meta } from '@storybook/react-vite';

import Input from "@components/ui/Input";

const meta = {
  title: 'Example/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

export const Default = Input.bind({});