import React from "react";
import '../../stylesheets/titleComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'



function MovieTitleComponent(){
    
    return(
        <div className='backDiv'>
            <div className='headerDiv'>
                <p className='headerText mt-3'>Movie</p>
            </div>
            <Link to='/dashboard/media/movies'>
                <button className=' btn btn-primary mr-3'><FontAwesomeIcon className='icon' icon={faArrowLeft} /> Back to list</button>
            </Link>            
        </div>
    );

}


export default MovieTitleComponent;