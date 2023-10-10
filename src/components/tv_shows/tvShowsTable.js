import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash, faEdit, faArrowUp, faArrowDown, faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../../images/logo1.jpg';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

function TvShowsTable({ sharedData, setSharedData }) {
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

    const handleDeleteClick = (tvshowId) => {
      // Confirm deletion (you might want to show a modal or confirmation dialog)
      const confirmDelete = window.confirm('Are you sure you want to delete this Tv Show?');
  
      if (confirmDelete) {
        handleDelete(tvshowId);
      }
    };

    const handleDelete = (tvshowId) => {
    
      // Define the URL for the delete endpoint
      const deleteUrl = `http://localhost:8000/api/tvshow/${tvshowId}`;
      
      // Make the DELETE request
      fetch(deleteUrl, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          window.location.reload();
          return response.json(); // If the server returns JSON, you can parse it
        })
        .then(data => {
          console.log('Movie deleted successfully:', data);
          // Optionally, you can update your component state or perform other actions here
          
        })
        .catch(error => {
          console.error('Error deleting movie:', error);
          // Handle error, show a message, etc.
        });
    };

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
  
    if (['seasons', 'episodes', 'year'].includes(key)) {
      setSortConfig({ key, direction, type: 'number' });
    } else {
      setSortConfig({ key, direction, type: 'string' });
    }
  };
  

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 8; // Adjust as needed
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

  const navigate = useNavigate();

  const handleEdit = (tvshow) => {
    setSharedData(tvshow)
    navigate('tv_metaprovider/metadata');
  }

  const handleEmptyShared = () => {
    setSharedData({id: null, tvshow_title: null, tvshow_seasons: null, tvshow_episodes: null, tvshow_year: null, tvshow_genres: null,
      tvshow_status: null, tvshow_description: null, tvshow_first_date: null, tvshow_last_date: null, tvshow_rate: null, tvshow_awards: null, tvshow_parental_rate: null,
      tvshow_country: null, tvshow_language: null, tvshow_stream_location: null, tvshow_url: null, tvshow_protection: null,
      ilike_image: null, jaw_image: null, ministra_image: null, seasons: null})
  }

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
            <button onClick={handleEmptyShared} className="btn btn-primary">
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
                  <FontAwesomeIcon style={{cursor: 'pointer'}} className="text-primary mx-1 custom_icon" icon={faEdit} onClick={() => handleEdit(tvShow)} />
                  <FontAwesomeIcon style={{cursor: 'pointer'}} className="text-danger mx-1 custom_icon" icon={faTrash} onClick={() => handleDeleteClick(tvShow.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row justify-content-center mt-4">
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
