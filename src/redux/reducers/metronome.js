import { createReducer } from '@reduxjs/toolkit'
import { TOGGLE_START_METRONOME, SET_BEAT_NUMBER, CHANGE_BPM } from '../actionTypes';

const initialState = {
    isPlaying: false,
    beatNumber: -1,
    bpm: 100,
};
  
export default createReducer(initialState, {
    [TOGGLE_START_METRONOME]: state => {
        state.isPlaying = !state.isPlaying;
    },
    [SET_BEAT_NUMBER]: (state, action) => {
        state.beatNumber = action.payload
    },
    [CHANGE_BPM]: (state, action) => {
        state.bpm = action.payload;
    },
});