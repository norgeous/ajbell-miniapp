import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AJBellResponseType } from '@/helpers/endpoint';
import Fund from '.';
import cautiousMockData from '@/mocks/Cautious.json';
import balancedMockData from '@/mocks/Balanced.json';
import adventurousMockData from '@/mocks/Adventurous.json';
import responsibleMockData from '@/mocks/Responsible.json';

const meta = {
  title: 'Pages/Fund',
  component: Fund,
  tags: ['autodocs'],
} satisfies Meta<typeof Fund>;

export default meta;
type Story = StoryObj<typeof meta>;

// from https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json
export const Cautious: Story = {
  args: {
    data: cautiousMockData as AJBellResponseType,
  },
};

// from https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RX1.json
export const Balanced: Story = {
  args: {
    data: balancedMockData as AJBellResponseType,
  },
};

// from https://cdn.core3-dev.ajbbuild.uk/interview/BYW8VG2.json
export const Adventurous: Story = {
  args: {
    data: adventurousMockData as AJBellResponseType,
  },
};

// from https://cdn.core3-dev.ajbbuild.uk/interview/BN0S2V9.json
export const Responsible: Story = {
  args: {
    data: responsibleMockData as AJBellResponseType,
  },
};
