import { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



function MuiPicker(props) {
    const [selectedDate, setSelectedDate] = useState('')
    return (
        <Stack spacing={4} sx={{ width: '250px', marginRight: '25px'}}>
            <DatePicker
                label={props.name}
                renderInput={(params) => <TextField {...params} />}
                value={selectedDate}
                onChange={(newValue) => {
                    setSelectedDate(newValue)
                }} >
            </DatePicker>
        </Stack>
    )
}

export default MuiPicker