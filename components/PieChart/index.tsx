import adaptPieValues from './adapter';
import PieSlice from './PieSlice';
import { Svg, LegendColor } from './styled';
import DataTable from '@/components/Table';

export type PieValues = {
  label: string;
  value: number;
};

interface IPieChart {
  values: PieValues[];
}

const PieChart = ({ values }: IPieChart) => {
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
      <DataTable
        data={values.map(({ label, value }, index) => ({
          label: (
            <>
              <LegendColor index={index} />
              {label}
            </>
          ),
          value: `${value.toFixed(2)}%`,
        }))}
      />
    </>
  );
};

export default PieChart;
