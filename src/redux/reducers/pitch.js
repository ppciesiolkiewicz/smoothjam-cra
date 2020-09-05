import { createReducer } from '@reduxjs/toolkit';
import { Note } from '@tonaljs/tonal';
import { SET_DETECTED_PITCH } from '../actionTypes';

const initialState = {
    pitch: null,
    note: null,
};

export default createReducer(initialState, {
    [SET_DETECTED_PITCH]: (state, action) => {
        state.pitch = action.payload;
        state.note = Note.fromFreq(action.payload);
    },
});
