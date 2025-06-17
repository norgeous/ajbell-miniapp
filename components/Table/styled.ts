'use client';

import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  /* max-width: 250px; */
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Tr = styled.table`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

export const Td = styled.table`
  display: flex;
  align-items: center;
  gap: 4px;
`;
