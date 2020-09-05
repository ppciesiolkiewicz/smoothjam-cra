import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBpm } from '@features/metronome/metronome.slice';
import { selectBpm } from '@features/metronome/metronome.slice';
import { Box, Slider, InputLabel } from '@material-ui/core';
import debounce from 'lodash.debounce';

const SET_BPM_DEBOUNCE_WAIT = 100;

function BpmController() {
    const dispatch = useDispatch();
    const bpm = useSelector(selectBpm);
    const [localBpm, setLocalBpm] = useState(bpm);
    const debouncedSetBpm = useCallback(debounce(bpm => dispatch(setBpm(bpm)), SET_BPM_DEBOUNCE_WAIT));
    const handleBpmChange = (_, value) => {
        setLocalBpm(value);
        debouncedSetBpm(value);
    };

    return (
        <Box>
            <InputLabel id="bpm-slider-label">BPM</InputLabel>
            <Slider
                value={localBpm}
                onChange={handleBpmChange}
                aria-labelledby="bpm-slider-label"
                valueLabelDisplay="auto"
                step={1}
                min={30}
                max={220}
            />
        </Box>
    );
}

export default BpmController;
