import React from 'react';
import './App.css';
//import Search from './Components/Search';
import AddCustomer from './Components/AddCustomer';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <AddCustomer />
      </div>
    </LocalizationProvider>
  );
}

export default App;
