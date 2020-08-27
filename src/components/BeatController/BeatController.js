import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { toggleStartMetronome, setBpm, setKey, setProgression } from '../../redux/actions';
import { Key, Progression } from "@tonaljs/tonal";
import { Button, Slider, Typography, Select, MenuItem, InputLabel, Input } from '@material-ui/core';


console.log(Key.majorKey('C'))
console.log(Progression.fromRomanNumerals("C", ["IMaj7", "IIm7", "V7"]));
console.log(Progression.fromRomanNumerals("C", ['I', 'IIIm', 'VIm', 'IIm', 'V']));


const availableKeys = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
    'C'
];

const BeatProgressDot = styled.div`
    border: 1px solid #000;
    background-color: #fff;
    width: 30px;
    height: 30px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    ${({ active }) => active && `background-color: #000; color: white;`}
`;

const BeatProgressDots = styled.div`
    display: flex;
`;


const Chord = styled.div`
    font-size: 20px;
    margin-left: 3px;
`;

const BeatProgressChord = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BeatProgressContainer = styled.div`
    display: flex;
`;


class BeatController extends Component {
    toggleStart = () => this.props.toggleStartMetronome();
    handleBpmChange = (e, value) => this.props. setBpm(value);
    handleKeyChange = e => this.props.setKey(e.target.value);

    get beatCount() {
        const { chords } = this.props;
        return chords.reduce((acc, { beats }) => acc + beats, 0);
    }

    render() {
        const { isPlaying, bpm, beatNumber, progressionKey, chords } = this.props;

        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.toggleStart}>{isPlaying ? 'Stop' : 'Start'}</Button>
                <Typography id="bpm-slider" gutterBottom>
                    BPM
                </Typography>
                <Slider
                    value={bpm}
                    onChange={this.handleBpmChange}
                    aria-labelledby="bpm-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    min={30}
                    max={220}
                />
                <InputLabel id="key-select-label">Key</InputLabel>
                <Select
                    labelId="key-select-label"
                    value={progressionKey}
                    onChange={this.handleKeyChange}
                >
                    {availableKeys.map(k => <MenuItem value={k}>{k}</MenuItem>)}
                </Select>

                <BeatProgressContainer>
                    {chords.map(({ chord, beats }, chordNoInProgression) => {
                        const dots = Array(beats).fill().map((_, i) => {
                            let beatNo = chordNoInProgression * 4 + i; // TODO: magic 4
                            const isActive = beatNo === beatNumber % this.beatCount;

                            return <BeatProgressDot key={i} active={isActive}><div>{chord}</div></BeatProgressDot>
                        });
                        return (
                            <BeatProgressChord key={chordNoInProgression}>
                                <Chord>{chord}</Chord>
                                <BeatProgressDots>{dots}</BeatProgressDots>
                            </BeatProgressChord>
                        );
                    })}
                </BeatProgressContainer>
            </div>
        );
    }
}

const mapStateToProps = ({
        metronome: { isPlaying, bpm, beatNumber },
        progression: { chords, key, progression, availableProgressions }
    }) => ({
        isPlaying,
        bpm,
        beatNumber,
        chords,
        progressionKey: key,
        progression,
        availableProgressions
    });

export default connect(
    mapStateToProps,
    { toggleStartMetronome, setBpm, setKey, setProgression }
)(BeatController);