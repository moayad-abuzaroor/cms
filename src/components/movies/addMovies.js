import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import MovieTitleComponent from '../shared/movietTitleComponent';
import MoviesNavBar from '../shared/MoviesNavBar';


function AddMovies() {

  const [navbarDisabled, setNavbarDisabled] = useState(true);

  const [title, setTitle] = useState('');
  const [requiredMsg, setRequiredMsg] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setRequiredMsg(false); // Reset required message when input changes
  };

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

  const [selectedGenres, setSelectedGenres] = useState([]);
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
    }
    setGenresRequiredMsg(false); // Reset the validation message
  };
  

  const handleRemoveGenre = (genre) => {
    setSelectedGenres(selectedGenres.filter(item => item !== genre));
  };

  var count = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
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
      
    }
  };
  

  return (
    <div className='container-fluid bg-light' style={{ padding: '2%', height: '100%'}}>
      <div className='row'>
        <div className='col'>
          <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Movies</span></p>
        </div>
      </div>

      <MovieTitleComponent />

      <div className='row'>

        <form onSubmit={handleSubmit} className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}}>
          

            <MoviesNavBar disabled={navbarDisabled}/>

            <div className="line mt-4">
                <p className="lineLabel">Common</p>
            </div>

            <div className='form-row mt-4'>
                <div className='form-group col-md-4'>
                    <label htmlFor="title" className='labelBox'>Title (In English) <span className='text-danger'>*</span></label>
                    <input 
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        className={`form-control ${requiredMsg ? 'is-invalid' : ''}`} 
                    />

                    {requiredMsg && <div className='text-danger small'>Required Field</div>}
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Description (In English)</label>
                    <textarea className='form-control'></textarea>
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Release Date</label>
                    <input className='form-control' type='date' />
                </div>
            </div>

            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Year</label>
                    <input className='form-control' type='text' />
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Rating (out of 10)</label>
                    <input className='form-control' type='number' max={10} />
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Awards</label>
                    <input className='form-control' type='text' />
                </div>
            </div>

            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Runtime (In Minutes)</label>
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
                    <option selected="false" disabled value="">
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
                  {genresRequiredMsg && <div className='text-danger small'>Required Field</div>}
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Countries</label>
                    <select className='form-control' name='Countries'>
                        <option selected="false" disabled="disabled">Select Countries</option>
                        <option>Country 1</option>
                        <option>Country 2</option>
                        <option>Country 3</option>
                    </select>
                </div>
            </div>

            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Parental Rating</label>
                    <select className='form-control' name='parentalRating'>
                        <option selected="false" disabled="disabled">Select a Parental Rating</option>
                        <option>Rate 1</option>
                        <option>Rate 2</option>
                        <option>Rate 3</option>
                    </select>
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Original Version Language</label>
                    <select className='form-control' name='Genres'>
                        <option selected="false" disabled="disabled">Select a Language</option>
                        <option>Language 1</option>
                        <option>Language 2</option>
                        <option>Language 3</option>
                    </select>
                </div>

                <div className='form-group col-md-4'>
                    <div className='form-check mt-4'>
                        <input className='form-check-input' type='checkbox' />
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
      </div>
    </div>
  );
}

export default AddMovies;
