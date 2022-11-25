import React from 'react'
import { TextField } from '@mui/material'

function InputTextField(props) {
  return (
    <TextField id="outlined-basic" label={props.name} variant="outlined" />
  )
}

export default InputTextField