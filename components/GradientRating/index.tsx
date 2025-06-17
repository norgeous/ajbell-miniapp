'use client';

import styled, { css } from 'styled-components';

const Wrap = styled.div`
  display: flex;
  gap: 2px;
  min-width: 200px;
`;

const Piece = styled.span`
  width: 100%;
  height: 20px;
  background-image: linear-gradient(to right, green, orange, red);
  background-size: ${({ max }) => max * 100}%;
  background-position: ${({ index, max }) => (100 / max) * index}%;
  ${({ selected }) => selected && css`
    background: lightblue;
  `}
`;

const GradientRating = ({ max = 10, value }) => {
  return (
    <Wrap>
      {Array.from({ length: max }, (_, k) => (
        <Piece key={k} index={k} max={max} selected={value === k+1}/>
      ))}
    </Wrap>
  );
};

export default GradientRating;
