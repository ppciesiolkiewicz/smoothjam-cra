import { TOGGLE_START_METRONOME, SET_BEAT_NUMBER, CHANGE_BPM } from './actionTypes';

export const toggleStartMetronome = () => ({
  type: TOGGLE_START_METRONOME,
});

export const setBeatNumber = beatNumber => ({
    type: SET_BEAT_NUMBER,
    payload: beatNumber
});
  
export const setBpm = bpm => ({
    type: CHANGE_BPM,
    payload: bpm
});
  