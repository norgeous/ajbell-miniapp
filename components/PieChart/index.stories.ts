import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PieChart from '.';

const meta = {
  title: 'Example/PieChart',
  component: PieChart,
  tags: ['autodocs'],
} satisfies Meta<typeof PieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Whole: Story = {
  args: {
    values: [
      { label: 'A', value: 100 },
    ],
  },
};

export const Halfs: Story = {
  args: {
    values: [
      { label: 'A', value: 50 },
      { label: 'B', value: 50 },
    ],
  },
};

export const Thirds: Story = {
  args: {
    values: [
      { label: 'A', value: 33.33333 },
      { label: 'B', value: 33.33333 },
      { label: 'C', value: 33.33333 },
    ],
  },
};

export const Quarters: Story = {
  args: {
    values: [
      { label: 'A', value: 25 },
      { label: 'B', value: 25 },
      { label: 'C', value: 25 },
      { label: 'D', value: 25 },
    ],
  },
};

export const Fifths: Story = {
  args: {
    values: [
      { label: 'A', value: 20 },
      { label: 'B', value: 20 },
      { label: 'C', value: 20 },
      { label: 'D', value: 20 },
      { label: 'E', value: 20 },
    ],
  },
};

export const Sixths: Story = {
  args: {
    values: [
      { label: 'A', value: 100/6 },
      { label: 'B', value: 100/6 },
      { label: 'C', value: 100/6 },
      { label: 'D', value: 100/6 },
      { label: 'E', value: 100/6 },
      { label: 'F', value: 100/6 },
    ],
  },
};

export const Sevenths: Story = {
  args: {
    values: [
      { label: 'A', value: 100/7 },
      { label: 'B', value: 100/7 },
      { label: 'C', value: 100/7 },
      { label: 'D', value: 100/7 },
      { label: 'E', value: 100/7 } ,
      { label: 'F', value: 100/7 },
      { label: 'G', value: 100/7 },
    ],
  },
};

export const Eighths: Story = {
  args: {
    values: [
      { label: 'A', value: 100/8 },
      { label: 'B', value: 100/8 },
      { label: 'C', value: 100/8 },
      { label: 'D', value: 100/8 },
      { label: 'E', value: 100/8 },
      { label: 'F', value: 100/8 },
      { label: 'G', value: 100/8 },
      { label: 'H', value: 100/8 },
    ],
  },
};

export const NormalisationOf3Halfs: Story = {
  args: {
    values: [
      { label: 'A', value: 50 },
      { label: 'B', value: 50 },
      { label: 'C', value: 50 },
    ],
  },
};

// from https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RX1.json
export const RealData1: Story = {
  args: {
    values: [
      { label: "Stock", value: 55.82681 },
      { label: "Bond", value: 35.29226 },
      { label: "Cash", value: 8.6057 },
      { label: "Other", value: 1.48948 },
      { label: "Property", value: 0 }
    ],
  },
};

// from https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json
export const RealData2: Story = {
  args: {
    values: [
      { label: 'Stock', value: 25.53738 },
      { label: 'Bond', value: 54.25369 },
      { label: 'Cash', value: 19.69435 },
      { label: 'Other', value: 1.00772 },
      { label: 'Property', value: 0 },
    ],
  },
};

