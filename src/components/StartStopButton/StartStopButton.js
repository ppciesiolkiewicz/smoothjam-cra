import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStartMetronome } from '@redux/actions';
import { selectIsPlaying } from '@redux/selectors';
import { Fab } from '@material-ui/core';
import { PlayArrow, Stop } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    secondary: {
        backgroundColor: theme.palette.error.main,
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
        },
    },
    primary: {
        backgroundColor: theme.palette.success.main,
        '&:hover': {
            backgroundColor: theme.palette.success.dark,
        },
    },
}));

function StartStopButton() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const toggleStart = () => dispatch(toggleStartMetronome());
    const isPlaying = useSelector(selectIsPlaying);

    console.log(classes)

    return isPlaying ? (
        <Fab aria-label="stop" size="large" onClick={toggleStart} color="secondary" classes={classes}>
            <Stop />
        </Fab>
    ) : (
        <Fab aria-label="start" size="large" onClick={toggleStart} color="primary" classes={classes}>
            <PlayArrow />
        </Fab>
    );
}

export default StartStopButton;
