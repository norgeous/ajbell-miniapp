import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Table from '.';

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headings: ['heading1', 'heading2'],
    data: [
      { value1: 'row A - value 1', value2: 'row A - value 2' },
      { value1: 'row B - value 1', value2: 'row B - value 2' },
      { value1: 'row C - value 1', value2: 'row C - value 2' },
    ],
  },
};
