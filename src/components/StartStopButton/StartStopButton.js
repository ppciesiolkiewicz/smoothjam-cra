import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStartMetronome } from '@redux/actions';
import { selectIsPlaying } from '@redux/selectors';
import { Button } from '@material-ui/core';

function StartStopButton() {
    const dispatch = useDispatch();
    const toggleStart = () => dispatch(toggleStartMetronome());
    const isPlaying = useSelector(selectIsPlaying);

    return (
        <Button variant="contained" color="primary" onClick={toggleStart}>
            {isPlaying ? 'Stop' : 'Start'}
        </Button>
    );
}

export default StartStopButton;
