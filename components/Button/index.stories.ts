import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import Button from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// from https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json
export const Primary: Story = {
  args: {
    children: 'hello',
    onClick: fn(),
  },
};
