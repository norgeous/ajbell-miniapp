import { ISlice, Slice } from './styled';

const PieSlice = ({ index, value, offsetDeg }:ISlice) => (
  <Slice
    index={index}
    value={value}
    offsetDeg={offsetDeg}
    r="25"
    cx="50"
    cy="50"
  />
);

export default PieSlice;
