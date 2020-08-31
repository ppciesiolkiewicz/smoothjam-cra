import {
    TOGGLE_START_METRONOME,
    SET_CURRENT_BEAT,
    SET_BPM,
    SET_KEY,
    SET_KEY_MODE,
    SET_PROGRESSION_INDEX,
} from './actionTypes';

export const toggleStartMetronome = () => ({
    type: TOGGLE_START_METRONOME,
});

export const setCurrentBeat = currentBeat => ({
    type: SET_CURRENT_BEAT,
    payload: currentBeat,
});

export const setBpm = bpm => ({
    type: SET_BPM,
    payload: bpm,
});

export const setKey = key => ({
    type: SET_KEY,
    payload: key,
});

export const setKeyMode = keyMode => ({
    type: SET_KEY_MODE,
    payload: keyMode,
});

export const setProgressionIndex = progressionIndex => ({
    type: SET_PROGRESSION_INDEX,
    payload: progressionIndex,
});
