import React, { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import AddCustomer from './Components/AddCustomer';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import data from './reservations.json';


function App() {
  const [reservations, setReservations] = useState(data)
  const [form, setForm] = useState(false)

  console.log(reservations)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {!form ? <Button variant="outlined" onClick={() => setForm(val => !val)} startIcon={<AddIcon />} style={{ marginLeft: "25px" }} >
          ADD CUSTOMER
        </Button> : null}
        {form ? <AddCustomer setForm={setForm} setReservations={setReservations} reservations={reservations} /> : <Search reservations={reservations} />}
      </div>
    </LocalizationProvider>
  );
}

export default App;
