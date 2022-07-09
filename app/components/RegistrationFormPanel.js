import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import DateIcon from '../../images/calendar.svg';
import GenderToggleButton from './GenderToggleButton';
import MembershipToggleButton from './MembershipToggleButton';

const handleSubmit = (event) => {
  event.preventDefault();
};
const handleClearForm = (event) => {
  event.preventDefault();
  var inputs = document.querySelectorAll('input');
  inputs.forEach(function (element) {
    element.value = '';
  });
};

function RegistrationFormPanel() {
  return (
    <Box
      id={'reg4m'}
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{ m: 10 }}
    >
      <label for="names">Name</label>
      <TextField
        margin="normal"
        required
        fullWidth
        id="names"
        name="names"
        defaultValue={'Kendall Jenner'}
        autoFocus
      />
      <label for="">Gender</label>
      <GenderToggleButton />
      <label for="dob">Date of Birth</label>
      <TextField
        margin="normal"
        required
        fullWidth
        id="dob"
        name="dob"
        type="text"
        defaultValue={'01/02/1983'}
        placeholder={'01/02/1983'}
        i
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img src={DateIcon} alt="" />
            </InputAdornment>
          ),
        }}
      />
      <label for="email">Email</label>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        name="email"
        defaultValue={'kendall@email.com'}
        autoComplete="email"
        type="email"
      />
      <label for="mobile">Mobile</label>
      <TextField
        margin="normal"
        required
        fullWidth
        id="mobile"
        name="mobile"
        type="phone"
        placeholder={'+91 98765 43210'}
      />
      <label for="customerId">Customer ID</label>
      <TextField
        margin="normal"
        required
        fullWidth
        id="customerId"
        name="customerId"
        placeholder="576802-ERD0348 45"
        defaultValue={'576802-ERD0348 45'}
      />
      <label for="">Membership</label>
      <MembershipToggleButton />
      <Box style={{ alignProperty: 'right' }}>
        <Button
          type="button"
          variant="contained"
          color="inherit"
          sx={{ mt: 3, mb: 2, color: 'black' }}
          onClick={handleClearForm}
        >
          CANCEL
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="success"
          position="right"
          sx={{ mt: 3, mb: 2, ml: 5, bgcolor: '#49c8a8' }}
        >
          SAVE
        </Button>
      </Box>
    </Box>
  );
}

export default RegistrationFormPanel;
