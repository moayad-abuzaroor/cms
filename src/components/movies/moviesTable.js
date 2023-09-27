import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash, faEdit, faArrowUp, faArrowDown, faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import logo1 from '../../images/logo1.jpg';
import jerk from '../../images/jerk.webp';
import shbrWnos from '../../images/shbrWnos.jpg';

import '../../stylesheets/custom_css.css'

function MoviesTable() {
  const [movies, setMovies] = useState([
    {
      title: 'Tiger 24 (2022)',
      year: 2022,
      releaseDate: '2023-01-20',
      source: 'Yes',
      subtitles: '2',
      genres: 'افلام وثائقية - Documentary Movies',
      status: 'Active',
      imageUrl: logo1
    },
    {
      title: 'The Jerk (1979)',
      year: 1979,
      releaseDate: '1979-12-14',
      source: 'Yes',
      subtitles: '2',
      genres: 'كوميديا - Comedy',
      status: 'Active',
      imageUrl: jerk
    },
    {
      title: 'شبر ونص (2004)',
      year: 2004,
      releaseDate: '2004-8-01',
      source: 'Yes',
      subtitles: '0',
      genres: 'افلام عربية - Arabic Movies',
      status: 'Not Active',
      imageUrl: shbrWnos
    }
  ]);

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

  const itemsPerPage = 2;
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} /> Add Movies
            </button>
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th className="text-center align-middle" onClick={() => handleSort('title')}>
                Title
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('year')}>
                Year
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('releaseDate')}>
                Release Date
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('source')}>
                Source
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('subtitles')}>
                Subtitles
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('genres')}>
                Genres
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('status')}>
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
                    <img src={movie.imageUrl} alt={movie.title} className="mr-2 img-thumbnail" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                    {movie.title}
                  </div>
                </td>
                <td className='align-middle'>{movie.year}</td>
                <td className='align-middle'>{movie.releaseDate}</td>
                <td className='align-middle'>
                  <span className={movie.source === 'Yes' ? 'badge badge-success custom_white' : 'badge badge-danger custom_white'}>
                    {movie.source}
                  </span>
                </td>
                <td className='align-middle'>{movie.subtitles}</td>
                <td className='align-middle'>
                  <div className="bg-light p-2 rounded">
                    {movie.genres}
                  </div>
                </td>
                <td className='align-middle'>
                  <span className={movie.status === 'Active' ? 'badge badge-success custom_white' : 'badge badge-danger custom_white'}>
                    {movie.status}
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
