import { createReducer } from '@reduxjs/toolkit';
import { SET_KEY, SET_PROGRESSION_INDEX, SET_KEY_MODE  } from '../actionTypes';
import { createChordProgression } from '../../utils/progression';

const availableProgressions = {
    major: [
        {
            numerals: ['I', 'IV', 'V'],
            name: 'I-IV-V',
        },
        {
            numerals: ['I', 'IIm', 'V'],
            name: 'I-IIm-V',
        },
        {
            numerals: ['I', 'VIm', 'IIm', 'V'],
            name: 'I-VIm-IIm-V',
        },
        {
            numerals: ['I', 'IIIm', 'VIm', 'IIm', 'V'],
            name: 'I-IIIm-VIm-IIm-V',
        },
    ],
    minor: [
        {
            numerals: ['I', 'IV', 'V'],
            name: 'I-IV-V',
        },
    ],
};
const availableKeys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'];
const availableKeyModes = ['major', 'minor'];

const initialProgressionIndex = 0;
const initialKey = 'C';
const initialKeyMode = 'major';

const initialState = {
    availableKeys,
    availableProgressions,
    availableKeyModes,
    progressionIndex: initialProgressionIndex,
    key: initialKey,
    keyMode: initialKeyMode,
    chords: createChordProgression(initialKey, availableProgressions[initialKeyMode][initialProgressionIndex].numerals),
};

export default createReducer(initialState, {
    [SET_KEY]: (state, action) => {
        state.key = action.payload;
        state.chords = createChordProgression(
            state.key,
            availableProgressions[state.keyMode][state.progressionIndex].numerals
        );
    },
    [SET_KEY_MODE]: (state, action) => {
        state.keyMode = action.payload;
        state.progressionIndex = 0;
        state.chords = createChordProgression(
            state.key,
            availableProgressions[state.keyMode][state.progressionIndex].numerals
        );
    },
    [SET_PROGRESSION_INDEX]: (state, action) => {
        state.progressionIndex = action.payload;
        state.chords = createChordProgression(
            state.key,
            availableProgressions[state.keyMode][state.progressionIndex].numerals
        );
    },
});
