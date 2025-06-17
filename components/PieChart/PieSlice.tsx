import { ISlice, Slice } from './styled';

const PieSlice = ({ index, value, offset }: ISlice) => (
  <Slice index={index} value={value} offset={offset} r="25" cx="50" cy="50" />
);

export default PieSlice;
