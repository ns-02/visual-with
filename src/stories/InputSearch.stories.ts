import type { Meta } from '@storybook/react-vite';

import InputSearch from "../components/ui/InputSearch";

const meta = {
  title: 'Example/InputSearch',
  component: InputSearch,
} satisfies Meta<typeof InputSearch>;

export default meta;

export const Default = InputSearch.bind({});