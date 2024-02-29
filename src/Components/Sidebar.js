import React from 'react';
import './Sidebar.css'; // Import CSS file for styling
import logo from '../assets/sidebarlogo.jpeg';
import CreateRequestContainer from './CreateRequestContainer';
import MiddleContainer from './MiddleContainer';
import { useState } from 'react';

const Sidebar = (props) => {


    // const[MiddleContainer,setMiddleContainer] =useState (true);
    // const[CreateRequestContainer,setCreateRequestContainer] =useState (false);
       
      
  
    const handleSwitchComponent = (componentName) => {
      props.activeCompCallback(componentName)};
    
    
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src={logo} alt="Logo" />
            </div>
            <div className="firstrow">

            </div>
            <ul className="sidebar-menu">
                <li ><a href='#' onClick={() => handleSwitchComponent('MiddleContainer') } >BBS Home</a></li>
                <li><span className="triangle"></span><a href="#" onClick={() => handleSwitchComponent('CreateRequestContainer')  }>Create Request</a></li>
                <li><a href="#">Review Request</a></li>
                <li><a href="#">Overview</a></li>
                <li><a href="#">History of authorizations</a></li>
                <li><span className="triangle"></span><a href="#">Information on</a></li>
                <li><span className="triangle"></span><a href="#">Adminstration</a></li>
                <li><span className="triangle"></span><a href="#">Resource admin</a></li>
                <li><span className="triangle"></span><a href="#">Resource access</a></li>
            </ul>
            {/* {activeComponent === 'MiddleContainer' }
      {activeComponent === 'CreateRequestContainer'  } */}

{/* {activeComponent === 'MiddleContainer' } */}
      {/* {activeComponent === 'CreateRequestContainer'} */}
        </div>
    );
}

export default Sidebar;

