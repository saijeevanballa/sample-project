import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import reservations from '../reservations.json';
import './Search.css'

function Search() {
    let resv = reservations
    return (
        <div>

            <TextField className="Search-Bar" id="outlined-basic" label="First Name" variant="outlined" />
            <Button variant="outlined" size="medium">
                Search
            </Button>

            <Button variant="outlined" startIcon={<AddIcon />} style={{ marginLeft: "25px" }} >
                ADD CUSTOMER
            </Button>

            {resv.map(user => <h3>{user.firstName}</h3>)}

        </div>

    )
}

export default Search