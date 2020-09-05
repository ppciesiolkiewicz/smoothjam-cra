import {
    TOGGLE_START_METRONOME,
    SET_CURRENT_BEAT,
    SET_BPM,
    SET_SELECTED_KEY_TONIC,
    SET_SELECTED_KEY_TYPE,
    SET_SELECTED_PROGRESSION_INDEX,
    SET_DETECTED_PITCH,
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

export const setSelectedKeyTonic = keyTonic => ({
    type: SET_SELECTED_KEY_TONIC,
    payload: keyTonic,
});

export const setSelectedKeyType = keyType => ({
    type: SET_SELECTED_KEY_TYPE,
    payload: keyType,
});

export const setSelectedProgressionIndex = selectedProgressionIndex => ({
    type: SET_SELECTED_PROGRESSION_INDEX,
    payload: selectedProgressionIndex,
});

export const setDetectedPitch = pitch => ({
    type: SET_DETECTED_PITCH,
    payload: pitch,
});
