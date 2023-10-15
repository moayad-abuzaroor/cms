import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add Bootstrap CSS
import MovieTitleComponent from '../shared/movietTitleComponent';
import '../../stylesheets/subtitlesPage.css'
import MoviesNavBar from '../shared/MoviesNavBar';

function SubtitlesPage({sharedData, setSharedData}) {
    console.log(sharedData)
    const [subtitles, setSubtitles] = useState([
        {
            locale: 'ar',
            movie_src: 'Tiger24',
            trailer_src: 'NA',
            created: '8/2/23, 11:22 AM',
            modified: '8/2/23, 11:22 AM'
        },
        {
            locale: 'en',
            movie_src: 'Tiger24',
            trailer_src: 'NA',
            created: '8/2/23, 11:23 AM',
            modified: '8/2/23, 11:23 AM'
        }
    ]);

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);

    const [movieSubtitle, setMovieSubtitle] = useState('');
    const [movieSubtitleRequiredMsg, setMovieSubtitleRequiredMsg] = useState(false);

    const handleMovieSubtitleChange = (e) => {
        setMovieSubtitle(e.target.files[0]);
        setMovieSubtitleRequiredMsg(false); // Reset required message when input changes
    };

    const [trailerSubtitle, setTrailerSubtitle] = useState('');

    const handleTrailerSubtitleChange = (e) => {
        setTrailerSubtitle(e.target.files[0]);
    };

    const [language, setLanguage] = useState(null);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    var count = 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (movieSubtitle == '') {
            setMovieSubtitleRequiredMsg(true);
            count = count + 1;
        } else {
        // Handle form submission
            setMovieSubtitleRequiredMsg(false);
        }

        if(count == 0){
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShowSuccessAlert(false);
            }, 5000);
            const formData = new FormData(); // Create a FormData object to handle file uploads

            formData.append('movie_title', sharedData.movie_title);
            formData.append('movie_genres', sharedData.movie_genres);

            formData.append('movie_subtitle', movieSubtitle);
            formData.append('trailer_subtitle', trailerSubtitle);
            formData.append('subtitles_language', language)

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
        else{
            setShowDangerAlert(true)
            setTimeout(() => {
                setShowDangerAlert(false);
            }, 5000);
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

            <div className="row justify-content-center">
                <form className='col-lg-11 mx-auto addForm' onSubmit={handleSubmit}>

                    <MoviesNavBar/>

                    {/* Movie Source */}
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className='line'>
                                <p className='lineLabel'>Movie Source</p>
                            </div>
                            <div className='form-group mt-2'>
                                <label className='labelBox'>Movie Subtitle <span className='text-danger'>*</span></label>
                                <div className="form-group col-md-6">
                                    <div className="input-group">
                                        <div className="custom-file">
                                        <input                                       
                                            onChange={handleMovieSubtitleChange}
                                            type="file" className={`custom-file-input ${movieSubtitleRequiredMsg ? 'is-invalid' : ''}`}
                                            id="movieSubtitleUpload" accept=".srt,.sub,.sbv,.smi,.vtt" />
                                            <label className="custom-file-label" htmlFor="movieSubtitleUpload">{movieSubtitle.name || 'Browse'}</label>
                                        </div>                                        
                                    </div>
                                    {movieSubtitleRequiredMsg && <div className='text-danger small'>Required Field</div>}
                                </div>
                                <div className='sub-allowed' style={{ paddingTop: '8px' }}>
                                    <span>Allowed Extensions</span>
                                    <span className='sub-file-allowed'>.srt</span>
                                    <span className='sub-file-allowed'>.sub</span>
                                    <span className='sub-file-allowed'>.sbv</span>
                                    <span className='sub-file-allowed'>.smi</span>
                                    <span className='sub-file-allowed'>.vtt</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className='line'>
                                <p className='lineLabel'>Trailer Source</p>
                            </div>
                            <div className='form-group mt-2'>
                                <label className='labelBox'>Trailer Subtitle</label>
                                <div className="form-group col-md-6">
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input type="file"
                                             onChange={handleTrailerSubtitleChange}
                                             className="custom-file-input" id="trailerSubtitleUpload" accept=".srt,.sub,.sbv,.smi,.vtt" />
                                            <label className="custom-file-label" htmlFor="trailerSubtitleUpload">{trailerSubtitle.name || 'Browse'}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='sub-allowed' style={{ paddingTop: '8px' }}>
                                    <span>Allowed Extensions</span>
                                    <span className='sub-file-allowed'>.srt</span>
                                    <span className='sub-file-allowed'>.sub</span>
                                    <span className='sub-file-allowed'>.sbv</span>
                                    <span className='sub-file-allowed'>.smi</span>
                                    <span className='sub-file-allowed'>.vtt</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='line'>
                        <p className='lineLabel'>Language</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            
                            <div className='form-group mt-4'>
                                <select value={language} onChange={handleLanguageChange} className='form-control' name='sub-language'>
                                    <option selected="false" disabled="disabled">Select a Language</option>
                                    <option>Arabic</option>
                                    <option>English</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <button type="submit" className="btn btn-primary mt-4">Add</button>
                        </div>
                    </div>

                    <div className='line mt-4'>
                        <p className='lineLabel'>Subtitle Details</p>
                    </div>

                    <div className="table-responsive mt-4">
                        <table className='table'>
                            <thead className='thead-dark'>
                                <tr className="text-center align-middle">
                                    <th className='text-center' scope='col'>Locale</th>
                                    <th className='text-center' scope='col'>Movie SRC</th>
                                    <th className='text-center' scope='col'>Trailer SRC</th>
                                    <th className='text-center' scope='col'>Created</th>
                                    <th className='text-center' scope='col'>Modified</th>
                                    <th className='text-center' scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subtitles.map((subtitle, index) => (
                                    <tr className="text-center align-middle" key={index}>
                                        <td className='align-middle'>{subtitle.locale}</td>
                                        <td className='align-middle'>{subtitle.movie_src}</td>
                                        <td className='align-middle'>{subtitle.trailer_src}</td>
                                        <td className='align-middle'>{subtitle.created}</td>
                                        <td className='align-middle'>{subtitle.modified}</td>
                                        <td className='align-middle'>
                                            <FontAwesomeIcon className='icon mx-1' icon={faEdit} />
                                            <FontAwesomeIcon className='icon mx-1' icon={faTrash} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='form-group mt-4'>
                        <input className='btn btn-primary' type='submit' value="Save" />
                        <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
                    </div>
                </form>
                {showSuccessAlert && (
                    <div className="alert alert-success fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Subtitles added successfully
                    </div>
                )}
                {showDangerAlert && (
                    <div class="alert alert-danger fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Please fill the required fields!
                    </div>
                )}
            </div>
        </div>
    );
}

export default SubtitlesPage;
