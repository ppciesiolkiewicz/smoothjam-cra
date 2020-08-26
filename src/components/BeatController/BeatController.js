import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { toggleStartMetronome, setBpm } from '../../redux/actions';
import { Key, Progression } from "@tonaljs/tonal";


console.log(Key.majorKey('C'))
console.log(Progression.fromRomanNumerals("C", ["IMaj7", "IIm7", "V7"]));
console.log(Progression.fromRomanNumerals("C", ['I', 'IIIm', 'VIm', 'IIm', 'V']));

const progressions = {
    major: [
        {
            numerals: ['I', 'IV', 'V'],
        },
        {
            numerals: ['I', 'IIm', 'V'],
        },
        {
            numerals: ['I', 'VIm', 'IIm', 'V'],
        },
        {
            numerals: ['I', 'IIIm', 'VIm', 'IIm', 'V'],
        },
    ],

}

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


const createProgression = (key, progressionNumerals) => {
    return Progression.fromRomanNumerals(key, progressionNumerals).map(chord => ({
        chord,
        beats: 4,
    }));
}

class BeatController extends Component {
    constructor() {
        super();
        const key = 'C';
        const progressionNumerals = progressions.major[0].numerals;
        const chords = createProgression(key, progressionNumerals);

        this.state = {
            key,
            progressionNumerals,
            chords,
        };
    }

    toggleStart = () => {
        const { toggleStartMetronome } = this.props;
        toggleStartMetronome();
    }

    handleBpmChange = e => {
        const { setBpm } = this.props;
        setBpm(e.target.value);
    }

    handleKeyChange = e => {
        const { progressionNumerals } = this.state;
        const key = e.target.value;
        const chords = createProgression(key, progressionNumerals);
        this.setState({
            key,
            chords
        });   
    }

    get beatCount() {
        const { chords } = this.state;
        return chords.reduce((acc, { beats }) => acc + beats, 0);
    }

    render() {
        const { key, chords } = this.state;
        const { isPlaying, bpm, beatNumber } = this.props;

        return (
            <div>
                <button onClick={this.toggleStart}>{isPlaying ? 'Stop' : 'Start'}</button>
                <input type="number" value={bpm} onChange={this.handleBpmChange} />
                <input type="string" value={key} onChange={this.handleKeyChange} />

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

const mapStateToProps = ({ metronome: { isPlaying, bpm, beatNumber }}) => ({
    isPlaying,
    bpm,
    beatNumber,
});

export default connect(
    mapStateToProps,
    { toggleStartMetronome, setBpm }
)(BeatController);