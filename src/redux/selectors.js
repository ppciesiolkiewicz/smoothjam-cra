export const selectIsPlaying = state => state.metronome.isPlaying;
export const selectBpm = state => state.metronome.bpm;
export const selectCurrentBeat = state => state.metronome.currentBeat;

export const selectProgressionChords = state => state.progression.progressionChords;
export const selectSelectedKeyTonic = state => state.progression.selectedKeyTonic;
export const selectSelectedKeyType = state => state.progression.selectedKeyType;
export const selectSelectedProgressionIndex = state => state.progression.selectedProgressionIndex;
export const selectBeatCount = state => state.progression.progressionChords.reduce((acc, { beats }) => acc + beats, 0);
export const selectAvailableKeys = state => state.progression.availableKeyTonics;

const defaultAvailableProgressions = [];
export const selectAvailableProgressions = ({ progression }) =>
    progression.availableProgressions[progression.selectedKeyType] || defaultAvailableProgressions;
export const selectSelectedProgressionIndexIndex = ({ progression }) => progression.selectedProgressionIndex;
export const selectScale = ({ progression }) => progression.scale;
