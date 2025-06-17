import { PieValues } from './demo-data';

const percentToDeg = (percent:number) => (percent / 100) * 360;

const adaptPieValues = (values:PieValues[]) => {
  // calculate normalisation scale factor, so in the case when all values don't total up to 100, we can normalise the values
  const total = values.reduce((acc,{ value }) => acc + value, 0);
  const normalisationMultiplier = 100 / total;

  // calculate offsets and apply normalisationMultiplier
  const newValues = values.map((item, index) => {
    const total = values.slice(0,index).reduce((acc,{ value }) => acc + value, 0) * normalisationMultiplier;

    console.log({index, total})
    const normalisedValue = item.value * normalisationMultiplier;
    return {
      ...item,
      normalisedValue,
      offsetDeg: percentToDeg(total),
    };
  });

  return newValues;
};

export default adaptPieValues;