export const selectIsPlaying = state => state.metronome.isPlaying;
export const selectBpm = state => state.metronome.bpm;
export const selectBeatNumber = state => state.metronome.beatNumber;
export const selectChords = state => state.progression.chords;
export const selectKey = state => state.progression.key;
export const selectProgression = state => state.progression.progression;

export const selectBeatCount = state => state.progression.chords.reduce((acc, { beats }) => acc + beats, 0);
export const selectAvailableKeys = state => state.progression.availableKeys;


export const selectAvailableProgressionTypes = ({ progression }) =>  Object.keys(progression.availableProgressions);
export const selectAvailableProgressions = ({ progression }) => progression.availableProgressions[progression.progressionType];
export const selectProgressionType = ({ progression }) => progression.progressionType;
export const selectProgressionIndex = ({ progression }) => progression.progressionIndex;