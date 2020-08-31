export const selectIsPlaying = state => state.metronome.isPlaying;
export const selectBpm = state => state.metronome.bpm;
export const selectCurrentBeat = state => state.metronome.currentBeat;
export const selectChords = state => state.progression.chords;
export const selectKey = state => state.progression.key;
export const selectKeyMode = state => state.progression.keyMode;
export const selectProgression = state => state.progression.progression;

export const selectBeatCount = state => state.progression.chords.reduce((acc, { beats }) => acc + beats, 0);
export const selectAvailableKeys = state => state.progression.availableKeys;

export const selectAvailableProgressions = ({ progression }) => progression.availableProgressions[progression.keyMode];
export const selectProgressionIndex = ({ progression }) => progression.progressionIndex;
