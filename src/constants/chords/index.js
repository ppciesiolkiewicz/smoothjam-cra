import guitar from './guitar.json';

export const guitarChords = {
    ...guitar,
    keys: [...guitar.keys, 'D#', 'G#', 'A#'],
    chords: {
        ...guitar.chords,
        'D#': guitar.chords['Eb'].map(c => ({
            ...c,
            key: 'D#',
        })),
        'G#': guitar.chords['Ab'].map(c => ({
            ...c,
            key: 'G#',
        })),
        'A#': guitar.chords['Bb'].map(c => ({
            ...c,
            key: 'A#',
        })),
        'C#': guitar.chords['Csharp'],
        'F#': guitar.chords['Fsharp'],
        Csharp: undefined,
        Fsharp: undefined,
    },
};
