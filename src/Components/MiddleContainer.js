import React from 'react'
import './MiddleContainer.css'; // Import CSS for styling
import image1 from '../images/site-image-bbs.jpg'
import image2 from '../images/welcome.jpg'
import logo1 from '../images/toolbar_print_aktiv.gif'
import logo2 from '../images/toolbar_help_aktiv.gif'
import logo3 from '../images/application-title.gif'

const MiddleContainer = (props)=> {
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
            <span>BBS Home</span>
            <span>User : {props.userName}</span>
        </div>
        <div className='welcomebbs1-table'>
            <table className='welcomebbs-table' width='99%' cellPadding='0' cellSpacing='0'>
                <tbody>
                    <tr>
                        <td width='22%' valign='top'>
                            <img src={image1} alt='logo' className='logo2' />
                        </td>
                        <td width='1%'>
                        </td>
                        <td width='38%'>
                            <img src={image2} alt='logo3' className='logo3' />
                        </td>
                    </tr>
                    <tr>
                        <td className='blanktd' colSpan='3'></td>
                    </tr>
                    <tr>
                        <td colSpan='3'><h3>BBS in brief</h3></td>
                    </tr>
                    <tr>
                        <td className='blanktd' colSpan='3'></td>
                        <br/>
                    </tr>
                    <tr>
                        <td>
                            <h4>Create Request  : </h4>
                        </td>
                        <td width='1%'>
                        </td>
                        <td>request the required softwares based on the selected project-role</td>
                    </tr>
                    <tr>
                        <td className='blanktd'></td>
                        <br/>
                    </tr>
                    <tr>
                        <td>
                            <h4>Review Requests  : </h4>
                        </td>
                        <td width='1%'>
                        </td>
                        <td>Review raised list of software requests</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default MiddleContainer;