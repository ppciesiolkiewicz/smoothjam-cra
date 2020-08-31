import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setKey } from '@redux/actions';
import { selectKey, selectAvailableKeys } from '@redux/selectors';
import { Box, Select, MenuItem, InputLabel } from '@material-ui/core';

function Controls() {
    const dispatch = useDispatch();
    const handleKeyChange = e => dispatch(setKey(e.target.value));

    const key = useSelector(selectKey);

    const availableKeys = useSelector(selectAvailableKeys);

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
        </Box>
    );
}

export default Controls;
