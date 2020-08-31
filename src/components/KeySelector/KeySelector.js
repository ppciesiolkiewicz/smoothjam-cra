import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedKeyTonic, setSelectedKeyType } from '@redux/actions';
import { selectSelectedKeyTonic, selectSelectedKeyType, selectAvailableKeys } from '@redux/selectors';
import { Box, Select, MenuItem, InputLabel } from '@material-ui/core';

function Controls() {
    const dispatch = useDispatch();
    const handleKeyTonicChange = e => dispatch(setSelectedKeyTonic(e.target.value));
    const handleKeyTypeChange = e => dispatch(setSelectedKeyType(e.target.value));

    const keyTonic = useSelector(selectSelectedKeyTonic);
    const keyType = useSelector(selectSelectedKeyType);

    const availableKeyTonics = useSelector(selectAvailableKeys);
    const availableKeyModes = useSelector(state => state.progression.availableKeyModes);

    return (
        <Box>
            <InputLabel id="key-select-label">Key</InputLabel>

            <Select labelId="key-select-label" value={keyTonic} onChange={handleKeyTonicChange}>
                {availableKeyTonics.map(k => (
                    <MenuItem key={k} value={k}>
                        {k}
                    </MenuItem>
                ))}
            </Select>
            <Select value={keyType} onChange={handleKeyTypeChange}>
                {availableKeyModes.map((t, index) => (
                    <MenuItem key={index} value={t}>
                        {t}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
}

export default Controls;
