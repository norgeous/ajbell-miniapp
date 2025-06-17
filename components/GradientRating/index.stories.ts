import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import GradientRating from '.';

const meta = {
  title: 'Components/GradientRating',
  component: GradientRating,
  tags: ['autodocs'],
} satisfies Meta<typeof GradientRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: 5,
    max: 10,
  },
};
