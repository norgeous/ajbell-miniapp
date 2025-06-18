import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import MultiButton from '.';

const meta = {
  title: 'Components/MultiButton',
  component: MultiButton,
  tags: ['autodocs'],
} satisfies Meta<typeof MultiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    labels: ['A', 'B', 'C'],
    onClick: fn(),
  },
};
