import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProgressionIndex } from '@redux/actions';
import { selectAvailableProgressions, selectProgressionIndex } from '@redux/selectors';
import { Box, Select, MenuItem, InputLabel } from '@material-ui/core';

function ProgressionSelector() {
    const dispatch = useDispatch();
    const handleProgressionIndexChange = e => dispatch(setProgressionIndex(e.target.value));

    const availableProgressions = useSelector(selectAvailableProgressions);
    const progressionIndex = useSelector(selectProgressionIndex);

    return (
        <Box>
            <InputLabel id="progression-select-label">Progression</InputLabel>
            <Select labelId="progression-select-label" value={progressionIndex} onChange={handleProgressionIndexChange}>
                {availableProgressions.map((p, index) => (
                    <MenuItem key={index} value={index}>
                        {p.name}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
}

export default ProgressionSelector;
