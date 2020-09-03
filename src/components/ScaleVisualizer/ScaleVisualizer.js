import React from 'react';
import { useSelector } from 'react-redux';
import { selectScale } from '@redux/selectors';
// import Fretboard, { chordNotes, intervalNotes, scaleNotes } from 'react-fretboard';
import Fretboard from '@components/Fretboard';

function ScaleVisualizer() {
    const scale = useSelector(selectScale);
    return (
        <Fretboard
            selectedNotes={scale.notes}
            highlightedNotes={[{ note: scale.tonic, highlightColor: 'highlight1' }]}
        />
    );
}

export default ScaleVisualizer;
