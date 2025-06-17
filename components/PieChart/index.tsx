import adaptPieValues from './adapter';
import { demo, PieValues } from './demo-data';
import PieSlice from './PieSlice';
import { Svg, Table, Tr, Td, LegendColor } from './styled';

interface IPieChart {
  values: PieValues[];
}

const PieChart = ({ values = demo }: IPieChart) => {
  const adpatedValues = adaptPieValues(values);
  return (
    <>
      <Svg width="100" height="100" viewBox="0 0 100 100">
        {adpatedValues.map(({ label, normalisedValue, offsetDeg }, index) => (
          <PieSlice
            key={label}
            index={index}
            value={normalisedValue}
            offsetDeg={offsetDeg}
          />
        ))}
      </Svg>
      <Table>
        {adpatedValues.map(({ label, value }, index) => (
          <Tr key={label}>
            <Td>
              <LegendColor index={index} />
              <div>{label}</div>
            </Td>
            <Td align="right">{value.toFixed(2)}%</Td>
          </Tr>
        ))}
      </Table>
    </>
  );
};

export default PieChart;
