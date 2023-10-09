import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import MovieTitleComponent from '../shared/movietTitleComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import MoviesNavBar from '../shared/MoviesNavBar';

function MovieGraphics({sharedData, setSharedData}) {

    console.log(sharedData)

    const [backendSelectedImageILike, setBackendSelectedImageILike] = useState(null);
    const [backendSelectedImageJaw, setBackendSelectedImageJaw] = useState('');
    const [backendSelectedImageMin, setBackendSelectedImageMin] = useState('');

    const [selectedImageILike, setSelectedImageILike] = useState(null);
    const [selectedImageJaw, setSelectedImageJaw] = useState('');
    const [selectedImageMin, setSelectedImageMin] = useState('');

    const [selectedApp, setSelectedApp] = useState(""); // Initialize with an empty string

    const handleSelectChange = (e) => {
        setSelectedApp(e.target.value);
    };

    const [graphics, setGraphics] = useState({
        ilike_image: '', jaw_image: '', ministra_image: ''
    })

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

    
          reader.onload = () => {
            if(selectedApp === 'All'){
                setBackendSelectedImageILike(file);
                setBackendSelectedImageJaw(file);
                setBackendSelectedImageMin(file);
                setSelectedImageILike(reader.result);
                setSelectedImageJaw(reader.result);
                setSelectedImageMin(reader.result);
                setGraphics({
                    ...graphics,
                    ilike_image: selectedImageILike,
                    jaw_image: selectedImageJaw,
                    ministra_image: selectedImageMin
                });
            }
            if(selectedApp === 'iLike 3.0'){
                setBackendSelectedImageILike(file);
                setGraphics({...graphics, ilike_image: selectedImageILike});
                setSelectedImageILike(reader.result);
            }
            if(selectedApp === 'JAW TV'){
                setBackendSelectedImageJaw(file);
                setGraphics({...graphics, jaw_image: selectedImageJaw});
                setSelectedImageJaw(reader.result);
            }
            if(selectedApp === 'Ministra'){
                setBackendSelectedImageMin(file);
                setGraphics({...graphics, ministra_image: selectedImageMin});
                setSelectedImageMin(reader.result);
            }
          };
    
         if (file) {
             reader.readAsDataURL(file);
         }

        
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedImageILike)
        const formData = new FormData(); // Create a FormData object to handle file uploads
        const boundary = formData._boundary; 

        // Add form data to the FormData object
        formData.append('movie_title', sharedData.movie_title);
        formData.append('movie_genres', sharedData.movie_genres);
    
        // Add files to FormData (assuming ilikeImageFile, jawImageFile, and ministraImageFile are file objects)
            formData.append('ilike_image', backendSelectedImageILike);
            formData.append('jaw_image', backendSelectedImageJaw);
            formData.append('ministra_image', backendSelectedImageMin);
    
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
                <form  onSubmit={handleSubmit} className='col-lg-11 mx-auto addForm' style={{ backgroundColor: 'white' }}>

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

                    <div className='form-group mt-4'>
                        <input className='btn btn-primary' type='submit' value="Save" />
                        <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
                    </div>

                </form>
                
            </div>
        </div>
    );
}

export default MovieGraphics;
