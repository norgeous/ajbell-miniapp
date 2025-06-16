'use client';

import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  gap: 4px;
`;

const Piece = styled.div`
  width: 100%;
  background: pink;
  height: 40px;
`;

const GradientRating = ({ max = 10 }) => {
  return (
    <Wrap>
      {Array.from({ length: max },(_,k) => <Piece key={k} max={max} />)}
    </Wrap>
  );
};

export default GradientRating;
