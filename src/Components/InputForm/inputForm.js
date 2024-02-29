import React from 'react';
import { Grid, TextField, Button, MenuItem } from '@mui/material';
// import './inputForm.css';

const roles = ['Developer', 'Tester', 'Business Analyst'];

function MyForm() {
  return (
    <Grid className='form-container'container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="request-for"
          label="Request for"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="project-name"
          label="Project Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          fullWidth
          id="role"
          label="Role"
          variant="outlined"
          defaultValue=""
        >
          {roles.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default MyForm;
