import React, { Component } from 'react';
import styled from 'styled-components';
import kickWav from './kick.wav'

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
    constructor() {
        super();
        this.state = {
            isPlaying: false,
            bpm: 100,
            progress: 0,
            chords: [
                {
                    chord: 'C',
                    beats: 4
                },
                {
                    chord: 'G',
                    beats: 4
                },
                {
                    chord: 'F',
                    beats: 4
                },
                {
                    chord: 'A',
                    beats: 4
                }
            ],
        };

        this.kickSound = new Audio(kickWav);
        this.beatTimeout = null;
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.handleBpmChange = this.handleBpmChange.bind(this);
        this.runBeat = this.runBeat.bind(this);
    }

    runBeat() {
        const ONE_MINUTE = 1000 * 60;
        const interval = ONE_MINUTE / this.state.bpm;

        this.kickSound.pause();
        this.kickSound.currentTime = 0;
        this.kickSound.play();
        this.beatTimeout = setTimeout(() => {
            this.setState(({ progress }) => ({
                progress: progress + 1
            }));
            this.runBeat();
        }, interval);
    }

    start() {
        this.setState({
            isPlaying: true,
        });

        this.runBeat();
    }

    stop() {
        this.setState({
            isPlaying: false,
            progress: 0
        });
        clearTimeout(this.beatTimeout);
    }

    handleBpmChange(event) {
        this.setState({
            bpm: event.target.value
        });
    }

    render() {
        const { bpm, progress, chords } = this.state;

        return (
            <div>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <input type="number" value={bpm} onChange={this.handleBpmChange} />
                <BeatProgressContainer>
                    {chords.map(({ chord, beats }, chordNoInProgression) => {
                        const dots = Array(beats).fill().map((_, i) => {
                            let beatNo = chordNoInProgression*4 + i;
                            const isActive = beatNo === this.state.progress%16;

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

export default BeatController;