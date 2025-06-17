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

// these demo numbers add up to 101.21425 ????

interface IPieSlice {
  value: number; // size in percent of slice
  offset: number; // total of previous percents, used for rotational offset
}

const percentToDeg = (percent:number) => (percent / 100) * 360;

const PieSlice = ({ value, offset }:IPieSlice) => (
  <circle
    r="25"
    cx="50"
    cy="50"
    fill="transparent"
    transform={`rotate(${-90 + percentToDeg(offset)} 50 50)`}
    stroke="rgba(255,0,255,0.25)"
    stroke-width="50"
    stroke-dasharray={`${((value * circumference) / 100)} ${circumference}`}
  />
);

type PieValues = {
  label: string;
  value: number;
}

const adapt = (values:PieValues[]) => {
  const {
    valuesWithOffsets,
  } = values.reduce((acc, item) => {
    const totalOffset = acc.totalOffset + item.value;
    return ({
      totalOffset: totalOffset,
      valuesWithOffsets: [
        ...acc.valuesWithOffsets,
        {
          ...item,
          offset: acc.totalOffset,
        },
      ],
    });
  }, {
    totalOffset: 0,
    valuesWithOffsets: [],
  });

  return valuesWithOffsets;
}

interface IPieChart {
  values: PieValues[];
}

const PieChart = ({ values = demo }:IPieChart) => {
  const valuesWithOffsets = adapt(values);

  return (
    <svg width="100" height="100">
      <circle r="50" cx="50" cy="50" fill="lightgrey" />
      {valuesWithOffsets.map(({ label, value, offset }) => (
        <PieSlice key={label} value={value} offset={offset} />
      ))}
    </svg>
  );
};

export default PieChart;
