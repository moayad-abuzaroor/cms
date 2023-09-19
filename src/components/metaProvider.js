import React from "react";
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/metaProvider.css'
import { Button } from "bootstrap";


function MetaProvider(){

    return(
        <div className="provider-container">
            <div className='path'>
                <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>Tv Shows</span></p>
            </div>
            <div className='backDiv'>
                <div className='headerDiv'>
                    <p className='headerText'>Tv Show</p>
                </div>                
                <button className='backButton'><FontAwesomeIcon className='icon' icon={faArrowLeft} />Back to list</button>
            </div>

            <div className="provider-form">
                <div className="provider-form-input-div">
                    <label className="labelBox">Metadata Provider <span className="labelStar">*</span></label>
                    <select className='provider-select' name='provider-meta'>
                        <option>OMDB API</option>
                        <option>IMDB API</option>
                    </select>
                </div> 
                <div className="provider-form-input-div">
                    <label className="labelBox">Title <span className="labelStar">*</span></label>
                    <input className="provider-inputBox" />
                </div>
                <div className="provider-buttons-div">
                    <button className="provider-search-button">Search</button>
                    <button className="provider-skip-button">Skip</button>
                </div>               
            </div>
        </div>
    );

}

export default MetaProvider;