import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Chord from '@tombatossals/react-chords/lib/Chord';
import { guitarChords } from '../../constants/chords';
import { IconButton, Typography, Box } from '@material-ui/core';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

function Chords({ chordKey, suffix }) {
    const [selectedPositionIdx, setSelectedPositionIdx] = useState(0);

    console.log(guitarChords)
    if (!guitarChords.chords[chordKey]) {
        console.error('No chord for ', { chordKey, suffix });
        return null;
    }

    const chordPositions = guitarChords.chords[chordKey].find(c => c.suffix === suffix).positions;
    const chordPosition = chordPositions[selectedPositionIdx];

    const rotatePosition = position => {
        const chordPositionsCount = chordPositions.length;
        let newPosition = position % chordPositionsCount;
        newPosition = newPosition < 0 ? chordPositionsCount + newPosition : newPosition;
        return newPosition;
    };
    const nextPosition = () => {
        const newPosition = rotatePosition(selectedPositionIdx + 1);
        setSelectedPositionIdx(newPosition);
    };
    const prevPosition = () => {
        const newPosition = rotatePosition(selectedPositionIdx - 1);
        setSelectedPositionIdx(newPosition);
    };

    return (
        <Box>
            <Typography>
                {chordKey}
                {suffix}
            </Typography>
            <NavigationContainer>
                <IconButton size="small" onClick={prevPosition}>
                    <NavigateBefore />
                </IconButton>
                <Typography>
                    {selectedPositionIdx + 1}/{chordPositions.length}
                </Typography>
                <IconButton size="small" onClick={nextPosition}>
                    <NavigateNext />
                </IconButton>
            </NavigationContainer>
            <Chord
                chord={chordPosition}
                instrument={{
                    strings: 6,
                    fretsOnChord: 4,
                    name: 'Guitar',
                    keys: [],
                    tunings: {
                        standard: ['E', 'A', 'D', 'G', 'B', 'E'],
                    },
                }}
                lite={true}
            />
        </Box>
    );
}

Chords.propTypes = {
    chordKey: PropTypes.string,
    suffix: PropTypes.string,
};

export default Chords;
