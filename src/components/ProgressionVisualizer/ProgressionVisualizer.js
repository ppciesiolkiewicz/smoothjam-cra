import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectBeatNumber, selectChords, selectBeatCount } from '../../redux/selectors';



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


function ProgressionVisualizer() {
    const chords = useSelector(selectChords);
    const beatNumber = useSelector(selectBeatNumber);
    const beatCount = useSelector(selectBeatCount);


    return (
        <BeatProgressContainer>
            {chords.map(({ chord, beats }, chordNoInProgression) => {
                const dots = Array(beats).fill().map((_, i) => {
                    let beatNo = chordNoInProgression * 4 + i; // TODO: magic 4
                    const isActive = beatNo === beatNumber % beatCount;

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
    );
}

export default ProgressionVisualizer;