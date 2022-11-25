import { Box, TextField, MenuItem,FormHelperText } from '@mui/material'
import React, { useState } from 'react'

function Select() {
    const [country, setCountry] = useState('')
    const handleChange = (event) => {
        setCountry(event.target.value)
    }

    return (
        <Box width="250px" >
            <TextField
                label='Room Size'
                select
                value={country}
                onChange={handleChange}
                fullWidth >
                <MenuItem value='SM'>Small</MenuItem>
                <MenuItem value='MD'>Medium</MenuItem>
                <MenuItem value='LR'>Large</MenuItem>
            </TextField>
            <FormHelperText>Choose a Room Type</FormHelperText>
        </Box >
    )
}

export default Select
