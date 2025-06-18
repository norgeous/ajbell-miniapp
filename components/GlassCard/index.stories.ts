import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import GlassCard from '.';

const meta = {
  title: 'Components/GlassCard',
  component: GlassCard,
  tags: ['autodocs'],
} satisfies Meta<typeof GlassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'hello i am a card',
  },
};
