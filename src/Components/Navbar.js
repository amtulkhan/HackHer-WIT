import React from 'react';
import logo from '../assets/logo.jpeg'
import './Navbar.css'; // Import CSS for styling



const Navbar = () => {



    return (
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div class="parentDiv">
        <div className="search-info">Search info: &nbsp;&nbsp;</div>
        <div className="search-container">
        
          <input type="text" placeholder="Enter Key word" className="search-bar" />
        </div>
        <div className="ok-button">OK</div>
        <div className="logout-container">  &nbsp;|&nbsp;&nbsp;
          <a href="/eng" className="logout-link">eng</a>&nbsp;&nbsp;
        </div>
        <div className="logout-container">
          <a href="/eng" className="logout-link">deu</a>&nbsp;&nbsp;
        </div>
        <div className="logout-container">
          <a href="/eng" className="logout-link">fra</a>&nbsp;&nbsp;
        </div>
        <div className="logout-container">
          <a href="/eng" className="logout-link">ita</a>&nbsp;|&nbsp;&nbsp;
        </div>
        <div className="logout-container">
          <a href="/logout" className="logout-link">Logout</a>
        </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;