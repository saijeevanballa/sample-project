import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import './Search.css'

function Search(props) {
    let [Search, setSearch] = useState('')
    return (
        <div style={{
            margin: '20px'
        }}>

            <TextField value={Search} onChange={(e) => setSearch(e.target.value)} className="Search-Bar" id="outlined-basic" label="First Name" variant="outlined" />
            <Button variant="outlined" size="medium">
                Search
            </Button>

            {props.reservations.filter((user) => Search.length ? user.firstName.includes(Search) : user).map((user, index) => <h3 key={index}>{user.firstName}</h3>)}

        </div>

    )
}

export default Search