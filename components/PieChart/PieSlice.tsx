const circumference = (Math.PI * 2) * 25;

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

export default PieSlice;
