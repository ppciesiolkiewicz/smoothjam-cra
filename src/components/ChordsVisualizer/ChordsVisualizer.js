import React from 'react';
import { useSelector } from 'react-redux';
import { selectProgressionChords } from '@features/progression/progression.slice';
import { Grid } from '@material-ui/core';

import Chord from '@components/Chord';

function ChordVisualizer() {
    const progressionChords = useSelector(selectProgressionChords);

    return (
        <Grid container spacing={1}>
            {progressionChords.map(({ chord }, i) => (
                <Grid key={i} item xs={6} sm={3} md={2}>
                    <Chord chord={chord} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ChordVisualizer;
