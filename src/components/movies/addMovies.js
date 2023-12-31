import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MovieTitleComponent from '../shared/movietTitleComponent';
import MoviesNavBar from '../shared/MoviesNavBar';
import { faCircleMinus, faList } from "@fortawesome/free-solid-svg-icons";


function AddMovies({ sharedData, setSharedData }) {

  console.log(sharedData)
  


  const [navbarDisabled, setNavbarDisabled] = useState(sharedData.id == null ? true : false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);

  // if(sharedData.id == null){
  //   const [selectedGenres, setSelectedGenres] = useState([]);
  //   const [statusCheck, setStatusCheck] = useState(false);
  //   const [status, setStatus] = useState('InActive');
  // }
  // else{
  //   const [selectedGenres, setSelectedGenres] = useState([sharedData.movie_genres]);
  //   const [statusCheck, setStatusCheck] = useState(sharedData.movie_status === 'Active');
  //   const [status, setStatus] = useState(sharedData.movie_status);
  // }

  // ...

const initialGenres = sharedData?.id ? sharedData.movie_genres.split(',') : [];
const initialStatusCheck = sharedData?.id ? (sharedData.movie_status === 'Active') : false;
const initialStatus = sharedData?.id ? sharedData.movie_status : 'InActive';
const initialCasts = sharedData?.id ? sharedData.movie_cast : [];
const initialCrew = sharedData?.id ? sharedData.movie_crew : [];



const [selectedGenres, setSelectedGenres] = useState(initialGenres);
const [statusCheck, setStatusCheck] = useState(initialStatusCheck);
const [status, setStatus] = useState(initialStatus);

// ...

  
  const [genre, setGenre] = useState('');
  const [genreOptions, setGenreOptions] = useState([
    'Genres 1',
    'Genres 2',
    'Genres 3'
  ]);
  const [genresRequiredMsg, setGenresRequiredMsg] = useState(false);

  const handleGenreSelect = (e) => {
    const selectedGenre = e.target.value;
    if (selectedGenre && !selectedGenres.includes(selectedGenre)) {
      setSelectedGenres([...selectedGenres, selectedGenre]);
      setGenre(selectedGenre);
    }
    setGenresRequiredMsg(false); // Reset the validation message
  };
  

  const handleRemoveGenre = (genre) => {
    setSelectedGenres(selectedGenres.filter(item => item !== genre));
  };

  


  const handleStatusChange = (e) => {
    const isChecked = e.target.checked;
    setStatusCheck(isChecked);
    if (isChecked) {
      setStatus('Active');
    } else {
      setStatus('InActive');
    }
  };
  
  
  const [crew, setCrew] = useState([]);
  const [crewName, setCrewName] = useState('');
  const [crewRole, setCrewRole] = useState('');

  const handleAddCrew = () => {
    if (crewName && crewRole) {
      setCrew([...crew, { name: crewName, role: crewRole }]);
      setCrewName('');
      setCrewRole('');
    }
  };

  const handleRemoveCrew = (index) => {
    const updatedCrew = [...crew];
    updatedCrew.splice(index, 1);
    setCrew(updatedCrew);
  };

  
  const [casts, setCasts] = useState([]);
  const [castName, setCastName] = useState('');
  const [castRole, setCastRole] = useState('');

  const handleAddCast = () => {
    if (castName && castRole) {
      setCasts([...casts, { name: castName, role: castRole }]);
      setCastName('');
      setCastRole('');
    }
  };

  const handleRemoveCast = (index) => {
    const updatedCasts = [...casts];
    updatedCasts.splice(index, 1);
    setCasts(updatedCasts);
  };

  

  const [movieDetails, setMovieDetails] = useState({
    movie_title: sharedData.movie_title, movie_description: sharedData.movie_description, movie_year: sharedData.movie_year, movie_release_date: sharedData.movie_release_date, movie_rate: sharedData.movie_rate, movie_awards: sharedData.movie_awards, movie_runtime: sharedData.movie_runtime,
    movie_source: sharedData.movie_source, movie_subtitles: sharedData.movie_subtitles, movie_genres: genre, movie_country: sharedData.movie_country, movie_cast: sharedData.movie_cast, movie_crew: sharedData.movie_crew,
    movie_parental_rate: sharedData.movie_parental_rate, movie_language: sharedData.movie_language, movie_status: status, ilike_image: sharedData.ilike_image, jaw_image: sharedData.jaw_image, ministra_image: sharedData.ministra_image, movie_stream_location: sharedData.movie_stream_location, movie_url: sharedData.movie_url,
    movie_protection: sharedData.movie_protection, trailer_stream_location: sharedData.trailer_stream_location, trailer_url: sharedData.trailer_url, trailer_protection: sharedData.trailer_protection, movie_subtitle: sharedData.movie_subtitle, trailer_subtitle: sharedData.trailer_subtitle, subtitles_language: sharedData.subtitles_language,
    market_manager_country: sharedData.market_manager_country
  });


  const [requiredMsg, setRequiredMsg] = useState(false);

  const handleTitleChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_title: e.target.value
    });
    setRequiredMsg(false); // Reset required message when input changes
  };

  const handleDescriptionChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_description: e.target.value
    });
  };

  const handleReleaseDateChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_release_date: e.target.value
    });
  };

  const handleYearChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_year: e.target.value
    });
  };

  const handleRatingChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_rate: e.target.value
    });
  };

  const handleAwardsChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_awards: e.target.value
    });
  };

  const handleRuntimeChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_runtime: e.target.value
    });
  };

  const handleCountryChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_country: e.target.value
    });
  };

  const handleParentalRateChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_parental_rate: e.target.value
    });
  };

  const handleLanguageChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_language: e.target.value
    });
  };

  const handleCastChange = (e) => {
    setMovieDetails({
      ...movieDetails,
      movie_cast: e.target.value
    });
  };

  const handleCrewChange = (e) => {
    console.log('Crew value changed:', e.target.value);
    setMovieDetails({
      ...movieDetails,
      movie_crew: e.target.value
    });
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

  var count = 0;

  const handleSubmit = (e) => {
    e.preventDefault();

    const combinedGenres = selectedGenres.join(', ');
    const combinedCasts = casts.map(member => `${member.name} - ${member.role}`).join(', ');
    const combinedCrew = crew.map(member => `${member.name} - ${member.role}`).join(', ');

    console.log(combinedGenres)
    if (movieDetails.movie_title == '') {
      setRequiredMsg(true);
      count = count + 1;
    } else {
      // Handle form submission
      setRequiredMsg(false);
    }

    if (selectedGenres.length == 0) {
      setGenresRequiredMsg(true);
      count = count + 1;
    } else {
      // Handle form submission
      setGenresRequiredMsg(false);
    }

    if(count == 0){
      setNavbarDisabled(false);
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 5000);
      setMovieDetails({...movieDetails, movie_genres: selectedGenres[0]})
      

      const formData = new FormData(); // Create a FormData object to handle file uploads

      // Add form data to the FormData object
      formData.append('movie_title', movieDetails.movie_title);
      formData.append('movie_description', movieDetails.movie_description);
      if (movieDetails.movie_release_date !== null) formData.append('movie_release_date', movieDetails.movie_release_date);
      if (movieDetails.movie_year !== null) formData.append('movie_year', movieDetails.movie_year);
      if (movieDetails.movie_rate !== null) formData.append('movie_rate', movieDetails.movie_rate);
      if (movieDetails.movie_awards !== null) formData.append('movie_awards', movieDetails.movie_awards);
      if (movieDetails.movie_runtime !== null) formData.append('movie_runtime', movieDetails.movie_runtime);
      if (movieDetails.movie_genres !== null) formData.append('movie_genres', combinedGenres);
      if (movieDetails.movie_country !== null) formData.append('movie_country', movieDetails.movie_country);
      if (movieDetails.movie_parental_rate !== null) formData.append('movie_parental_rate', movieDetails.movie_parental_rate);
      if (movieDetails.movie_language !== null) formData.append('movie_language', movieDetails.movie_language);
      if (movieDetails.movie_status !== null) {formData.append('movie_status', status)} else {formData.append('movie_status', 'InActive')};
      formData.append('movie_cast', combinedCasts);
      formData.append('movie_crew', combinedCrew);
      // ... Add other fields similarly

      // Add files to FormData (assuming ilikeImageFile, jawImageFile, and ministraImageFile are file objects)
      
      if(sharedData.id == null){
        // Send the request
        fetch('http://localhost:8000/api/insert_movie/', {
          method: 'POST',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response data if needed
          console.log('Success:', data);
          setSharedData(data);
        })
        .catch(error => {
          // Handle errors
          console.error('Error:', error);
        });
      }
      else{
        // Send the request
        fetch(`http://localhost:8000/api/movie/${sharedData.id}`, {
          method: 'PUT',
          body: formData,
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response data if needed
          console.log('Success:', data);
          setSharedData(data);
        })
        .catch(error => {
          // Handle errors
          console.error('Error:', error);
        });
      }
    }
    else{
      setShowDangerAlert(true)
      setTimeout(() => {
        setShowDangerAlert(false);
      }, 5000);
    }



    }
  
  

  return (
    <div className='container-fluid bg-light' style={{ padding: '2%', height: '100%'}}>
      <div className='row'>
        <div className='col'>
          <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Movies</span></p>
        </div>
      </div>

      <MovieTitleComponent />

      <div className='row'>

        <form encType="multipart/form-data" onSubmit={handleSubmit} className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}}>
          

            <MoviesNavBar disabled={navbarDisabled}/>

            <div className="line mt-4">
                <p className="lineLabel">Common</p>
            </div>

            <div className='form-row mt-4'>
                <div className='form-group col-md-4'>
                    <label htmlFor="title" className='labelBox'>Title (In English) <span className='text-danger'>*</span></label>
                    <input 
                        id="title"
                        value={movieDetails.movie_title}
                        onChange={handleTitleChange}
                        className={`form-control ${requiredMsg ? 'is-invalid' : ''}`} 
                    />

                    {requiredMsg && <div className='text-danger small'>Required Field</div>}
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Description (In English)</label>
                    <textarea value={movieDetails.movie_description} onChange={handleDescriptionChange} className='form-control'></textarea>
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Release Date</label>
                    <input value={movieDetails.movie_release_date} onChange={handleReleaseDateChange} className='form-control' type='date'/>
                </div>
            </div>

            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Year</label>
                    <input value={movieDetails.movie_year} onChange={handleYearChange} className='form-control' type='number' />
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Rating (out of 10)</label>
                    <input value={movieDetails.movie_rate} onChange={handleRatingChange} className='form-control' type='number' max={10} />
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Awards</label>
                    <input value={movieDetails.movie_awards} onChange={handleAwardsChange} className='form-control' type='text' />
                </div>
            </div>

            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Runtime (In Minutes)</label>
                    <input value={movieDetails.movie_runtime} onChange={handleRuntimeChange} className='form-control' type='number' />
                </div>

                <div className="form-group col-md-4">
                  <label className="labelBox">Genres <span className="text-danger">*</span></label>
                  <select
                    className={`form-control ${genresRequiredMsg ? 'is-invalid' : ''}`}
                    name="Genres"
                    onChange={handleGenreSelect}
                    value="" // This is important to reset the selection after each pick
                     // Allow multiple selections
                  >
                    <option disabled value="">
                      Select Genres
                    </option>
                    {genreOptions.map((genre, index) => (
                      <option key={index} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                  <div className="mt-2">
                    {selectedGenres.map((genre, index) => (
                      <span
                        key={index}
                        className="badge badge-pill badge-primary mr-2"
                        style={{ cursor: 'pointer', color: 'white' }}
                        onClick={() => handleRemoveGenre(genre)}
                      >
                        {genre} <span className="font-weight-bold">x</span>
                      </span>
                    ))}
                  </div>
                  {genresRequiredMsg && <div className="text-danger small">Required Field</div>}
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Countries</label>
                    <div style={{display: 'flex'}}>
                      <select value={movieDetails.movie_country} onChange={handleCountryChange} className='form-control customBorderRight' name='Countries'>
                          <option value='' selected="false" disabled="disabled">Select Countries</option>
                          <option>Country 1</option>
                          <option>Country 2</option>
                          <option>Country 3</option>
                      </select>
                      <button type="button" className="btn btn-danger customBorderLeft" onClick={() => {setMovieDetails({...movieDetails, movie_country: ''})}}>
                          <FontAwesomeIcon icon={faCircleMinus} />
                      </button>
                    </div>
                </div>
            </div>

            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Parental Rating</label>
                    <div style={{display: 'flex'}}>
                      <select value={movieDetails.movie_parental_rate} onChange={handleParentalRateChange} className='form-control customBorderRight' name='parentalRating'>
                          <option value='' selected="false" disabled="disabled">Select a Parental Rating</option>
                          <option>Rate 1</option>
                          <option>Rate 2</option>
                          <option>Rate 3</option>
                      </select>
                      <button type="button" className="btn btn-danger customBorderLeft" onClick={() => {setMovieDetails({...movieDetails, movie_parental_rate: ''})}}>
                          <FontAwesomeIcon icon={faCircleMinus} />
                      </button>
                    </div>
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Original Version Language</label>
                    <div style={{display: 'flex'}}>
                      <select value={movieDetails.movie_language} onChange={handleLanguageChange} className='form-control customBorderRight' name='Genres'>
                          <option value='' selected="false" disabled="disabled">Select a Language</option>
                          <option>Language 1</option>
                          <option>Language 2</option>
                          <option>Language 3</option>
                      </select>
                      <button type="button" className="btn btn-danger customBorderLeft" onClick={() => {setMovieDetails({...movieDetails, movie_language: ''})}}>
                          <FontAwesomeIcon icon={faCircleMinus} />
                      </button>
                    </div>
                </div>

                <div className='form-group col-md-4'>
                    <div className='form-check mt-4'>
                        <input name="status_check" className='form-check-input' type='checkbox' checked={statusCheck} onChange={handleStatusChange} />
                        <label className='form-check-label labelBox'>Active</label>
                    </div>
                </div>
            </div>

            <div className='line mt-4'>
              <p className='lineLabel'>Cast</p>
            </div>

            <div className='form-row mt-3'>
              <div className='form-group col-md-4'>
                <label className='labelBox'>Name</label>
                <input
                  className='form-control'
                  value={castName}
                  onChange={(e) => setCastName(e.target.value)}
                />
              </div>
              <div className='form-group col-md-4'>
                <label className='labelBox'>Role</label>
                <input
                  className='form-control'
                  value={castRole}
                  onChange={(e) => setCastRole(e.target.value)}
                />
              </div>
              <div className='form-group col-md-4' style={{ marginTop: '7px' }}>
                <button
                  type='button'
                  className='btn btn-primary mt-4'
                  onClick={handleAddCast}
                >
                  Add
                </button>
              </div>
            

              <div className='form-group col-md-8'>
                {casts.map((member, index) => (
                  <div key={index} className='mb-2'>
                    <span className="badge badge-pill badge-info mr-2" style={{color:'white', cursor:'pointer'}}>
                      {`${member.name} - ${member.role}`}
                      <span onClick={() => handleRemoveCast(index)} className="font-weight-bold"> x</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className='form-group col-md-8'>
                <textarea
                  className='form-control'
                  value={sharedData.movie_cast}
                  readOnly
                />
              </div>
            </div>

          <div className='line mt-4'>
            <p className='lineLabel'>Crew</p>
          </div>

          <div className='form-row mt-3'>
            <div className='form-group col-md-4'>
              <label className='labelBox'>Name</label>
              <input
                className='form-control'
                value={crewName}
                onChange={(e) => setCrewName(e.target.value)}
              />
            </div>
            <div className='form-group col-md-4'>
              <label className='labelBox'>Role</label>
              <input
                className='form-control'
                value={crewRole}
                onChange={(e) => setCrewRole(e.target.value)}
              />
            </div>
            <div className='form-group col-md-4' style={{ marginTop: '7px' }}>
              <button
                type='button'
                className='btn btn-primary mt-4'
                onClick={handleAddCrew}
              >
                Add
              </button>
            </div>
          

            <div className='form-group col-md-8'>
              {crew.map((member, index) => (
                <div key={index} className='mb-2'>
                  <span className="badge badge-pill badge-info mr-2" style={{color:'white', cursor:'pointer'}}>
                    {`${member.name} - ${member.role}`}
                    <span onClick={() => handleRemoveCrew(index)} className="font-weight-bold"> x</span>
                  </span>
                </div>
              ))}
            </div>

            <div className='form-group col-md-8'>
              <textarea
                className='form-control'
                value={sharedData.movie_crew}
                readOnly
              />
            </div>
          </div>

          <div className='form-group'>
            <input className='btn btn-primary' type='submit' value="Save" />
            <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
          </div>

        </form>
        {showSuccessAlert && (
          <div className="alert alert-success fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
            Metadata added successfully
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

export default AddMovies;
