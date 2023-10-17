import React, { useState } from "react";
import TvShowTitleComponent from "../shared/tvShowsTitleComponent";
import TvShowsNavBar from "../shared/TvShowsNavBar";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEdit, faTrash, faCircleMinus } from "@fortawesome/free-solid-svg-icons";


function EditEpisode(){

    
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genre, setGenre] = useState('');
    const [genreOptions, setGenreOptions] = useState([
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

    const handleGenreSelect = (e) => {
        const selectedGenre = e.target.value;
        if (selectedGenre && !selectedGenres.includes(selectedGenre)) {
        setSelectedGenres([...selectedGenres, selectedGenre]);
        setGenre(selectedGenre)
        }
    };
    

    const handleRemoveGenre = (genre) => {
        setSelectedGenres(selectedGenres.filter(item => item !== genre));
    };

    const [episodeDetails, setEpisodeDetails] = useState({
        imdb_id: '', title: '', parent_id: '', year: '', rate: '', released: '', parental_rate_id: '', runtime: '', genres: genre, director: '',
        writer: '', actors: '', plot: '', language: '', country: '', awards: '', poster: '', metascore: '', imdb_rating: '', imdb_votes: '',
        type: '', dvd: '', box_office: '', production: '', trailer_source: '', episode_source: '', media_streaming: null, ar_subtitle: '', en_subtitle: '',
        like_id: '', total_seasons: '', season: '', series_id: '', episode: '', updated_date: ''
    })

    const handleImdbIdChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          imdb_id: e.target.value
        }));
    };

    const handleTitleChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          title: e.target.value
        }));
    };

    const handleParentIdChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          parent_id: e.target.value
        }));
      };
      
      const handleYearChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          year: e.target.value
        }));
      };
      
      const handleRateChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          rate: e.target.value
        }));
      };
      
      const handleReleasedChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          released: e.target.value
        }));
      };

      const handleParentalRateIdChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          parental_rate_id: e.target.value
        }));
      };
      
      const handleRuntimeChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          runtime: e.target.value
        }));
      };
      
      
      const handleDirectorChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          director: e.target.value
        }));
      };
      
      const handleWriterChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          writer: e.target.value
        }));
      };
      
      const handleActorsChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          actors: e.target.value
        }));
      };
      
      const handlePlotChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          plot: e.target.value
        }));
      };
      
      const handleLanguageChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          language: e.target.value
        }));
      };
      
      const handleCountryChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          country: e.target.value
        }));
      };
      
      const handleAwardsChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          awards: e.target.value
        }));
      };
      
      const handlePosterChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          poster: e.target.value
        }));
      };
      
      const handleMetascoreChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          metascore: e.target.value
        }));
      };
      
      const handleImdbRatingChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          imdb_rating: e.target.value
        }));
      };
      
      const handleImdbVotesChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          imdb_votes: e.target.value
        }));
      };
      
      const handleTypeChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          type: e.target.value
        }));
      };
      
      const handleDvdChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          dvd: e.target.value
        }));
      };
      
      const handleBoxOfficeChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          box_office: e.target.value
        }));
      };
      
      const handleProductionChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          production: e.target.value
        }));
      };
      
      const handleTrailerSourceChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          trailer_source: e.target.value
        }));
      };
      
      const handleEpisodeSourceChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          episode_source: e.target.value
        }));
      };
      
      const handleMediaStreamingChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          media_streaming: e.target.value
        }));
      };
      
      const handleArSubtitleChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          ar_subtitle: e.target.value
        }));
      };
      
      const handleEnSubtitleChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          en_subtitle: e.target.value
        }));
      };
      
      const handleLikeIdChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          like_id: e.target.value
        }));
      };
      
      const handleTotalSeasonsChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          total_seasons: e.target.value
        }));
      };
      
      const handleSeasonChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          season: e.target.value
        }));
      };
      
      const handleSeriesIdChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          series_id: e.target.value
        }));
      };
      
      const handleEpisodeChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          episode: e.target.value
        }));
      };
      
      const handleUpdatedDateChange = (e) => {
        setEpisodeDetails(prevState => ({
          ...prevState,
          updated_date: e.target.value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessAlert(true);
          setTimeout(() => {
              setShowSuccessAlert(false);
          }, 5000);
      }

    return(
        <div className='container-fluid bg-light' style={{ padding: '2%', height: '100%'}}>
            <div className='row'>
                <div className='col'>
                    <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>TV Shows</span></p>
                </div>
            </div>

            <TvShowTitleComponent />

            <div className='row'>
                <form onSubmit={handleSubmit} className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                    <h3>Add Episode</h3>
                    <div className="form-row ml-auto">
                        <div className='seasons-menu'>
                            <Link to="/dashboard/media/tv-shows/seasons/editseason/episodes">
                                <button className='btn btn-primary'><FontAwesomeIcon className='icon mr-2' icon={faArrowLeft} />Back to Seasons</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                    
                    <hr></hr>
                    <div className='form-row mt-4'>
                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Imdb ID</label>
                            <input value={episodeDetails.imdb_id} onChange={handleImdbIdChange} className='form-control' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Title</label>
                            <input value={episodeDetails.title} onChange={handleTitleChange} className='form-control'></input>
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Parent ID</label>
                            <input value={episodeDetails.parent_id} onChange={handleParentIdChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Year</label>
                            <input value={episodeDetails.year} onChange={handleYearChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Rated</label>
                            <input value={episodeDetails.rate} onChange={handleRateChange} className='form-control' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Released</label>
                            <input value={episodeDetails.released} onChange={handleReleasedChange} className='form-control' type="date"></input>
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Parental Rating ID</label>
                            <input value={episodeDetails.parental_rate_id} onChange={handleParentalRateIdChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Runtime</label>
                            <input value={episodeDetails.runtime} onChange={handleRuntimeChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Genres</label>
                            <select className='form-control' name="Genres" onChange={handleGenreSelect} value="" >
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
                                    style={{ cursor: 'pointer', color: 'white' }}
                                    onClick={() => handleRemoveGenre(genre)}
                                >
                                    {genre} <span className="font-weight-bold">x</span>
                                </span>
                                ))}
                            </div>
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Director</label>
                            <input value={episodeDetails.director} onChange={handleDirectorChange} className='form-control'></input>
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Writer</label>
                            <input value={episodeDetails.writer} onChange={handleWriterChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Actors</label>
                            <input value={episodeDetails.actors} onChange={handleActorsChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Plot</label>
                            <input value={episodeDetails.plot} onChange={handlePlotChange} className='form-control' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Language</label>
                            <input value={episodeDetails.language} onChange={handleLanguageChange} className='form-control'></input>
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Country</label>
                            <input value={episodeDetails.country} onChange={handleCountryChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Awards</label>
                            <input value={episodeDetails.awards} onChange={handleAwardsChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Poster</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file"
                                        onChange={handlePosterChange}
                                        className="custom-file-input" id="posterUpload" />
                                    <label className="custom-file-label" htmlFor="posterUpload">{'Browse'}</label>
                                </div>
                                <button type="button" className="btn btn-danger customBorderLeft">
                                  <FontAwesomeIcon icon={faCircleMinus} />
                                </button>
                            </div>
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Metascore</label>
                            <input value={episodeDetails.metascore} onChange={handleMetascoreChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Imdb Rating</label>
                            <input value={episodeDetails.imdb_rating} onChange={handleImdbRatingChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Imdb Votes</label>
                            <input value={episodeDetails.imdb_votes} onChange={handleImdbVotesChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Type</label>
                            <input value={episodeDetails.type} onChange={handleTypeChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>DVD</label>
                            <input value={episodeDetails.dvd} onChange={handleDvdChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Box Office</label>
                            <input value={episodeDetails.box_office} onChange={handleBoxOfficeChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Production</label>
                            <input value={episodeDetails.production} onChange={handleProductionChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Trailer Source</label>
                            <input value={episodeDetails.trailer_source} onChange={handleTrailerSourceChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Episode Source</label>
                            <input value={episodeDetails.episode_source} onChange={handleEpisodeSourceChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Media Streaming</label>
                            <div style={{display: 'flex'}}>
                              <select value={episodeDetails.media_streaming} onChange={handleMediaStreamingChange} className='customBorderRight form-control' name='Countries'>
                                  <option value='' selected="false" disabled="disabled">Select Media Streaming</option>
                                  <option>VOD 1</option>
                                  <option>VOD 2</option>
                                  <option>VOD 3</option>
                              </select>
                              <button type="button" className="btn btn-danger customBorderLeft">
                                  <FontAwesomeIcon icon={faCircleMinus} />
                              </button>
                            </div>
                        </div>
                       
                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Arabic Subtitle</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file"
                                        onChange={handleArSubtitleChange}
                                        className="custom-file-input" id="arabicSubtitleUpload" accept=".srt,.sub,.sbv,.smi,.vtt" />
                                    <label className="custom-file-label" htmlFor="arabicSubtitleUpload">{'Browse'}</label>
                                </div>
                                <button type="button" className="btn btn-danger customBorderLeft">
                                  <FontAwesomeIcon icon={faCircleMinus} />
                                </button>
                            </div>
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>English Subtitle</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file"
                                        onChange={handleArSubtitleChange}
                                        className="custom-file-input" id="englishSubtitleUpload" accept=".srt,.sub,.sbv,.smi,.vtt" />
                                    <label className="custom-file-label" htmlFor="englishSubtitleUpload">{'Browse'}</label>
                                </div>
                                <button type="button" className="btn btn-danger customBorderLeft">
                                  <FontAwesomeIcon icon={faCircleMinus} />
                                </button>
                            </div>
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Like ID</label>
                            <input value={episodeDetails.like_id} onChange={handleLikeIdChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Season</label>
                            <input value={episodeDetails.season} onChange={handleSeasonChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Total Seasons</label>
                            <input value={episodeDetails.total_seasons} onChange={handleTotalSeasonsChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Total Seasons</label>
                            <input value={episodeDetails.total_seasons} onChange={handleTotalSeasonsChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Series ID</label>
                            <input value={episodeDetails.series_id} onChange={handleSeriesIdChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Episode</label>
                            <input value={episodeDetails.episode} onChange={handleEpisodeChange} className='form-control' type='text' />
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Update Date</label>
                            <input value={episodeDetails.updated_date} onChange={handleUpdatedDateChange} className='form-control' type='date' />
                        </div>
                    </div>

                    <div className='form-group mt-3'>
                        <input className='btn btn-primary' type='submit' value="Save" />  
                        <Link to="/dashboard/media/tv-shows/seasons/editseason/episodes">                   
                            <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
                        </Link>  
                    </div>
                </form>
                {showSuccessAlert && (
                    <div className="alert alert-success fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Episode added successfully
                    </div>
                )}
            </div>
        </div>
    )
}

export default EditEpisode;