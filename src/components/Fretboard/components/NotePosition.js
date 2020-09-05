import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getStringYPosition, getFretXPosition } from '../utils';
import { areNotesEqual } from '@utils/progression';

const Circle = styled.circle`
    ${({ isHighlighted, highlightColor, theme: { note } }) => {
        const fill = isHighlighted && note?.[highlightColor]?.fill ? note[highlightColor].fill : note.primary.fill;
        const stroke =
            isHighlighted && note?.[highlightColor]?.stroke ? note[highlightColor].stroke : note.primary.stroke;

        return `
            fill: ${fill};
            stroke: ${stroke};
        `;
    }}
`;

const Text = styled.text`
    pointer-events: none;
`;

function NotePosition({
    selectedNotes,
    highlightedNotes,
    stringNo,
    fretNo,
    fretCount,
    stringCount,
    note,
    onPointerEnter,
    onPointerLeave,
    onPointerUp,
    onPointerDown,
}) {
    const y = getStringYPosition(stringCount, stringNo);
    const x = (getFretXPosition(fretCount, fretNo) + getFretXPosition(fretCount, fretNo + 1)) / 2;

    if (selectedNotes?.length && !selectedNotes.find(sn => areNotesEqual(sn, note))) {
        return null;
    }

    const highlight = highlightedNotes?.length && highlightedNotes.find(hn => areNotesEqual(hn.note, note));

    return (
        <g>
            <Circle
                onPointerEnter={() => onPointerEnter(note)}
                onPointerLeave={() => onPointerLeave(note)}
                onPointerUp={() => onPointerUp(note)}
                onPointerDown={() => onPointerDown(note)}
                isHighlighted={highlight}
                highlightColor={highlight?.highlightColor}
                cx={`${x}%`}
                cy={`${y}%`}
                r="20"
            ></Circle>
            <Text x={`${x}%`} y={`${y}%`} textAnchor="middle" strokeWidth="0.5" fontSize="10" dy=".3em">
                {note.name}
            </Text>
        </g>
    );
}

NotePosition.propTypes = {
    highlightedNotes: PropTypes.arrayOf(
        PropTypes.oneOfType(PropTypes.shape({ note: PropTypes.object.isRequired, highlightColor: PropTypes.string }))
    ).isRequired,
    onPointerEnter: PropTypes.func.isRequired,
    onPointerLeave: PropTypes.func.isRequired,
    onPointerUp: PropTypes.func.isRequired,
    onPointerDown: PropTypes.func.isRequired,
};

NotePosition.defaultProps = {
    onPointerEnter: () => {},
    onPointerLeave: () => {},
    onPointerUp: () => {},
    onPointerDown: () => {},
};

export default NotePosition;