import {
    TOGGLE_START_METRONOME,
    SET_BEAT_NUMBER,
    SET_BPM,
    SET_KEY,
    SET_PROGRESSION_TYPE,
    SET_PROGRESSION_INDEX,
} from './actionTypes';

export const toggleStartMetronome = () => ({
    type: TOGGLE_START_METRONOME,
});

export const setBeatNumber = beatNumber => ({
    type: SET_BEAT_NUMBER,
    payload: beatNumber,
});

export const setBpm = bpm => ({
    type: SET_BPM,
    payload: bpm,
});

export const setKey = key => ({
    type: SET_KEY,
    payload: key,
});

export const setProgressionType = progressionType => ({
    type: SET_PROGRESSION_TYPE,
    payload: progressionType,
});

export const setProgressionIndex = progressionIndex => ({
    type: SET_PROGRESSION_INDEX,
    payload: progressionIndex,
});
