import React from "react";
import '../../stylesheets/titleComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function MovieTitleComponent(){
    
    return(
        <div className='backDiv'>
            <div className='headerDiv'>
                <p className='headerText'>Movie</p>
            </div>
            <button className='backButton'><FontAwesomeIcon className='icon' icon={faArrowLeft} /> Back to list</button>
        </div>
    );

}


export default MovieTitleComponent;