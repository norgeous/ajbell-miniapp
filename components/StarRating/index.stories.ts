import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import StarRating from '.';

const meta = {
  title: 'Components/StarRating',
  component: StarRating,
  tags: ['autodocs'],
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 3,
    max: 5,
  },
};
