import { createReducer } from '@reduxjs/toolkit'
import { SET_KEY, SET_PROGRESSION } from '../actionTypes';
import { Progression } from "@tonaljs/tonal";


const createProgression = (key, progressionNumerals) => {
    return Progression.fromRomanNumerals(key, progressionNumerals).map(chord => ({
        chord,
        beats: 4,
    }));
}

const availableProgressions = {
    major: [
        {
            numerals: ['I', 'IV', 'V'],
            name: 'I-IV-V',
        },
        {
            numerals: ['I', 'IIm', 'V'],
        },
        {
            numerals: ['I', 'VIm', 'IIm', 'V'],
        },
        {
            numerals: ['I', 'IIIm', 'VIm', 'IIm', 'V'],
        },
    ],
};

const progression = availableProgressions.major[0];
const key = 'C';

const initialState = {
    availableProgressions,
    progression,
    key,
    chords: createProgression(key, progression.numerals),
};
  
export default createReducer(initialState, {
    [SET_KEY]: (state, action) => {
        state.key = action.payload;
        state.chords = createProgression(state.key, state.progression.numerals);
    },
    [SET_PROGRESSION]: (state, action) => {
        state.progression = action.payload;
        state.chords = createProgression(state.key, state.progression.numerals);
    },
});