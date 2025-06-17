'use client';

import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  gap: 4px;
`;

const Piece = styled.span`
  width: 100%;
  height: 20px;
  background-image: linear-gradient(to right, green, orange, red);
  background-size: ${({ max }) => max * 100}%;
  background-position: ${({ index, max }) => (100 / max) * index}%;
  background: ;
`;

const GradientRating = ({ max = 10 }) => {
  return (
    <Wrap>
      {Array.from({ length: max }, (_, k) => (
        <Piece key={k} index={k} max={max} />
      ))}
    </Wrap>
  );
};

export default GradientRating;
