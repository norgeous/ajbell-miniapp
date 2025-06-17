import adaptPieValues from './adapter';
import { demo, PieValues } from './demo-data';
import PieSlice from './PieSlice';

interface IPieChart {
  values: PieValues[];
}

const PieChart = ({ values = demo }:IPieChart) => (
  <svg width="100" height="100">
    {adaptPieValues(values).map(({ label, value, offsetDeg }) => (
      <PieSlice key={label} value={value} offsetDeg={offsetDeg} />
    ))}
  </svg>
);

export default PieChart;
