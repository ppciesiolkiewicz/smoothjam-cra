import { Progression, Key } from '@tonaljs/tonal';

export const createChordProgression = (key, progressionNumerals) => {
    return Progression.fromRomanNumerals(key, progressionNumerals).map(chord => ({
        chord,
        beats: 4,
    }));
};

export const getKey = (tonic, type) => {
    const key = type === 'major' ? Key.majorKey(tonic) : Key.minorKey(tonic);

    return key;
};
