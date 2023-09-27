import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MovieTitleComponent from "../shared/movietTitleComponent";
import MoviesNavBar from "../shared/MoviesNavBar";

function MarketManagerPage() {
    return (
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
            <div className='row'>
                <div className='col'>
                    <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Movies</span></p>
                </div>
            </div>

            <MovieTitleComponent />

            <div className="row">
                <form className="col-lg-11 mx-auto market-form addForm">
                    <MoviesNavBar/>
                    <div className="form-row mt-4">
                        <div className="form-group col-md-4">
                            <label className="labelBox">Select Countries</label>
                            <select className="form-control market-country-select" name="countries">
                                <option selected="false" disabled="disabled">Select Country</option>
                                <option>Country 1</option>
                                <option>Country 2</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MarketManagerPage;
