import React from 'react';
import styled from 'styled-components';
import { getStringYPosition, getFretXPosition } from '../utils';

const Line = styled.line`
    ${({ theme: { stringColor } }) => `stroke: ${stringColor};`}
`;

function String({ stringCount, fretCount, stringNo, reversed }) {
    const yPos = getStringYPosition(stringCount, stringNo);
    const xPos = getFretXPosition(fretCount, 1);
    const strokeWidth = reversed ? 0.5 * (stringNo + 1) : 0.5 * (stringCount - stringNo + 1);
    const y = `calc(${yPos}% ${reversed ? '-' : '+'} ${Math.floor(strokeWidth / 2)}px)`;
    const x = `${xPos}%`;
    return <Line x1={x} x2="100%" y1={y} y2={y} strokeWidth={strokeWidth} />;
}

export default String;
