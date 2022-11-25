import React from 'react'
import {RadioGroup,FormControlLabel, Radio} from '@mui/material' 
function InputRadioGroup() {
  return (
    <RadioGroup
    row
    name="row-radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
   
  </RadioGroup>
  )
}

export default InputRadioGroup