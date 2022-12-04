import React from 'react'
import MuiPicker from './MuiPicker';
import { Card, TextField, Autocomplete, FormGroup, FormControlLabel, Switch, Checkbox } from '@mui/material';
import './MuiPicker.css'
import Select from './Select'
import InputTextField from "./InputTextField"
import InputRadioGroup from "./InputRadioGroup";
import { Formik } from 'formik';


function AddCustomer() {

    return (

        <div>
            <Card className="Card">

                <form className='Grid-cont' >
                    <div> <MuiPicker func={arrDate} name="dateOfArr" propName="Date Of Arrival"  /> </div>
                    <div > <MuiPicker name="dateOfDep" propName="Date Of Departure" /></div>
                    <div className=" new-row"> <Select name="roomSize" propName="Room Size" values={["Small", "Medium", "Large"]}></Select> </div>
                    <div> <InputTextField name="roomQty" propName="Room Quantity" helperText="Maximun: 5"></InputTextField> </div>
                    <div className=" new-row"> <InputTextField name="fName"  propName="First Name" helperText=""></InputTextField> </div>
                    <div className=" new-row"> <InputTextField name="lName"  propName="Last Name" helperText=""></InputTextField> </div>
                    <div className=" new-row"> <InputTextField name="email"  propName="E-mail" helperText></InputTextField> </div>
                    <div className=" new-row"> <InputTextField name="phNum"  propName="Phone Number" helperText="Add your country code first"></InputTextField> </div>
                    <div className=" new-row"> <InputTextField name="stName"  propName="Street Name" helperText=""></InputTextField> </div>
                    <div> <InputTextField name="stNum"  propName="Street Number" helperText=""></InputTextField> </div>
                    <div className=" new-row"> <InputTextField name="zip"  propName="Zip" helperText=""></InputTextField> </div>
                    <div> <InputTextField name="prov"  propName="State" helperText="AutoComplete"></InputTextField> </div>
                    <div> <InputTextField name="city"  propName="City" helperText=""></InputTextField> </div>
                    <div className=" new-row"> <Select name="extras"  propName="Extras" values={["BreakFast", "TV", "WiFi", "Laundry", "Kitchen"]}></Select> </div>
                    <div className=" new-row" style={{ width: "500px" }}> <InputRadioGroup name="payment"></InputRadioGroup> </div>
                    <div className=" new-row"> <TextField
                    name="personalNote" 
                        id="outlined-multiline-static"
                        label="Personal Note"
                        multiline
                        rows={2}
                        defaultValue="Test"
                    /> </div>
                    <div className=" new-row">
                        <Autocomplete
                        name="tags" 
                            multiple
                            limitTags={2}
                            id="multiple-limit-tags"
                            options={["Hotel", "2"]}
                            getOptionLabel={(option) => option.title}
                            defaultValue={["Hotel", "Test2"]}
                            renderInput={(params) => (
                                <TextField {...params} label="limitTags" placeholder="Favorites" />
                            )}
                            sx={{ width: '500px' }}
                        />
                    </div>
                    <div className=" new-row" style={{ width: "500px" }}>
                        <FormGroup>
                            <FormControlLabel name="remCheck"  control={<Switch defaultChecked />} label="Send me a Remainder" />
                            <FormControlLabel name="letterCheck"  control={<Switch />} label="Subscribe to newsletter" />
                            <FormControlLabel name="confirmCheck"  control={<Checkbox defaultChecked />} label="I confirm the information above" />
                        </FormGroup> </div>
                    <button type="submit">Submit</button>
                </form>

        </Card>
        </div >

    )
}

export default AddCustomer