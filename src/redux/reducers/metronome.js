import { TOGGLE_START_METRONOME, SET_BEAT_NUMBER, CHANGE_BPM } from '../actionTypes';

const initialState = {
    isPlaying: false,
    beatNumber: -1,
    bpm: 100,
};
  
export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_START_METRONOME:
            return {
                ...state,
                isPlaying: !state.isPlaying,
            };
        case SET_BEAT_NUMBER:
            return {
                ...state,
                beatNumber: action.payload,
            };
        case CHANGE_BPM:
            return {
                ...state,
                bpm: action.payload,
            };
    }

    return state;
};
