import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AJBellResponseType } from '@/helpers/endpoint';
import FundPage from '.';
import cautiousMockData from '@/mocks/Cautious.json';
import balancedMockData from '@/mocks/Balanced.json';
import adventurousMockData from '@/mocks/Adventurous.json';
import responsibleMockData from '@/mocks/Responsible.json';

const meta = {
  title: 'Components/FundPage',
  component: FundPage,
  tags: ['autodocs'],
} satisfies Meta<typeof FundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    allData: {
      BYW8RV9: cautiousMockData as AJBellResponseType,
      BYW8RX1: balancedMockData as AJBellResponseType,
      BYW8VG2: adventurousMockData as AJBellResponseType,
      BN0S2V9: responsibleMockData as AJBellResponseType,
    },
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText('Growth Funds Variations'));
    await userEvent.click(canvas.getByText('Cautious'));
  },
};

export const NoData: Story = {
  args: {
    allData: {},
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText('Growth Funds Variations'));
    await userEvent.click(canvas.getByText('Cautious'));
  },
};
