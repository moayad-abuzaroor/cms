import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MovieTitleComponent from "../shared/movietTitleComponent";
import MoviesNavBar from "../shared/MoviesNavBar";
import { useState } from "react";

function MarketManagerPage({sharedData, setSharedData}) {
    console.log(sharedData)

    const [market, setMarket] = useState(null)

    const handleMarketChange = (e) => {
        setMarket(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(); // Create a FormData object to handle file uploads

        formData.append('movie_title', sharedData.movie_title);
        formData.append('movie_genres', sharedData.movie_genres);

        formData.append('market_manager_country', market);

        // Send the request
        fetch(`http://localhost:8000/api/movie/${sharedData.id}`, {
            method: 'PUT',
            headers: {
                
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data if needed
            console.log('Success:', data);
            setSharedData(data)
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    }

    return (
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
            <div className='row'>
                <div className='col'>
                    <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Movies</span></p>
                </div>
            </div>

            <MovieTitleComponent />

            <div className="row">
                <form onSubmit={handleSubmit} className="col-lg-11 mx-auto market-form addForm">
                    <MoviesNavBar/>
                    <div className="form-row mt-4">
                        <div className="form-group col-md-4">
                            <label className="labelBox">Select Countries</label>
                            <select value={market} onChange={handleMarketChange} className="form-control market-country-select" name="countries">
                                <option selected="false" disabled="disabled">Select Country</option>
                                <option>Country 1</option>
                                <option>Country 2</option>
                            </select>
                        </div>
                    </div>
                    <div className='form-group mt-4'>
                        <input className='btn btn-primary' type='submit' value="Save" />
                        <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MarketManagerPage;
