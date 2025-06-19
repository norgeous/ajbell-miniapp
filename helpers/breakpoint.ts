import { css, RuleSet } from 'styled-components';

export const desktopUp = (rules: RuleSet) => css`
  @media (min-width: 768px) {
    ${rules}
  }
`;
