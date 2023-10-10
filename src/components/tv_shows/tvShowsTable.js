import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash, faEdit, faArrowUp, faArrowDown, faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../../images/logo1.jpg';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

function TvShowsTable() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    // Define the URL for your API endpoint
    const apiUrl = 'http://localhost:8000/api/get_all_tvshows/';

    // Make the GET request
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => { setTvShows(data);
        })     
      .catch(error => { console.error('Error fetching movies:', error); });
    }, []);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
  
    if (['season', 'episode', 'year'].includes(key)) {
      setSortConfig({ key, direction, type: 'number' });
    } else {
      setSortConfig({ key, direction, type: 'string' });
    }
  };
  

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3; // Adjust as needed
  const totalPages = Math.ceil(tvShows.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setCurrentPage(0);
  };

  const filteredTvShows = tvShows.filter((tvShow) =>
    tvShow.tvshow_title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const sortString = (a, b, key) => {
    if (a[key] < b[key]) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (a[key] > b[key]) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  };
  
  const sortNumber = (a, b, key) => {
    const aValue = parseInt(a[key], 10);
    const bValue = parseInt(b[key], 10);
  
    return sortConfig.direction === 'ascending' ? aValue - bValue : bValue - aValue;
  };

  const sortedTvShows = [...filteredTvShows].sort((a, b) => {
    if (sortConfig.key) {
      if (sortConfig.type === 'number') {
        return sortNumber(a, b, sortConfig.key);
      } else {
        return sortString(a, b, sortConfig.key);
      }
    }
    return 0;
  });
  

  const currentTvShows = sortedTvShows.slice(startIndex, endIndex);

  return (
    <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
      <div className="row mb-4">
        <div className="col">
          <p className="pathText">Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>TV Shows</span></p>
        </div>
        <div className="col-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary mr-2">
            <FontAwesomeIcon icon={faFilter} /> Filter
          </button>
          <Link to="tv_metaprovider">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} /> Add TV Show
            </button>
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th className="text-center align-middle" onClick={() => handleSort('tvshow_title')}>
                Title
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('tvshow_seasons')}>
                Seasons
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('tvshow_episodes')}>
                Episode
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('tvshow_year')}>
                Year
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('tvshow_genres')}>
                Genres
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('tvshow_status')}>
                Status
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTvShows.map((tvShow, index) => (
              <tr className="text-center align-items-center" key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={tvShow.ilike_image} alt={tvShow.tvshow_title} className="mr-2 img-thumbnail" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                    {tvShow.tvshow_title}
                  </div>
                </td>
                <td className='align-middle'>{tvShow.seasons.length}</td>
                {/* {
  tvShow.seasons[0]?.episodes.length !== undefined ? (
    <td className='align-middle'>{tvShow.seasons[0]?.episodes.length}</td>
  ) : (
    <td className='align-middle'>0</td>
  )
}
 */}
                {
                  tvShow.seasons[0]?.episodes.length !== undefined ? (
                    <td className='align-middle'>{
                      tvShow.seasons.reduce((total, season) => total + (season?.episodes?.length || 0), 0) || 0
                    }
                    </td>
                  ) : (
                    <td className='align-middle'>0</td>
                  )
                }
                <td className='align-middle'>{tvShow.tvshow_year}</td>
                <td className='align-middle'>
                  <div className="genres bg-light p-2 rounded">
                    {tvShow.tvshow_genres}
                  </div>
                </td>
                <td className='align-middle'>
                  <span className={tvShow.tvshow_status === 'Active' ? 'badge bg-success custom_white' : 'badge bg-danger custom_white'}>
                    {tvShow.tvshow_status}
                  </span>
                </td>
                <td className='align-middle'>
                  <FontAwesomeIcon className="text-primary mx-1 custom_icon" icon={faEdit} />
                  <FontAwesomeIcon className="text-danger mx-1 custom_icon" icon={faTrash} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-auto">
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={0} // Adjust as needed
            marginPagesDisplayed={0} // Adjust as needed
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName={'pagination'}
            activeClassName={'active'}
            previousLabel={'Previous'} // Add previous label
            nextLabel={'Next'} // Add next label
            disableInitialCallback // Disable the initial callback to prevent multiple renders
          />
        </div>
      </div>
    </div>
  );
}

export default TvShowsTable;
