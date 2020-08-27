import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStartMetronome, setBpm, setKey, setProgressionType, setProgressionIndex } from '../../redux/actions';
import {
    selectIsPlaying,
    selectBpm,
    selectKey,
    selectAvailableKeys,
    selectAvailableProgressionTypes,
    selectAvailableProgressions,
    selectProgressionType,
    selectProgressionIndex,
} from '../../redux/selectors';
import { Key, Progression } from '@tonaljs/tonal';
import { Button, Slider, Select, MenuItem, InputLabel } from '@material-ui/core';


console.log(Key.majorKey('C'))
console.log(Progression.fromRomanNumerals("C", ["IMaj7", "IIm7", "V7"]));
console.log(Progression.fromRomanNumerals("C", ['I', 'IIIm', 'VIm', 'IIm', 'V']));

function BeatController() {
    const dispatch = useDispatch();
    const toggleStart = () => dispatch(toggleStartMetronome());
    const handleBpmChange = (_, value) => dispatch(setBpm(value));
    const handleKeyChange = e => dispatch(setKey((e.target.value)));
    const handleProgressionTypeChange = e => dispatch(setProgressionType((e.target.value)));
    const handleProgressionIndexChange = e => dispatch(setProgressionIndex((e.target.value)));


    const isPlaying = useSelector(selectIsPlaying);
    const bpm = useSelector(selectBpm);
    const key = useSelector(selectKey);

    const availableKeys = useSelector(selectAvailableKeys);
    const availableProgressionTypes = useSelector(selectAvailableProgressionTypes);
    const availableProgressions = useSelector(selectAvailableProgressions);
    const progressionType = useSelector(selectProgressionType);
    const progressionIndex = useSelector(selectProgressionIndex);

    return (
        <div>
            <Button variant="contained" color="primary" onClick={toggleStart}>{isPlaying ? 'Stop' : 'Start'}</Button>
            <InputLabel id="bpm-slider-label">
                BPM
            </InputLabel>
            <Slider
                value={bpm}
                onChange={handleBpmChange}
                aria-labelledby="bpm-slider-label"
                valueLabelDisplay="auto"
                step={1}
                min={30}
                max={220}
            />
            <InputLabel id="key-select-label">Key</InputLabel>
            <Select
                labelId="key-select-label"
                value={key}
                onChange={handleKeyChange}
            >
                {availableKeys.map(k => <MenuItem key={k} value={k}>{k}</MenuItem>)}
            </Select>

            <InputLabel id="progression-select-label">Progression</InputLabel>
            <Select
                labelId="progression-type-select-label"
                value={progressionType}
                onChange={handleProgressionTypeChange}
            >
                {availableProgressionTypes.map(t => <MenuItem value={t}>{t}</MenuItem>)}
            </Select>
            <Select
                labelId="progression-select-label"
                value={progressionIndex}
                onChange={handleProgressionIndexChange}
            >
                {availableProgressions.map((p, index) => <MenuItem value={index}>{p.name}</MenuItem>)}
            </Select>


        </div>
    );
};

export default BeatController;