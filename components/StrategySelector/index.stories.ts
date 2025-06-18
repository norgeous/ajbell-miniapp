import type { Meta, StoryObj } from '@storybook/nextjs-vite';
// import { fn } from 'storybook/test';
import StrategySelector from '.';

const meta = {
  title: 'Components/StrategySelector',
  component: StrategySelector,
  tags: ['autodocs'],
} satisfies Meta<typeof StrategySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // args: {
  //   onClick: fn(),
  // },
};
