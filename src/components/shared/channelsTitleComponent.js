import React from "react";
import '../../stylesheets/titleComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'



function ChannelsTitleComponent(){
    
    return(
        <div className='backDiv'>
            <div className='headerDiv'>
                <p className='headerText mt-3'>Channel</p>
            </div>
            <Link to='/dashboard/media/channels'>
                <button className=' btn btn-primary mr-3'><FontAwesomeIcon className='icon' icon={faArrowLeft} /> Back to list</button>
            </Link>            
        </div>
    );

}


export default ChannelsTitleComponent;