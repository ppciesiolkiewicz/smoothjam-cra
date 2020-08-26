import { TOGGLE_START_METRONOME, SET_BEAT_NUMBER, SET_BPM, SET_KEY, SET_PROGRESSION } from './actionTypes';

export const toggleStartMetronome = () => ({
  type: TOGGLE_START_METRONOME,
});

export const setBeatNumber = beatNumber => ({
    type: SET_BEAT_NUMBER,
    payload: beatNumber
});
  
export const setBpm = bpm => ({
    type: SET_BPM,
    payload: bpm
});
  
export const setKey = bpm => ({
    type: SET_KEY,
    payload: bpm
});

export const setProgression = bpm => ({
    type: SET_PROGRESSION,
    payload: bpm
});