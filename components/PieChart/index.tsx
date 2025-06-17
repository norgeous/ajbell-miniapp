import adaptPieValues from './adapter';
import { demo, PieValues } from './demo-data';
import PieSlice from './PieSlice';
import { LegendColor, Svg } from './styled';

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
      <div>
        <table>
          {adpatedValues.map(({ label, value }, index) => (
            <tr key={label}>
              <td>
                <LegendColor index={index} />
              </td>
              <td>{label}</td>
              <td>{value}%</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default PieChart;
