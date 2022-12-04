import React from 'react'
import { TextField, FormHelperText, Box } from '@mui/material'

function InputTextField(props) {
  return (
    <Box width="200px" >
      <TextField id="outlined-basic" label={props.propName} value={props.value} variant="outlined" />
      <FormHelperText style={{marginLeft:"15px"}}>{props.helperText}</FormHelperText>
    </Box>
  )
}

export default InputTextField