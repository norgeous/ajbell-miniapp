import { FaStar, FaRegStar } from 'react-icons/fa6';
import { Wrapper } from './styled';

interface IStarRating {
  value: number;
  max?: number;
}

const StarRating = ({ value, max = 5 }: IStarRating) => {
  // todo: normalise value and max, it has some strange behaviour currently
  return (
    <Wrapper title={`${value} out of ${max} stars`}>
      {Array.from({ length: value }, (_, i) => (
        <FaStar key={i} />
      ))}
      {Array.from({ length: max - value }, (_, i) => (
        <FaRegStar key={i} />
      ))}
    </Wrapper>
  );
};

export default StarRating;
