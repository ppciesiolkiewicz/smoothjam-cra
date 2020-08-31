import React from 'react';
import { useSelector } from 'react-redux';
import { selectProgressionChords } from '../../redux/selectors';
import { Grid } from '@material-ui/core';

import Chord from '../Chord';

function ChordVisualizer() {
    const progressionChords = useSelector(selectProgressionChords);

    return (
        <Grid container spacing={1}>
            {progressionChords.map(({ chord }, i) => {
                const sharp = chord.slice(1, 2) === '#' ? 'Sharp' : '';
                const chordKey = `${chord.slice(0, 1)}${sharp}`;
                const suffix = chord.slice(-1) === 'm' ? 'minor' : 'major';

                return (
                    <Grid key={i} item xs={6} sm={3} md={2}>
                        <Chord chordKey={chordKey} suffix={suffix} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default ChordVisualizer;
