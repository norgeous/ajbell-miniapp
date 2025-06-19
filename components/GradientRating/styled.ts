'use client';

import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 1em;
`;

interface IPiece {
  index: number;
  max: number;
  selected: boolean;
}

export const Piece = styled.span<IPiece>`
  width: 100%;
  height: 20px;
  background-image: linear-gradient(to right, green, orange, red);
  background-size: ${({ max }) => max * 100}%;
  background-position: ${({ index, max }) => (100 / max) * index}%;
  ${({ selected }) =>
    selected &&
    css`
      background: lightblue;
    `}
`;
