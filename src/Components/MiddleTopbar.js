import React from 'react';
import logo1 from '../images/toolbar_print_aktiv.gif'
import logo2 from '../images/toolbar_help_aktiv.gif'
import logo3 from '../images/application-title.gif'
import './MiddleTopbar.css'; // Import CSS for styling

const MiddleTopbar = () => {
    return (
      <div class="GroupBoxGrey">
            <span>
              <img src={logo3} alt="Logo"/>
            </span>
            <span>
                <a class="QueryLogo" href=""> <img src={logo2} border="0"/></a>
                <a href="javascript:window.print();"><img src={logo1} border="0"/></a>
            </span>
        </div>
    );
  };
  
  export default MiddleTopbar;