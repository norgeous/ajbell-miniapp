const circumference = (Math.PI * 2) * 25;

const demo = [
  {
    "label": "Stock",
    "value": 55.82681
  },
  {
    "label": "Bond",
    "value": 35.29226
  },
  {
    "label": "Cash",
    "value": 8.6057
  },
  {
    "label": "Other",
    "value": 1.48948
  },
  {
    "label": "Property",
    "value": 0
  }
];


interface IPieSlice {
  value: number; // size in percent of slice
  offsetDeg: number; // degrees of rotation of this slice
}


const PieSlice = ({ value, offsetDeg }:IPieSlice) => (
  <circle
    r="25"
    cx="50"
    cy="50"
    fill="transparent"
    transform={`rotate(${-90 + offsetDeg} 50 50)`}
    stroke={`rgb(${(offsetDeg / 360) * 255}, 0, 255)`}
    strokeWidth="50"
    strokeDasharray={`${((value * circumference) / 100)} ${circumference}`}
  />
);

type PieValues = {
  label: string;
  value: number;
}


const percentToDeg = (percent:number) => (percent / 100) * 360;

const adapt = (values:PieValues[]) => {
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
}

interface IPieChart {
  values: PieValues[];
}

const PieChart = ({ values = demo }:IPieChart) => (
  <svg width="100" height="100">
    <circle r="50" cx="50" cy="50" fill="lightgrey" />
    {adapt(values).map(({ label, value, offsetDeg }) => (
      <PieSlice key={label} value={value} offsetDeg={offsetDeg} />
    ))}
  </svg>
);

export default PieChart;
