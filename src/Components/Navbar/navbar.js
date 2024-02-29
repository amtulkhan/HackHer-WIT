import React from "react";
import logo from "../../Assets/Logos/logo.jpeg";
import "./navbar.css"; // Import CSS for styling
import { Grid } from "@mui/material";
const navBar = () => {
  return (
    <Grid container xs={12} className="navbar">
      <Grid item xs={2} className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </Grid>
      <Grid item xs={8} class="parentDiv">
        <div className="search-info">Search info: </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter Key word"
            className="search-bar"
          />
        </div>
        <div className="ok-button">OK</div>
        <div className="logout-container">
          {" "}
          &nbsp;|&nbsp;&nbsp;
          <a href="/eng" className="logout-link">
            eng
          </a>
          &nbsp;&nbsp;
        </div>
        <div className="logout-container">
          <a href="/eng" className="logout-link">
            deu
          </a>
          &nbsp;&nbsp;
        </div>
        <div className="logout-container">
          <a href="/eng" className="logout-link">
            fra
          </a>
          &nbsp;&nbsp;
        </div>
        <div className="logout-container">
          <a href="/eng" className="logout-link">
            ita
          </a>
          &nbsp;|&nbsp;&nbsp;
        </div>
        <div className="logout-container">
          <a href="/logout" className="logout-link">
            Logout
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

export default navBar;
