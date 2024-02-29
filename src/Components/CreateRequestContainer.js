import React from 'react'
import './CreateRequestContainer.css';
import './MiddleContainer.css' // Import CSS for styling
import logo1 from '../images/toolbar_print_aktiv.gif'
import logo2 from '../images/toolbar_help_aktiv.gif'
import logo3 from '../images/application-title.gif'



const CreateReqContainer = (props)=> {
    const handleSwitchComponent = (componentName) => {
        props.activeCompCallback(componentName)};

    return(
        
        <div className='middleContainer-info'>
            
            <div class="GroupBoxGrey">
            <span>
              <img src={logo3} alt="Logo"/>
            </span>
            <span>
                <a class="QueryLogo" href=""> <img src={logo2} border="0"/></a>
                <a href="javascript:window.print();"><img src={logo1} border="0"/></a>
            </span>
        </div>
            <div className='waContentTitleBar'>
            <span>Request for individuals</span>
            <span>User : {props.userName}</span>
        </div><table className= "waSearchTable" border="0" cellSpacing="0" cellPadding="22px">
                <tbody>
                    <tr>
                        <td className="borderGrey">
                            <table width="100%" border="0" cellSpacing="22px" cellPadding="32px">
                                <tbody>
                                    <tr>
                                        <td className="waTableLeftPadding" nowrap>
                                            Request for:
                                            <br/>
                                            <input type="text" readOnly="true" className="waEntryField"  value={props.userName}/>&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="waTableLeftPaddingProjects" nowrap>
                                            Projects:
                                            <br/>
                                            <select type="text" readOnly="true" className="waProjectsDropDown">
                                                <option value="flp-service">Flp-Service</option>
                                                <option value="flp-service-mortgage">Flp-Service-Mortgage</option>
                                                <option value="flp-service-mortgage-rule">Flp-Service-Mortgage-Rule</option>
                                            </select>&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="waTableLeftPaddingRole" nowrap>
                                            Role:
                                            <br/>
                                            <select type="text" readOnly="true" className="waRoleDropDown" >
                                                <option value="developer">Developer</option>
                                                <option value="tester">Tester</option>
                                            </select>&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="waTableLeftPaddingDesc" nowrap>
                                            Description:
                                            <br/>
                                            <textarea className="waDescription" rows='5'/>&nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="waTableLeftPaddingSubmit" nowrap>
                                            <br/>
                                            <button type="text" className="waSubmit" onClick={() => handleSwitchComponent('dataTable') } >SUBMIT</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
          
        )
    }

    export default CreateReqContainer;
    