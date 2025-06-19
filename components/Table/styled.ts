'use client';

import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  min-width: 100px;
`;

export const Tbody = styled.tbody`
  /* display: flex;
  flex-direction: column;
  gap: 0.5em; */
`;

export const Tr = styled.tr`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px; */
`;

export const Th = styled.th`
  text-align: left;
`;

export const Td = styled.td`
  max-width: 0;
  padding: 2px;
  &:first-child {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &:last-child {
    text-align: right;
  }
`;
