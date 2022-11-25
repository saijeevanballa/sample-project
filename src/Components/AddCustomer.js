import React from 'react'
import MuiPicker from './MuiPicker';
import { Card, TextField, Autocomplete, FormGroup, FormControlLabel, Switch, Checkbox } from '@mui/material';
import './MuiPicker.css'
import Select from './Select'
import InputTextField from "./InputTextField"
import InputRadioGroup from "./InputRadioGroup";
import Grid from '@mui/material/Grid';


function AddCustomer() {
    return (

        <div>
            <Card className="Card">
                <Grid className='Grid-container'>
                    <MuiPicker name="Date Of Arrival" />
                    <MuiPicker name="Date Of Departure" />
                    <Select></Select>
                    <InputTextField name="Room Quantity"></InputTextField>
                    <InputTextField name="First Name"></InputTextField>
                    <InputTextField name="Last Name"></InputTextField>
                    <InputTextField name="E-mail"></InputTextField>
                    <InputTextField name="Phone Number"></InputTextField>
                    <InputTextField name="Street Name"></InputTextField>
                    <InputTextField name="Street Number"></InputTextField>
                    <InputTextField name="Zip"></InputTextField>
                    <InputTextField name="State"></InputTextField>
                    <InputTextField name="City"></InputTextField>
                    <Select></Select>
                    <InputRadioGroup></InputRadioGroup>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                    <Autocomplete
                        multiple
                        limitTags={2}
                        id="multiple-limit-tags"
                        options={["1", "2"]}
                        getOptionLabel={(option) => option.title}
                        defaultValue={["test1", "Test2"]}
                        renderInput={(params) => (
                            <TextField {...params} label="limitTags" placeholder="Favorites" />
                        )}
                        sx={{ width: '500px' }}
                    />
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                        <FormControlLabel disabled control={<Switch />} label="Disabled" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    </FormGroup>
                </Grid>

            </Card>
        </div>

    )
}

export default AddCustomer