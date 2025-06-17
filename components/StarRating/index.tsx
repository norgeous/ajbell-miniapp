import { FaStar, FaRegStar } from 'react-icons/fa6';

interface IStarRating {
  value: number;
  max?: number;
}

const StarRating = ({ value, max = 5 }: IStarRating) => {
  return (
    <div>
      {Array.from({ length: value }, (_, i) => (
        <FaStar key={i} />
      ))}
      {Array.from({ length: max - value }, (_, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
};

export default StarRating;
