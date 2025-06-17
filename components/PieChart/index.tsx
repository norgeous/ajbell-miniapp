import { FaStar, FaRegStar } from 'react-icons/fa6';

interface IPieChart {
  value: number;
  max?: number;
}

const PieChart = ({ value, max = 5 }:IPieChart) => {
  return (
    <div>
      {Array.from({ length: value }, (_, i) => <FaStar key={i} />)}
      {Array.from({ length: max - value }, (_, i) => <FaRegStar key={i} />)}
    </div>
  );
};

export default PieChart;
