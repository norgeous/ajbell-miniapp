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
    values: [{label:'one',value:100}],
  },
};

export const Halfs: Story = {
  args: {
    values: [{label:'one',value:50},{label:'two',value:50}],
  },
};

export const Thirds: Story = {
  args: {
    values: [{label:'one',value:33.33333},{label:'two',value:33.33333},{label:'thr',value:33.33333}],
  },
};

export const Quarters: Story = {
  args: {
    values: [{label:'one',value:25},{label:'two',value:25},{label:'thr',value:25},{label:'fou',value:25}],
  },
};

export const Fifths: Story = {
  args: {
    values: [{label:'one',value:20},{label:'two',value:20},{label:'thr',value:20},{label:'fou',value:20},{label:'fiv',value:20}],
  },
};

export const Sixths: Story = {
  args: {
    values: [{label:'one',value:100/6},{label:'two',value:100/6},{label:'thr',value:100/6},{label:'fou',value:100/6},{label:'fiv',value:100/6},{label:'six',value:100/6}],
  },
};

export const Sevenths: Story = {
  args: {
    values: [{label:'one',value:100/7},{label:'two',value:100/7},{label:'thr',value:100/7},{label:'fou',value:100/7},{label:'fiv',value:100/7},{label:'six',value:100/7},{label:'sev',value:100/7}],
  },
};

export const Eighths: Story = {
  args: {
    values: [{label:'one',value:100/8},{label:'two',value:100/8},{label:'thr',value:100/8},{label:'fou',value:100/8},{label:'fiv',value:100/8},{label:'six',value:100/8},{label:'sev',value:100/8},{label:'eig',value:100/8}],
  },
};

export const Normalisation: Story = {
  args: {
    values: [{label:'one',value:50},{label:'two',value:50},{label:'thr',value:50}],
  },
};
