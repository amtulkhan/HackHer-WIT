import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../SideBar/sideBar';

const staticData = [
  { id: 1, gpn: '49030969', name: 'Amtul Ahemad', lastDate: '02-03-2024' },
  { id: 2, gpn: '45622991', name: 'Prapti Maheshwari', lastDate: '04-04-2024' },
  { id: 3, gpn: '45992567', name: 'Nishma Godha', lastDate: '05--04-2024' },
];

const TableWithButton = () => {
  const handleRevokeAccess = (id) => {
    // Handle revoke access action
    console.log(`Revoke access for ID ${id}`);
  };

  return (
    
    <Grid container spacing={10} paddingTop={40} paddingRight={20} justifyContent={'space-between'}> 
      <Grid item xs={12}>
      <div style={{ margin: '0 auto', textAlign: 'center' }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>GPN</th>
              <th>Name</th>
              <th>Last Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {staticData.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.gpn}</td>
                <td>{row.name}</td>
                <td>{row.lastDate}</td>
                <td>
                  <Button variant="contained" onClick={() => handleRevokeAccess(row.id)}>
                    Revoke Access
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </Grid>
    </Grid>
  );
};

export default TableWithButton;
