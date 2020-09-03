import React from 'react';
import styled from 'styled-components';
import { getFretXPosition } from '../utils';

const Rect = styled.rect`
    ${({ theme: { fretColor } }) => `
        stroke: ${fretColor};
        fill: ${fretColor};
    `}
`;

function Fret({ fretCount, fretNo }) {
    const xPos = getFretXPosition(fretCount, fretNo);
    const x = `${xPos}%`;

    if (fretNo === 0) {
        return null;
    }

    if (fretNo === 1) {
        return <Rect x={`calc(${x} - 15px)`} y="0" width="15" height="100%" />;
    }

    return <Rect x={x} y="0" width="0.5" height="100%" />;
}

export default Fret;
