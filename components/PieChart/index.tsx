interface IPieChart {
  value: number;
}

const circumference = (Math.PI * 2) * 25;

const PieChart = ({ value }:IPieChart) => {
  return (
    <svg width="100" height="100">
      <circle r="50" cx="50" cy="50" fill="lightgrey" />
      <circle
        r="25"
        cx="50"
        cy="50"
        fill="transparent"
        transform="rotate(-90 50 50)"
        stroke="tomato"
        stroke-width="50"
        stroke-dasharray={`${((value * circumference) / 100)} ${circumference}`}
      />
    </svg>
  );
};

export default PieChart;
