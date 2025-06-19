'use client';

import { desktopUp } from '@/helpers/breakpoint';
import styled, { css } from 'styled-components';

export const Table = styled.table`
  width: 100%;
  min-width: 100px;
`;

export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  gap: 1em;

  ${desktopUp(css`
    display: table-row-group;
  `)}
`;

export const Tr = styled.tr<{ $isHeadingsRow?: boolean; headings?: string[] }>`
  display: flex;
  flex-direction: column;

  & > td:first-child {
    &:before {
      ${({ headings }) => css`
        content: '${headings?.[0]}';
        font-weight: bold;
        display: block;
      `}
    }
  }

  & > td:last-child {
    &:before {
      ${({ headings }) => css`
        content: '${headings?.[1]}';
        font-weight: bold;
        display: block;
      `}
    }
  }

  ${({ $isHeadingsRow }) =>
    $isHeadingsRow &&
    css`
      display: none;
    `}

  ${desktopUp(css`
    display: table-row;

    & > th:first-child {
      text-align: left;
    }

    & > th:last-child {
      text-align: right;
    }

    & > td:first-child {
      &:before {
        content: none;
      }
    }

    & > td:last-child {
      text-align: right;
      &:before {
        content: none;
      }
    }
  `)}
`;

export const Th = styled.th`
  padding: 0.25em;
`;

export const Td = styled.td`
  padding: 0.25em;
`;
