import { createReducer } from '@reduxjs/toolkit'
import { SET_KEY, SET_PROGRESSION_TYPE, SET_PROGRESSION_INDEX, } from '../actionTypes';
import { Progression } from "@tonaljs/tonal";


const createProgression = (key, progressionNumerals) => {
    return Progression.fromRomanNumerals(key, progressionNumerals).map(chord => ({
        chord,
        beats: 4,
    }));
};

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
    ]
};
const availableKeys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C'];
const initialProgressionType = 'major';
const initialProgressionIndex = 0;
const initialKey = 'C';

const initialState = {
    availableKeys,
    availableProgressions,
    progressionType: initialProgressionType,
    progressionIndex: initialProgressionIndex,
    key: initialKey,
    chords: createProgression(initialKey, availableProgressions[initialProgressionType][initialProgressionIndex].numerals),
};
  
export default createReducer(initialState, {
    [SET_KEY]: (state, action) => {
        state.key = action.payload;
        state.chords = createProgression(state.key, availableProgressions[state.progressionType][state.progressionIndex].numerals);
    },
    [SET_PROGRESSION_TYPE]: (state, action) => {
        state.progressionType = action.payload;
        state.progressionIndex = 0;
        state.chords = createProgression(state.key, availableProgressions[state.progressionType][state.progressionIndex].numerals);
    },
    [SET_PROGRESSION_INDEX]: (state, action) => {
        state.progressionIndex = action.payload;
        state.chords = createProgression(state.key, availableProgressions[state.progressionType][state.progressionIndex].numerals);
    },
});