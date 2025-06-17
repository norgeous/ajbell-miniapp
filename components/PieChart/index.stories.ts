import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PieChart from '.';

const meta = {
  title: 'Example/PieChart',
  component: PieChart,
  tags: ['autodocs'],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    values: undefined,
  },
};

