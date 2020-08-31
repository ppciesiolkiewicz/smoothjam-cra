import { createReducer } from '@reduxjs/toolkit';
import { SET_SELECTED_KEY_TONIC, SET_SELECTED_KEY_TYPE, SET_SELECTED_PROGRESSION_INDEX } from '../actionTypes';
import { createChordProgression, getKey } from '../../utils/progression';

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
            numerals: ['I', 'IIIm', 'VIm', 'IIm', 'V'],
            name: 'I-IIIm-VIm-IIm-V',
        },
    ],
};
const availableKeyTonics = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
const availableKeyModes = ['major', 'minor'];

const initialProgressionIndex = 0;
const initialKeyTonic = 'C';
const initialKeyType = 'major';

const initialState = {
    availableKeyTonics,
    availableProgressions,
    availableKeyModes,

    selectedProgressionIndex: initialProgressionIndex,
    selectedKeyTonic: initialKeyTonic,
    selectedKeyType: initialKeyType,
    progressionChords: createChordProgression(
        initialKeyTonic,
        availableProgressions[initialKeyType][initialProgressionIndex].numerals
    ),
    key: getKey(initialKeyTonic, initialKeyType),
};

export default createReducer(initialState, {
    [SET_SELECTED_KEY_TONIC]: (state, action) => {
        state.selectedKeyTonic = action.payload;
        state.key = getKey(state.selectedKeyTonic, state.selectedKeyType);
        state.progressionChords = createChordProgression(
            state.selectedKeyTonic,
            availableProgressions[state.selectedKeyType][state.selectedProgressionIndex].numerals
        );
    },
    [SET_SELECTED_KEY_TYPE]: (state, action) => {
        state.selectedKeyType = action.payload;
        state.selectedProgressionIndex = 0;
        state.key = getKey(state.selectedKeyTonic, state.selectedKeyType);
        state.progressionChords = createChordProgression(
            state.selectedKeyTonic,
            availableProgressions[state.selectedKeyType][state.selectedProgressionIndex].numerals
        );
    },
    [SET_SELECTED_PROGRESSION_INDEX]: (state, action) => {
        state.selectedProgressionIndex = action.payload;
        state.progressionChords = createChordProgression(
            state.selectedKeyTonic,
            availableProgressions[state.selectedKeyType][state.selectedProgressionIndex].numerals
        );
    },
});
