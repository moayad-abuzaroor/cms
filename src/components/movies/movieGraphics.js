import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import MovieTitleComponent from '../shared/movietTitleComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import MoviesNavBar from '../shared/MoviesNavBar';

function MovieGraphics() {
    const [selectedImageILike, setSelectedImageILike] = useState(null);
    const [selectedImageJaw, setSelectedImageJaw] = useState(null);
    const [selectedImageMin, setSelectedImageMin] = useState(null);

    const [selectedApp, setSelectedApp] = useState(""); // Initialize with an empty string

    const handleSelectChange = (e) => {
        setSelectedApp(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            if(selectedApp == 'All'){
                setSelectedImageILike(reader.result);
                setSelectedImageJaw(reader.result);
                setSelectedImageMin(reader.result);
            }
            if(selectedApp == 'iLike 3.0'){
                setSelectedImageILike(reader.result);
            }
            if(selectedApp == 'JAW TV'){
                setSelectedImageJaw(reader.result);
            }
            if(selectedApp == 'Ministra'){
                setSelectedImageMin(reader.result);
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='container-fluid bg-light' style={{ padding: '2%', height: '100%' }}>
            <div className='row'>
                <div className='col'>
                    <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Movies</span></p>
                </div>
            </div>

            <MovieTitleComponent />

            <div className='row'>
                <form className='col-lg-11 mx-auto addForm' style={{ backgroundColor: 'white' }}>

                    <MoviesNavBar/>

                    <div className='form-row mt-4'>
                        <div className='form-group col-md-6'>
                            <select className='form-control' name='apps' onChange={handleSelectChange}>
                                <option hidden>Select App</option>
                                <option value='All'>All</option>
                                <option value='iLike 3.0'>iLike 3.0</option>
                                <option value='JAW TV'>JAW TV</option>
                                <option value='Ministra'>Ministra</option>
                            </select>
                        </div>
                        <div className='form-group col-md-6'>
                            <div className='input-group'>
                                <div className='custom-file'>
                                    <input type='file' className='custom-file-input' id='file-upload' accept='image/*' onChange={handleImageUpload} />
                                    <label className='custom-file-label' htmlFor='file-upload'>Browse</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='line mt-3'>
                        <p className='lineLabel'>iLike 3.0</p>
                    </div>

                    <div className='form-row'>
                        {selectedImageILike && <img src={selectedImageILike} alt='Selected' className='image' />}
                    </div>

                    <div className='line mt-4'>
                        <p className='lineLabel'>JAW TV</p>
                    </div>

                    <div className='form-row'>
                        {selectedImageJaw && <img src={selectedImageJaw} alt='Selected' className='image' />}
                    </div>

                    <div className='line mt-4'>
                        <p className='lineLabel'>Ministra</p>
                    </div>

                    <div className='form-row'>
                        {selectedImageMin && <img src={selectedImageMin} alt='Selected' className='image' />}
                    </div>

                    <div className='graphics' style={{ paddingTop: '20px' }}>
                        <span>Allowed Extensions</span>
                        <span className='graphics-allowed ml-1'>.jpg</span>
                        <span className='graphics-allowed'>.png</span>
                        <span className='graphics-allowed'>.jpeg</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MovieGraphics;
