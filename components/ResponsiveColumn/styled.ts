'use client';

import styled, { css } from 'styled-components';
import { desktopUp } from '@/helpers/breakpoint';

export const ResponsiveColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  & > * {
    width: 100%;
  }
  ${desktopUp(css`
    flex-direction: row;
  `)}
`;
