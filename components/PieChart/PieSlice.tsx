const circumference = (Math.PI * 2) * 25;

interface IPieSlice {
  index: number; // used to choose colour
  value: number; // size in percent of slice
  offsetDeg: number; // degrees of rotation of this slice
}

const sliceColors = [
  'oklch(.66 .15 0)',
  'oklch(.66 .15 90)',
  'oklch(.66 .15 180)',
  'oklch(.66 .15 270)',

  'oklch(.66 .15 45)',
  'oklch(.66 .15 135)',
  'oklch(.66 .15 225)',
  'oklch(.66 .15 315)',
];

const PieSlice = ({ index, value, offsetDeg }:IPieSlice) => (
  <circle
    r="25"
    cx="50"
    cy="50"
    fill="transparent"
    transform={`rotate(${-90 + offsetDeg} 50 50)`}
    stroke={sliceColors[index] || 'red'}
    strokeWidth="50"
    strokeDasharray={`${((value * circumference) / 100)} ${circumference}`}
  />
);

export default PieSlice;
