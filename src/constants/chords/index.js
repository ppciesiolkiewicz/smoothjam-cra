import guitar from './guitar.json';

export const guitarChords = {
    ...guitar,
    chords: {
        ...guitar.chords,
        'G#': guitar.chords['Ab'].map(c => ({
            ...c,
            key: 'G#',
        })),
        'A#': guitar.chords['Bb'].map(c => ({
            ...c,
            key: 'A#',
        })),
        'D#': guitar.chords['Eb'].map(c => ({
            ...c,
            key: 'D#',
        })),
        'C#': guitar.chords['Csharp'],
        'F#': guitar.chords['Fsharp'],
    },
};
