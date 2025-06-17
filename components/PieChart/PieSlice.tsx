const circumference = (Math.PI * 2) * 25;

interface IPieSlice {
  index: number; // used to choose colour
  value: number; // size in percent of slice
  offsetDeg: number; // degrees of rotation of this slice
}

const sliceColors = [
  'red',
  'green',
  'blue',
  'cyan',
  'magenta',
  'yellow',
];

const PieSlice = ({ index, value, offsetDeg }:IPieSlice) => (
  <circle
    r="25"
    cx="50"
    cy="50"
    fill="transparent"
    transform={`rotate(${-90 + offsetDeg} 50 50)`}
    stroke={sliceColors[index % sliceColors.length]}
    strokeWidth="50"
    strokeDasharray={`${((value * circumference) / 100)} ${circumference}`}
  />
);

export default PieSlice;
