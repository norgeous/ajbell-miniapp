'use client';

import styled from 'styled-components';

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
  max-width: 250px;
`;

const circumference = Math.PI * 2 * 25;

export interface ISlice {
  index: number;
  value: number; // size in percent of slice
  offsetDeg: number; // degrees of rotation of this slice
}

export const Slice = styled.circle<ISlice>`
  fill: transparent;
  stroke: ${({ index }) => sliceColors[index] || 'red'};
  stroke-width: 50px;
  transform: ${({ offsetDeg }) => `rotate(${-90 + offsetDeg}deg)`};
  transform-origin: 50% 50%;
  stroke-dasharray: ${({ value }) =>
    `${(value * circumference) / 100} ${circumference}`};
`;

interface ILegendColor {
  index: number;
}

export const LegendColor = styled.div<ILegendColor>`
  width: 18px;
  height: 18px;
  background: ${({ index }) => sliceColors[index] || 'red'};
`;
