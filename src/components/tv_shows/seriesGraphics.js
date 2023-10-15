import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../../stylesheets/graphics.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import MovieTitleComponent from '../shared/movietTitleComponent';
import TvShowTitleComponent from '../shared/tvShowsTitleComponent';
import TvShowsNavBar from '../shared/TvShowsNavBar';


function SeriesGraphics({ sharedData, setSharedData }){

    console.log(sharedData)

    const [backendSelectedImageILike, setBackendSelectedImageILike] = useState(null);
    const [backendSelectedImageJaw, setBackendSelectedImageJaw] = useState('');
    const [backendSelectedImageMin, setBackendSelectedImageMin] = useState('');

    const [selectedImageILike, setSelectedImageILike] = useState(sharedData.ilike_image);
    const [selectedImageJaw, setSelectedImageJaw] = useState(sharedData.jaw_image);
    const [selectedImageMin, setSelectedImageMin] = useState(sharedData.ministra_image);

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);

    const [selectedApp, setSelectedApp] = useState(""); // Initialize with an empty string

    const handleSelectChange = (e) => {
        setSelectedApp(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            if(selectedApp == 'All'){
                setBackendSelectedImageILike(file);
                setBackendSelectedImageJaw(file);
                setBackendSelectedImageMin(file);
                setSelectedImageILike(reader.result);
                setSelectedImageJaw(reader.result);
                setSelectedImageMin(reader.result);
            }
            if(selectedApp == 'iLike 3.0'){
                setBackendSelectedImageILike(file);
                setSelectedImageILike(reader.result);
            }
            if(selectedApp == 'JAW TV'){
                setBackendSelectedImageJaw(file);
                setSelectedImageJaw(reader.result);
            }
            if(selectedApp == 'Ministra'){
                setBackendSelectedImageMin(file);
                setSelectedImageMin(reader.result);
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(selectedApp == ''){
            setShowDangerAlert(true)
            setTimeout(() => {
            setShowDangerAlert(false);
        }, 5000);
        }
        else{
            setShowSuccessAlert(true);
            setTimeout(() => {
            setShowSuccessAlert(false);
        }, 5000);
        }

        const formData = new FormData(); // Create a FormData object to handle file uploads

        // Add form data to the FormData object
        formData.append('tvshow_title', sharedData.tvshow_title);
        formData.append('tvshow_genres', sharedData.tvshow_genres);
    
        // Add files to FormData (assuming ilikeImageFile, jawImageFile, and ministraImageFile are file objects)
            formData.append('ilike_image', backendSelectedImageILike);
            formData.append('jaw_image', backendSelectedImageJaw);
            formData.append('ministra_image', backendSelectedImageMin);
    
        // Send the request
        fetch(`http://localhost:8000/api/tvshow/${sharedData.id}`, {
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
    };

    return(
        <div className='container-fluid bg-light' style={{ padding: '2%', height: '100%'}}>
            <div className='row'>
                <div className='col'>
                    <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>TV Shows</span></p>
                </div>
            </div>

            <TvShowTitleComponent />

            <div className='row'>
                <form onSubmit={handleSubmit} className='col-lg-11 mx-auto addForm' style={{ backgroundColor: 'white' }}>

                    <TvShowsNavBar/>

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
                    <div className='form-group mt-4'>
                        <input className='btn btn-primary' type='submit' value="Save" />
                        <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
                    </div>
                </form>
                {showSuccessAlert && (
                    <div className="alert alert-success fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Graphics added successfully
                    </div>
                )}
                {showDangerAlert && (
                    <div class="alert alert-danger fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Please select app!
                    </div>
                )}
            </div>
        </div>
    );

}

export default SeriesGraphics;