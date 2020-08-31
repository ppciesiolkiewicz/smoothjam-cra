import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBpm } from '@redux/actions';
import { selectBpm } from '@redux/selectors';
import { Box, Slider, InputLabel } from '@material-ui/core';

function BpmController() {
    const dispatch = useDispatch();
    const handleBpmChange = (_, value) => dispatch(setBpm(value));
    const bpm = useSelector(selectBpm);

    return (
        <Box>
            <InputLabel id="bpm-slider-label">BPM</InputLabel>
            <Slider
                value={bpm}
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
