import { Wrap, Piece } from "./styled";

interface IGradientRating {
  value: number;
  max?: number;
}

const GradientRating = ({ value, max = 10 }: IGradientRating) => {
  return (
    <Wrap>
      {Array.from({ length: max }, (_, k) => (
        <Piece key={k} index={k} max={max} selected={value === k + 1} />
      ))}
    </Wrap>
  );
};

export default GradientRating;
