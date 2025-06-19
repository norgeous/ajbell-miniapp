'use client';

import { desktopUp } from '@/helpers/breakpoint';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  ${desktopUp(css`
    flex-direction: row;
  `)}
`;

const sliceColors = [
  'oklch(.66 .15 0)',
  'oklch(.66 .15 90)',
  'oklch(.66 .15 180)',
  'oklch(.66 .15 270)',

  'oklch(.66 .15 45)',
  'oklch(.66 .15 135)',
  'oklch(.66 .15 225)',
  'oklch(.66 .15 315)',
];

export const Svg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`;

const circumference = Math.PI * 2 * 25;

export interface ISlice {
  index: number;
  value: number; // size in percent of slice
  offset: number; // degrees of rotation of this slice
}

export const Slice = styled.circle<ISlice>`
  fill: transparent;
  stroke: ${({ index }) => sliceColors[index] || 'red'};
  stroke-width: 50px;
  transform: ${({ offset }) => `rotate(${-90 + offset}deg)`};
  transform-origin: 50% 50%;
  stroke-dasharray: ${({ value }) =>
    `${(value * circumference) / 100} ${circumference}`};
`;

interface ILegendColor {
  index: number;
}

export const LegendColor = styled.div<ILegendColor>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${({ index }) => sliceColors[index] || 'red'};
`;
