import { createReducer } from '@reduxjs/toolkit';
import { TOGGLE_START_METRONOME, SET_CURRENT_BEAT, SET_BPM } from '../actionTypes';

const initialState = {
    isPlaying: false,
    currentBeat: -1,
    bpm: 100,
};

export default createReducer(initialState, {
    [TOGGLE_START_METRONOME]: state => {
        state.isPlaying = !state.isPlaying;
    },
    [SET_CURRENT_BEAT]: (state, action) => {
        state.currentBeat = action.payload;
    },
    [SET_BPM]: (state, action) => {
        state.bpm = action.payload;
    },
});
