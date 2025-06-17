'use client';

import styled from 'styled-components';

const GlassCard = styled.div`
  display: grid;
  gap: 1lh;

  padding: 21px;

  --border-1: hsl(259, 13%, 28%); /* top */
  --border-2: hsl(252, 9%, 22%); /* bottom */
  --border-width: 1px;
  border-radius: 1rem;
  position: relative;

  background: hsl(from hsl(243, 26%, 15%) h s l / 0.25);
  backdrop-filter: blur(24px);

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: inherit;
    border: var(--border-width) solid transparent;
    background: linear-gradient(var(--border-1), var(--border-2)) border-box;
    mask:
      linear-gradient(black, black) border-box,
      linear-gradient(black, black) padding-box;
    mask-composite: subtract;
  }
`;

export default GlassCard;
