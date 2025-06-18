import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn, expect } from 'storybook/test';
import StrategySelector from '.';

const meta = {
  title: 'Components/StrategySelector',
  component: StrategySelector,
  tags: ['autodocs'],
} satisfies Meta<typeof StrategySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSelectFund: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByText('Growth Funds Variations'));
    await userEvent.click(canvas.getByText('Cautious'));
    await expect(args.onSelectFund).toHaveBeenCalledWith('BYW8RV9');
  },
};
