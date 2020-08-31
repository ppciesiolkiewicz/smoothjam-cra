import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Controls from './components/Controls';
import ProgressionVisualizer from './components/ProgressionVisualizer';
import Metronome from './components/Metronome';
import ChordVisualizer from './components/ChordsVisualizer/ChordsVisualizer';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ChordType, Chord, ScaleType, Scale, Key } from "@tonaljs/tonal";


const getScale = (key, type) => {
    const scale = Scale.get(`${key} ${type}`);
    const scaleChordTypes = Scale.scaleChords(type);

    return {
        ...scale,
        chordTypes: scaleChordTypes,
        chords: scaleChordTypes.map(type => Chord.getChord(type, key)), //???
    };
};


const theme = createMuiTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Provider store={store}>
                    <Metronome />
                    <Controls />
                    <ProgressionVisualizer />
                    <ChordVisualizer />
                </Provider>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
