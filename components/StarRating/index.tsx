import { FaStar, FaRegStar } from 'react-icons/fa6';

interface IStarRating {
    value: number;
    max?: number;
}

const StarRating = ({ value, max = 5 }:IStarRating) => {

  return (
    <div>
      {Array.from({ length: value }, i => <FaStar/>)}
      {Array.from({ length: max - value }, i => <FaRegStar/>)}
    </div>
  );
};

export default StarRating;
