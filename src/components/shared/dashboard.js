import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTv, faFilm, faPeopleGroup, faDatabase, faVideo, faPhotoFilm, faPhotoVideo, faHome, faPlay, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {

  useEffect(() => {
    document.title = 'CMS | Dashboard';
  }, []);
  
  const [movies, setMovies] = useState(0)
  const [tvshows, setTvshows] = useState(0)

  useEffect(() => {
    // Define the URL for your API endpoint
    const tvshowsUrl = 'http://localhost:8000/api/get_all_tvshows/';

    // Make the GET request
    fetch(tvshowsUrl)
      .then(response => response.json())
      .then(data => { setTvshows(data.length);
        })     
      .catch(error => { console.error('Error fetching movies:', error); });

    const moviesUrl = 'http://localhost:8000/api/get_all_movies/';

    // Make the GET request
    fetch(moviesUrl)
      .then(response => response.json())
      .then(data => { setMovies(data.length);
        })     
      .catch(error => { console.error('Error fetching movies:', error); });
  }, []);

  return (
    <div className="container-fluid">

      <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <div className="row">

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2 animated-card">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Active Subscribers</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">77070</div>
                </div>
                <div className="col-auto">
                    <FontAwesomeIcon className="fa-2x text-gray-300" icon={faPeopleGroup} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2 animated-card">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Channels</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">573</div>
                </div>
                <div className="col-auto">
                    <FontAwesomeIcon className="fa-2x text-gray-300" icon={faTv} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2 animated-card">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Movies</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{movies}</div>
                </div>
                <div className="col-auto">
                    <FontAwesomeIcon className="fa-2x text-gray-300" icon={faFilm} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2 animated-card">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    TV Shows</div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{tvshows}</div>
                </div>
                <div className="col-auto">
                    <FontAwesomeIcon className="fa-2x text-gray-300" icon={faFilm} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
