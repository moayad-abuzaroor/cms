import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash, faEdit, faArrowUp, faArrowDown, faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import logo1 from '../../images/logo1.jpg';
import jerk from '../../images/jerk.webp';
import shbrWnos from '../../images/shbrWnos.jpg';

import '../../stylesheets/custom_css.css'

function MoviesTable({sharedData, setSharedData}) {
  const [movies, setMovies] = useState([]);

  const [source, setSource] = useState('No')
  const [subtitle, setSubtitle] = useState(5)

  useEffect(() => {
    // Define the URL for your API endpoint
    const apiUrl = 'http://localhost:8000/api/get_all_movies/';

    // Make the GET request
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => { setMovies(data);
        })     
      .catch(error => { console.error('Error fetching movies:', error); });
    }, []);

    const handleDeleteClick = (movieId) => {
      // Confirm deletion (you might want to show a modal or confirmation dialog)
      const confirmDelete = window.confirm('Are you sure you want to delete this movie?');
  
      if (confirmDelete) {
        handleDelete(movieId);
      }
    };
  
    const handleDelete = (movieId) => {
    
      // Define the URL for the delete endpoint
      const deleteUrl = `http://localhost:8000/api/movie/${movieId}`;
      
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
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const sortString = (a, b, key) => {
    if (a[key] < b[key]) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (a[key] > b[key]) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  };

  const sortNumber = (a, b, key) => {
    return sortConfig.direction === 'ascending'
      ? a[key] - b[key]
      : b[key] - a[key];
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const itemsPerPage = 8;
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredMovies = movies.filter((movie) =>
  movie.movie_title.toLowerCase().includes(searchTerm && searchTerm.toLowerCase())
);


  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortConfig.key) {
      if (typeof a[sortConfig.key] === 'string') {
        return sortString(a, b, sortConfig.key);
      } else {
        return sortNumber(a, b, sortConfig.key);
      }
    }
    return 0;
  });

  

  const currentMovies = sortedMovies.slice(startIndex, endIndex);

  const handleSearch = () => {
    setCurrentPage(0);
  };

  const navigate = useNavigate();

  const handleEdit = (movie) => {
    setSharedData(movie)
    navigate('mov_metaprovider/mov_metadata');
  }

  const handleEmptyShared = () => {
    setSharedData({id:null, movie_title: '', movie_description: null, movie_year: null, movie_release_date: null, movie_rate: null, movie_awards: null, movie_runtime: null,
      movie_source: null, movie_subtitles: null, movie_genres: null, movie_country: null,
      movie_parental_rate: null, movie_language: null, movie_status: null, ilike_image: null, jaw_image: null, ministra_image: null, movie_stream_location: null, movie_url: null,
      movie_protection: null, trailer_stream_location: null, trailer_url: null, trailer_protection: null, movie_subtitle: null, trailer_subtitle: null, subtitles_language: null,
      market_manager_country: null})
  }

  return (
    <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
      <div className="row mb-4">
        <div className="col">
          <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Movies</span></p>
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
          <Link to="mov_metaprovider">
            <button onClick={handleEmptyShared} className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} /> Add Movies
            </button>
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th className="text-center align-middle" onClick={() => handleSort('movie_title')}>
                Title
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('movie_year')}>
                Year
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('movie_release_date')}>
                Release Date
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('movie_source')}>
                Source
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('movie_subtitles')}>
                Subtitles
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('movie_genres')}>
                Genres
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('movie_status')}>
                Status
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMovies.map((movie, index) => (
              <tr className="text-center align-middle" key={index}>
                <td className='align-middle'>
                  <div className="d-flex align-items-center">
                    <img src={movie.ilike_image} alt={movie.movie_title} className="mr-2 img-thumbnail" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                    {movie.movie_title}
                  </div>
                </td>
                <td className='align-middle'>{movie.movie_year}</td>
                <td className='align-middle'>{movie.movie_release_date}</td>
                <td className='align-middle'>
                  <span className={movie.movie_source === 'Yes' ? 'badge badge-success custom_white' : 'badge badge-danger custom_white'}>
                    {movie.movie_source}
                  </span>
                </td>
                <td className='align-middle'>{movie.movie_subtitles}</td>
                <td className='align-middle'>
                  <div className="bg-light p-2 rounded">
                    {movie.movie_genres}
                  </div>
                </td>
                <td className='align-middle'>
                  <span className={movie.movie_status === 'Active' ? 'badge badge-success custom_white' : 'badge badge-danger custom_white'}>
                    {movie.movie_status}
                  </span>
                </td>
                <td className='align-middle'>
                  <FontAwesomeIcon style={{cursor: 'pointer'}} className="text-primary mx-1 custom_icon" icon={faEdit} onClick={() => handleEdit(movie)} />
                  <FontAwesomeIcon style={{cursor: 'pointer'}} className="text-danger mx-1 custom_icon" icon={faTrash} onClick={() => handleDeleteClick(movie.id)} />
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
            pageRangeDisplayed={0}
            marginPagesDisplayed={0}
            onPageChange={({ selected }) => setCurrentPage(selected)}
            containerClassName={'pagination'}
            activeClassName={'active'}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            disableInitialCallback
          />
        </div>
      </div>
    </div>
  );
}

export default MoviesTable;
