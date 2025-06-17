import adaptPieValues from './adapter';
import { demo, PieValues } from './demo-data';
import PieSlice from './PieSlice';
import { Svg } from './styled';

interface IPieChart {
  values: PieValues[];
}

const PieChart = ({ values = demo }:IPieChart) => (
  <Svg width="100" height="100" viewBox="0 0 100 100">
    {adaptPieValues(values).map(({ label, normalisedValue, offsetDeg }, index) => (
      <PieSlice key={label} index={index} value={normalisedValue} offsetDeg={offsetDeg} />
    ))}
  </Svg>
);

export default PieChart;
