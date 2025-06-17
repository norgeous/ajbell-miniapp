import formatPercent from '@/helpers/formatPercent';
import DataTable from '@/components/Table';
import adaptPieValues from './adapter';
import PieSlice from './PieSlice';
import { Wrapper, Svg, LegendColor } from './styled';

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
    <Wrapper>
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
          value: formatPercent(value),
        }))}
      />
    </Wrapper>
  );
};

export default PieChart;
