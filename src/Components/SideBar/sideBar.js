import React from 'react';
import { Grid } from '@mui/material';
import    './sideBar.css';
import { Link } from 'react-router-dom'; 
import logo from "../../Assets/Images/sidebarimg.jpeg";


const Sidebar = (props) => {
  const handleSubmit = () => {
    props.setMiddleContent("admin");
  };
  return (
    <Grid container direction="column" className="sidebar">
      <Grid item className="sidebar-header">
        <img src={logo} alt="Logo" />
      </Grid>
      <Grid item className="firstrow"></Grid>
      <Grid item>
        <ul className="sidebar-menu">
          <li>
            <a href="#">BBS Home</a>
          </li>
          <li>
            <span className="triangle"></span>
            <a href="#">Create Request</a>
          </li>
          <li>
            <a href="#">Review Request</a>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">History of authorization</a>
          </li>
          <li>
            <span className="triangle"></span>
            <a href="#">Information on</a>
          </li>
          <li onClick={handleSubmit}>
            <span className="triangle"></span>
            <a href="#">Adminstration</a>
        
          </li>
          <li>
            <span className="triangle"></span>
            <a href="#">Resource admin</a>
          </li>
          <li>
            <span className="triangle"></span>
            <a href="#">Resource access</a>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
