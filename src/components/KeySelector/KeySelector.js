import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setKey, setKeyMode } from '@redux/actions';
import { selectKey, selectKeyMode, selectAvailableKeys } from '@redux/selectors';
import { Box, Select, MenuItem, InputLabel } from '@material-ui/core';

function Controls() {
    const dispatch = useDispatch();
    const handleKeyChange = e => dispatch(setKey(e.target.value));
    const handleKeyModeChange = e => dispatch(setKeyMode(e.target.value));

    const key = useSelector(selectKey);
    const keyType = useSelector(selectKeyMode);

    const availableKeys = useSelector(selectAvailableKeys);
    const availableKeyModes = useSelector(state => state.progression.availableKeyModes);

    return (
        <Box>
            <InputLabel id="key-select-label">Key</InputLabel>

            <Select labelId="key-select-label" value={key} onChange={handleKeyChange}>
                {availableKeys.map(k => (
                    <MenuItem key={k} value={k}>
                        {k}
                    </MenuItem>
                ))}
            </Select>
            <Select value={keyType} onChange={handleKeyModeChange}>
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
