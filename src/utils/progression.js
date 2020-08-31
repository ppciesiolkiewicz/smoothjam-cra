import { Progression, Key, Chord } from '@tonaljs/tonal';

export const createChordProgression = (keyTonic, progressionNumerals) => {
    return Progression.fromRomanNumerals(keyTonic, progressionNumerals).map(chordName => ({
        chord: Chord.get(chordName),
        beats: 4,
    }));
};

export const getKey = (tonic, type) => {
    const key = type === 'major' ? Key.majorKey(tonic) : Key.minorKey(tonic);

    return key;
};
