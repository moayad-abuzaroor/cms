import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieTitleComponent from '../shared/movietTitleComponent';
import MoviesNavBar from '../shared/MoviesNavBar';

function VideoSources({sharedData, setSharedData}) {

    console.log(sharedData)

    const [movieStreamLocation, setMovieStreamLocation] = useState(null);
    const [movieLocationRequiredMsg, setMovieLocationRequiredMsg] = useState(false);

    const handleMovieStreamLocationChange = (e) => {
        setMovieStreamLocation(e.target.value);
        setMovieLocationRequiredMsg(false); // Reset required message when input changes
    };

    const [movieUrlPath, setMovieUrlPath] = useState('');
    const [movieUrlRequiredMsg, setMovieUrlRequiredMsg] = useState(false);

    const handleMovieUrlChange = (e) => {
        setMovieUrlPath(e.target.value);
        setMovieUrlRequiredMsg(false); // Reset required message when input changes
    };

    const [movieProtection, setMovieProtection] = useState(null);
    const [movieProtectionRequiredMsg, setMovieProtectionRequiredMsg] = useState(false);

    const handleMovieProtectionChange = (e) => {
        setMovieProtection(e.target.value);
        setMovieProtectionRequiredMsg(false); // Reset required message when input changes
    };

    const [trailerStreamLocation, setTrailerStreamLocation] = useState(null);
    const [trailerLocationRequiredMsg, setTrailerLocationRequiredMsg] = useState(false);

    const handleTrailerStreamLocationChange = (e) => {
        setTrailerStreamLocation(e.target.value);
        setTrailerLocationRequiredMsg(false); // Reset required message when input changes
    };

    const [trailerUrlPath, setTrailerUrlPath] = useState('');
    const [trailerUrlRequiredMsg, setTrailerUrlRequiredMsg] = useState(false);

    const handleTrailerUrlChange = (e) => {
        setTrailerUrlPath(e.target.value);
        setTrailerUrlRequiredMsg(false); // Reset required message when input changes
    };

    const [trailerProtection, setTrailerProtection] = useState(null);
    const [trailerProtectionRequiredMsg, setTrailerProtectionRequiredMsg] = useState(false);

    const handleTrailerProtectionChange = (e) => {
        setTrailerProtection(e.target.value);
        setTrailerProtectionRequiredMsg(false); // Reset required message when input changes
    };

    var count = 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (movieStreamLocation == null) {
            setMovieLocationRequiredMsg(true);
            count = count + 1;
        } else {
            // Handle form submission
            setMovieLocationRequiredMsg(false);
        }

        if (movieUrlPath.trim() === '') {
            setMovieUrlRequiredMsg(true);
            count = count + 1;
        } else {
            // Handle form submission
            setMovieUrlRequiredMsg(false);
        }

        if (movieProtection == null) {
            setMovieProtectionRequiredMsg(true);
            count = count + 1;
        } else {
            // Handle form submission
            setMovieProtectionRequiredMsg(false);
        }

        if (trailerStreamLocation == null) {
            setTrailerLocationRequiredMsg(true);
            count = count + 1;
        } else {
            // Handle form submission
            setTrailerLocationRequiredMsg(false);
        }

        if (trailerUrlPath.trim() === '') {
            setTrailerUrlRequiredMsg(true);
            count = count + 1;
        } else {
            // Handle form submission
            setTrailerUrlRequiredMsg(false);
        }

        if (trailerProtection == null) {
            setTrailerProtectionRequiredMsg(true);
            count = count + 1;
        } else {
            // Handle form submission
            setTrailerProtectionRequiredMsg(false);
        }

        if(count == 0){
            const formData = new FormData();

            formData.append('movie_title', sharedData.movie_title);
            formData.append('movie_genres', sharedData.movie_genres);

            formData.append('movie_stream_location', movieStreamLocation);
            formData.append('movie_url', movieUrlPath);
            formData.append('movie_protection', movieProtection);

            formData.append('trailer_stream_location', trailerStreamLocation);
            formData.append('trailer_url', trailerUrlPath);
            formData.append('trailer_protection', trailerProtection);

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
    };

    return (
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
            <div className="row">
                <div className="col">
                    <p className="pathText">Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Movies</span></p>
                </div>
            </div>

            <MovieTitleComponent />

            <div className="row">
                <form className="col-lg-11 mx-auto addForm" style={{backgroundColor: 'white'}} onSubmit={handleSubmit}>

                    <MoviesNavBar/>

                    <div className="line mt-4">
                        <p className="lineLabel">Movie Source</p>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="labelBox">Stream Location <span className="text-danger">*</span></label>
                            <select
                              value={movieStreamLocation}
                              onChange={handleMovieStreamLocationChange}
                              className={`form-control ${movieLocationRequiredMsg ? 'is-invalid' : ''}`} 
                              name="StreamLocation"
                              >
                                <option selected="false" disabled="disabled">Select Stream Location</option>
                                <option>VOD Streaming 15</option>
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select>
                            {movieLocationRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className="form-group col-md-6">
                            <label className="labelBox">URL/Path <span className="text-danger">*</span></label>
                            <input value={movieUrlPath} onChange={handleMovieUrlChange} className={`form-control ${movieUrlRequiredMsg ? 'is-invalid' : ''}`} />
                            {movieUrlRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="labelBox">Protection <span className="text-danger">*</span></label>
                            <select value={movieProtection} onChange={handleMovieProtectionChange} name="Protection"
                                className={`form-control ${movieProtectionRequiredMsg ? 'is-invalid' : ''}`}
                            >
                                <option selected="false" disabled="disabled">Select a Protection</option>
                                <option>nimble</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select>
                            {movieProtectionRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className="form-group col-md-6">
                            <label className="labelBox">DRM Content ID</label>
                            <input className="form-control" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="labelBox">Contain Video Profiles</label>
                            <div className="check">
                                <input type="checkbox" />
                                <input className="form-control" placeholder="Search" />
                            </div>
                        </div>
                    </div>

                    <div className="line mt-4">
                        <p className="lineLabel">Trailer Source</p>
                    </div>

                    <div className="form-row mt-4">
                        <div className="form-group col-md-6">
                            <label className="labelBox">Stream Location <span className="text-danger">*</span></label>
                            <select value={trailerStreamLocation} onChange={handleTrailerStreamLocationChange} name="TrailerStreamLocation"
                                className={`form-control ${trailerLocationRequiredMsg ? 'is-invalid' : ''}`}
                            >
                                <option selected="false" disabled="disabled">Select Stream Location</option>
                                <option>VOD Streaming15</option>
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select>
                            {trailerLocationRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className="form-group col-md-6">
                            <label className="labelBox">URL/Path <span className="text-danger">*</span></label>
                            <input value={trailerUrlPath} onChange={handleTrailerUrlChange} className={`form-control ${trailerUrlRequiredMsg ? 'is-invalid' : ''}`} />
                            {trailerUrlRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="labelBox">Protection <span className="text-danger">*</span></label>
                            <select value={trailerProtection} onChange={handleTrailerProtectionChange}
                             className={`form-control ${trailerProtectionRequiredMsg ? 'is-invalid' : ''}`} name="TrailerProtection" >
                                <option selected="false" disabled="disabled">Select a Protection</option>
                                <option>nimble</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select>
                            {trailerProtectionRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className="form-group col-md-6">
                            <label className="labelBox">DRM Content ID</label>
                            <input className="form-control" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="labelBox">Contain Video Profiles</label>
                            <div className="check">
                                <input type="checkbox" />
                                <input className="form-control" placeholder="Search" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group mt-4">
                        <input className="btn btn-primary" type="submit" value="Save" />
                        <button type='button' className="btn btn-secondary ml-1">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VideoSources;
