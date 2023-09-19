import React from "react";
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/marketManagerPage.css'
import MovieTitleComponent from "../shared/movietTitleComponent";


function MarketManagerPage(){

    return(
        <div className="market-container">
            <div className='path'>
                <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>Movies</span></p>
            </div>
            
            <MovieTitleComponent/>

            <div className="market-form">
                <select className='market-country-select' name='sub-language'>
                    <option>Select Countries</option>
                    <option>Country</option>
                </select>
            </div>
        </div>
    );

}

export default MarketManagerPage;