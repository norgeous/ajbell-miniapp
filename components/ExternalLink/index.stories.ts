import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ExternalLink from '.';

const meta = {
  title: 'Components/ExternalLink',
  component: ExternalLink,
  tags: ['autodocs'],
} satisfies Meta<typeof ExternalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'google.com',
    href: 'https://google.com',
  },
};
