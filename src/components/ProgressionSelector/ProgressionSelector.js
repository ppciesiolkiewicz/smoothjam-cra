import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProgressionType, setProgressionIndex } from '@redux/actions';
import {
    selectAvailableProgressionTypes,
    selectAvailableProgressions,
    selectProgressionType,
    selectProgressionIndex,
} from '@redux/selectors';
import { Box, Select, MenuItem, InputLabel } from '@material-ui/core';

function ProgressionSelector() {
    const dispatch = useDispatch();
    const handleProgressionTypeChange = e => dispatch(setProgressionType(e.target.value));
    const handleProgressionIndexChange = e => dispatch(setProgressionIndex(e.target.value));

    const availableProgressionTypes = useSelector(selectAvailableProgressionTypes);
    const availableProgressions = useSelector(selectAvailableProgressions);
    const progressionType = useSelector(selectProgressionType);
    const progressionIndex = useSelector(selectProgressionIndex);

    return (
        <Box>
            <InputLabel id="progression-select-label">Progression</InputLabel>
            <Select
                labelId="progression-type-select-label"
                value={progressionType}
                onChange={handleProgressionTypeChange}
            >
                {availableProgressionTypes.map(t => (
                    <MenuItem value={t}>{t}</MenuItem>
                ))}
            </Select>
            <Select labelId="progression-select-label" value={progressionIndex} onChange={handleProgressionIndexChange}>
                {availableProgressions.map((p, index) => (
                    <MenuItem value={index}>{p.name}</MenuItem>
                ))}
            </Select>
        </Box>
    );
}

export default ProgressionSelector;
