import { desktopUp } from '@/helpers/breakpoint';
import styled, { css } from 'styled-components';

const PageContainer = styled.main`
  max-width: 500px;
  margin: 0 auto;
  ${desktopUp(css`
    background: pink;
  `)}
`;

export default PageContainer;
