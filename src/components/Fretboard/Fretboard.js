import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import times from 'lodash.times';
import { transpose } from '@tonaljs/core';
import { Interval, Note } from '@tonaljs/tonal';
import Strings from './components/Strings';
import Frets from './components/Frets';
import Inlays from './components/Inlays';
import Notes from './components/Notes';

const Container = styled.div`
    margin: 50px;
    height: 300px;
    width: 70%;
    user-select: none;
`;

function Fretboard({ fretCount, tuning, selectedNotes, highlightedNotes, theme, reversed, notePointerEvents }) {
    const stringCount = tuning.length;
    const selectedNotesObj = useMemo(() => selectedNotes.map(n => Note.get(n)), [selectedNotes]);
    const highlightedNotesObj = useMemo(() => highlightedNotes.map(n => ({ ...n, note: Note.get(n.note) })), [
        highlightedNotes,
    ]);

    const notes = useMemo(() => {
        const t = reversed ? tuning.slice(0).reverse() : tuning;
        return t.map(rootNote => {
            return times(fretCount - 1, fretNo => {
                const noteSymbol = transpose(rootNote, Interval.fromSemitones(fretNo));
                const note = Note.get(noteSymbol);

                return note;
            });
        });
    }, [tuning, fretCount, reversed]);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height="100%"
                    stroke="black"
                    strokeWidth="1"
                    fill="white"
                    shapeRendering="geometricPrecision"
                    style={{ overflow: 'visible' }}
                    transform="translate(-36 0)"
                >
                    <Strings stringCount={stringCount} fretCount={fretCount} reversed={reversed} />
                    <Frets fretCount={fretCount} />
                    <Notes
                        notes={notes}
                        highlightedNotes={highlightedNotesObj}
                        selectedNotes={selectedNotesObj}
                        stringCount={stringCount}
                        fretCount={fretCount}
                        notePointerEvents={notePointerEvents}
                    />
                    <Inlays fretCount={fretCount} />
                </svg>
            </Container>
        </ThemeProvider>
    );
}

Fretboard.propTypes = {
    tuning: PropTypes.arrayOf(PropTypes.string).isRequired,
    fretCount: PropTypes.number.isRequired,
    selectedNotes: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlightedNotes: PropTypes.arrayOf(
        PropTypes.oneOfType(PropTypes.shape({ note: PropTypes.string.isRequired, highlightColor: PropTypes.string }))
    ).isRequired,
    theme: PropTypes.shape({
        note: PropTypes.shape({
            primary: PropTypes.shape({
                fill: PropTypes.string.isRequired,
                stroke: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        stringColor: PropTypes.string.isRequired,
        fretColor: PropTypes.string.isRequired,
    }).isRequired,
    reversed: PropTypes.bool.isRequired,
    notePointerEvents: PropTypes.shape({
        onPointerEnter: PropTypes.func,
        onPointerLeave: PropTypes.func,
        onPointerDown: PropTypes.func,
        onPointerUp: PropTypes.func,
    }),
};

Fretboard.defaultProps = {
    tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
    fretCount: 12,
    reversed: true,
    selectedNotes: [],
    highlightedNotes: [],
    theme: {
        note: {
            primary: {
                fill: '#eee',
                stroke: '#000',
            },
            highlight1: {
                fill: '#99c',
                stroke: '#44a',
            },
            highlight2: {
                fill: '#a77',
                stroke: '#000',
            },
        },
        stringColor: '#111',
        fretColor: '#111',
    },
};

export default Fretboard;
