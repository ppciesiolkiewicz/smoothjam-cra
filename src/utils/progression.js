import { Progression } from '@tonaljs/tonal';

export const createChordProgression = (key, progressionNumerals) => {
    return Progression.fromRomanNumerals(key, progressionNumerals).map(chord => ({
        chord,
        beats: 4,
    }));
};
