'use client';

import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  min-width: 100px;
`;

export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;

// todo text overflow
export const Td = styled.td`
  display: flex;
  align-items: center;
  gap: 4px;
`;
