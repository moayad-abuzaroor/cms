import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TvShowTitleComponent from '../shared/tvShowsTitleComponent';
import TvShowsNavBar from '../shared/TvShowsNavBar';

function AddTvShow({ sharedData, setSharedData }) {

  console.log(sharedData)

  const initialGenres = sharedData?.id ? sharedData.tvshow_genres.split(',') : [];
  const initialStatusCheck = sharedData?.id ? (sharedData.tvshow_status === 'Active') : false;
  const initialStatus = sharedData?.id ? sharedData.tvshow_status : 'InActive';

  const [selectedGenres, setSelectedGenres] = useState(initialGenres);
  const [statusCheck, setStatusCheck] = useState(initialStatusCheck);
  const [status, setStatus] = useState(initialStatus);

  

    const [navbarDisabled, setNavbarDisabled] = useState(sharedData.id == null ? true : false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);

    const [requiredMsg, setRequiredMsg] = useState(false);


    const [crewName, setCrewName] = useState('');
    const [crewRole, setCrewRole] = useState('');
    const [crewTags, setCrewTags] = useState([]);

    const handleAddCrewTag = () => {
        if (crewName && crewRole) {
        setCrewTags([...crewTags, { crewName, crewRole }]);
        setCrewName('');
        setCrewRole('');
        }
    };

    const handleRemoveCrewTag = (index) => {
        const updatedTags = [...crewTags];
        updatedTags.splice(index, 1);
        setCrewTags(updatedTags);
    };

    
    const [castName, setCastName] = useState('');
    const [castRole, setCastRole] = useState('');
    const [castTags, setCastTags] = useState([]);

    const handleAddCastTag = () => {
        if (castName && castRole) {
        setCastTags([...castTags, { castName, castRole }]);
        setCastName('');
        setCastRole('');
        }
    };

    const handleRemoveCastTag = (index) => {
        const updatedTags = [...castTags];
        updatedTags.splice(index, 1);
        setCastTags(updatedTags);
    };

    const [genre, setGenre] = useState('');
    const [genreOptions, setGenreOptions] = useState([
        'Genres 1',
        'Genres 2',
        'Genres 3',
        'مسلسلات تركية',
        'Action',
        'Crime',
        'Comedy',
        'Sci-Fi',
        'Adventure',
        'Drama',
        'مسلسلات عربية',
        'Arabic Movies',
        'تركي مدبلج',
        'Family Movies',
        'Kids',
        'Anime',
        'افلام تركية',
        'رمضان سنوات سابقة',
        'History',
        'Sports'
    ]);
    const [genresRequiredMsg, setGenresRequiredMsg] = useState(false);

    const handleGenreSelect = (e) => {
        const selectedGenre = e.target.value;
        if (selectedGenre && !selectedGenres.includes(selectedGenre)) {
        setSelectedGenres([...selectedGenres, selectedGenre]);
        setGenre(selectedGenre)
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

    const [tvshows, setTvshows] = useState({tvshow_title: sharedData.tvshow_title, tvshow_seasons: sharedData.tvshow_seasons, tvshow_episodes: sharedData.tvshow_episodes,
      tvshow_year: sharedData.tvshow_year, tvshow_genres: genre,
      tvshow_status: status, tvshow_description: sharedData.tvshow_description,
      tvshow_first_date: sharedData.tvshow_first_date, tvshow_last_date: sharedData.tvshow_last_date, tvshow_rate: sharedData.tvshow_rate,
      tvshow_awards: sharedData.tvshow_awards, tvshow_parental_rate: sharedData.tvshow_parental_rate,
      tvshow_country: sharedData.tvshow_country, tvshow_language: sharedData.tvshow_language,
      tvshow_stream_location: sharedData.tvshow_stream_location, tvshow_url: sharedData.tvshow_url, tvshow_protection: sharedData.tvshow_protection,
      ilike_image: sharedData.ilike_image, jaw_image: sharedData.jaw_image, ministra_image: sharedData.ministra_image, seasons: sharedData.seasons
   })

   const handleTitleChange = (e) => {
    setRequiredMsg(false); // Reset required message when input changes

    // Update tvshows state
    setTvshows(prevState => ({
      ...prevState,
      tvshow_title: e.target.value
    }));
  };

    const handleDescriptionChange = (e) => {
      // Update description state
      setTvshows(prevState => ({
        ...prevState,
        tvshow_description: e.target.value
      }));
    };

    const handleYearChange = (e) => {
      // Update year state
      setTvshows(prevState => ({
        ...prevState,
        tvshow_year: e.target.value
      }));
    };

    const handleFirstAirDateChange = (e) => {
      // Update first air date state
      setTvshows(prevState => ({
        ...prevState,
        tvshow_first_date: e.target.value
      }));
    };

    const handleLastAirDateChange = (e) => {
      // Update last air date state
      setTvshows(prevState => ({
        ...prevState,
        tvshow_last_date: e.target.value
      }));
    };

    const handleRatingChange = (e) => {
      // Update rating state
      setTvshows(prevState => ({
        ...prevState,
        tvshow_rate: e.target.value
      }));
    };

    const handleAwardsChange = (e) => {
      // Update rating state
      setTvshows(prevState => ({
        ...prevState,
        tvshow_awards: e.target.value
      }));
    };

    const handleParentalRatingChange = (e) => {
      // Update rating state
      setTvshows(prevState => ({
        ...prevState,
        tvshow_parental_rate: e.target.value
      }));
    };

    const handleCountryChange = (e) => {
      // Update rating state
      setTvshows(prevState => ({
        ...prevState,
        tvshow_country: e.target.value
      }));
    };

    const handleLanguageChange = (e) => {
      // Update rating state
      setTvshows(prevState => ({
        ...prevState,
        tvshow_language: e.target.value
      }));
    };

    var count = 0;

    const handleSubmit = (e) => {
        e.preventDefault();

        const combinedGenres = selectedGenres.join(', ');

        if (tvshows.tvshow_title == null) {
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
          setNavbarDisabled(false)
          setShowSuccessAlert(true);
          setTimeout(() => {
            setShowSuccessAlert(false);
          }, 5000);
          setTvshows({...tvshows, tvshow_genres: selectedGenres[0]})

          const formData = new FormData(); // Create a FormData object to handle file uploads

          if (tvshows.tvshow_title !== null) formData.append('tvshow_title', tvshows.tvshow_title);
          if (tvshows.tvshow_description !== null) formData.append('tvshow_description', tvshows.tvshow_description);
          if (tvshows.tvshow_year !== null) formData.append('tvshow_year', tvshows.tvshow_year);
          if (tvshows.tvshow_first_date !== null) formData.append('tvshow_first_date', tvshows.tvshow_first_date);
          if (tvshows.tvshow_last_date !== null) formData.append('tvshow_last_date', tvshows.tvshow_last_date);
          if (tvshows.tvshow_rate !== null) formData.append('tvshow_rate', tvshows.tvshow_rate);
          if (tvshows.tvshow_awards !== null) formData.append('tvshow_awards', tvshows.tvshow_awards);
          if (tvshows.tvshow_genres !== null) formData.append('tvshow_genres', combinedGenres);
          if (tvshows.tvshow_parental_rate !== null) formData.append('tvshow_parental_rate', tvshows.tvshow_parental_rate);
          if (tvshows.tvshow_country !== null) formData.append('tvshow_country', tvshows.tvshow_country);
          if (tvshows.tvshow_language !== null) formData.append('tvshow_language', tvshows.tvshow_language);
          if (tvshows.tvshow_title !== null) formData.append('tvshow_status', status);


          if(sharedData.id == null){
            // Send the request
            fetch('http://localhost:8000/api/insert_tvshow/', {
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
            fetch(`http://localhost:8000/api/tvshow/${sharedData.id}`, {
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
    };

  return (
    <div className='container-fluid bg-light' style={{ padding: '2%', height: '100%'}}>
      <div className='row'>
        <div className='col'>
          <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>TV Shows</span></p>
        </div>
      </div>

      <TvShowTitleComponent />

      <div className='row'>

        <form className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}} onSubmit={handleSubmit}>

            <TvShowsNavBar disabled={navbarDisabled}/>

            <div className='line mt-4'>
                <p className='lineLabel'>Common</p>
            </div>

            <div className='form-row mt-4'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Title (In English) <span className='text-danger'>*</span></label>
                    <input value={tvshows.tvshow_title} onChange={handleTitleChange} className={`form-control ${requiredMsg ? 'is-invalid' : ''}`} />
                    {requiredMsg && <div className='text-danger small'>Required Title</div>}
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Description (In English)</label>
                    <textarea value={tvshows.tvshow_description} onChange={handleDescriptionChange} className='form-control'></textarea>
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Year</label>
                    <input value={tvshows.tvshow_year} onChange={handleYearChange} className='form-control' type='text' />
                </div>
            </div>
            
            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>First Air Date</label>
                    <input value={tvshows.tvshow_first_date} onChange={handleFirstAirDateChange} className='form-control' type='date' />
                </div>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Last Air Date</label>
                    <input value={tvshows.tvshow_last_date} onChange={handleLastAirDateChange} className='form-control' type='date' />
                </div>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Rating (out of 10)</label>
                    <input value={tvshows.tvshow_rate} onChange={handleRatingChange} className='form-control' type='number' max={10} />
                </div>                        
            </div>

            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Awards</label>
                    <input value={tvshows.tvshow_awards} onChange={handleAwardsChange} className='form-control' type='text' />
                </div>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Episode Runtime (In Minutes)</label>
                    <input className='form-control' type='number' />
                </div>
                <div className="form-group col-md-4">
                  <label className="labelBox">
                    Genres <span className="text-danger">*</span>
                  </label>
                  <select
                    className={`form-control ${genresRequiredMsg ? 'is-invalid' : ''}`}
                    name="Genres"
                    onChange={handleGenreSelect}
                    value="" // This is important to reset the selection after each pick
                  >
                    <option selected="false" disabled="disabled" value="">
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
                        style={{ cursor: 'pointer', color:'white' }}
                        onClick={() => handleRemoveGenre(genre)}
                      >
                        {genre} <span className="font-weight-bold">x</span>
                      </span>
                    ))}
                  </div>
                  {genresRequiredMsg && <div className='text-danger small'>Required Field</div>}
                </div>                        
            </div>

            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Parental Rating</label>
                    <select value={tvshows.tvshow_parental_rate} onChange={handleParentalRatingChange} className='form-control' name='parentalRating'>
                        <option selected="false" disabled="disabled">Select a Parental Rating</option>
                        <option>Rate 1</option>
                        <option>Rate 2</option>
                        <option>Rate 3</option>
                    </select>
                </div>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Countries</label>
                    <select value={tvshows.tvshow_country} onChange={handleCountryChange} className='form-control' name='Countries'>
                        <option selected="false" disabled="disabled">Select Countries</option>
                        <option>Country 1</option>
                        <option>Country 2</option>
                        <option>Country 3</option>
                    </select>
                </div>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Original Version Language</label>
                    <select value={tvshows.tvshow_language} onChange={handleLanguageChange} className='form-control' name='Genres'>
                        <option selected="false" disabled="disabled">Select a Language</option>
                        <option>Language 1</option>
                        <option>Language 2</option>
                        <option>Language 3</option>
                    </select>
                </div>                        
            </div>

            <div className='form-group col-md-4'>
                <div>
                    <input className='form-check-input ml-0' type='checkbox' checked={statusCheck} onChange={handleStatusChange}/>
                    <label className='form-check-label labelBox ml-3'>Active</label>
                </div>                                                    
            </div>

            <div className='line'>
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
              <div className='form-group col-md-4' style={{marginTop: '7px'}}>
                <button 
                  type='button'
                  className='btn btn-primary mt-4' 
                  onClick={handleAddCastTag}
                >
                  Add
                </button>
              </div>
            </div>

            <div className='form-group'>
              <textarea
                className='form-control'
                value={castTags.map(tag => `${tag.castName}-${tag.castRole}`).join(' , ')}
              />
            </div>

            <div className='line'>
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
                    onClick={handleAddCrewTag}
                >
                    Add
                </button>
                </div>
            </div>

            <div className='form-group'>
                <textarea
                className='form-control'
                value={crewTags.map(tag => `${tag.crewName}-${tag.crewRole}`).join(' , ')}
                />
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

export default AddTvShow;
