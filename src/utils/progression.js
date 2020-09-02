import { Progression, Key, Chord } from '@tonaljs/tonal';

export const createChordProgression = (keyTonic, progressionNumerals) => {
    return Progression.fromRomanNumerals(keyTonic, progressionNumerals).map(chordName => {
        const chord = Chord.get(chordName);
        const { type, tonic, symbol } = chord;
        const suffix = ['major', 'minor'].indexOf(type) !== -1 ? type : symbol.slice(tonic.length);

        return {
            chord: {
                ...chord,
                suffix,
            },
            beats: 4,
        };
    });
};

export const getKey = (tonic, type) => {
    const key = type === 'major' ? Key.majorKey(tonic) : Key.minorKey(tonic);

    return key;
};
