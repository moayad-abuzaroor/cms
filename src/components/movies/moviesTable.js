import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash, faEdit, faArrowUp, faArrowDown, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../../images/logo1.jpg';
import jerk from '../../images/jerk.webp';
import shbrWnos from '../../images/shbrWnos.jpg';

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

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <div className="container-fluid mt-5" style={{ padding: '2%', backgroundColor: 'rgb(233, 229, 229)' }}>
      <div className="row mb-4">
        <div className="col">
          <p className="h5 mb-0">Media Asset Management/VOD / <span className="text-primary">Movies</span></p>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary mr-2">
            <FontAwesomeIcon icon={faFilter} /> Filter
          </button>
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faPlus} /> Add Movies
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center align-middle" onClick={() => handleSort('title')}>
                Title
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
                {sortConfig.key === 'title' && sortConfig.direction === 'ascending'}
                {sortConfig.key === 'title' && sortConfig.direction === 'descending'}
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('year')}>
                Year
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
                {sortConfig.key === 'year' && sortConfig.direction === 'ascending'}
                {sortConfig.key === 'year' && sortConfig.direction === 'descending'}
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('releaseDate')}>
                Release Date
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
                {sortConfig.key === 'releaseDate' && sortConfig.direction === 'ascending'}
                {sortConfig.key === 'releaseDate' && sortConfig.direction === 'descending'}
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('source')}>
                Source
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
                {sortConfig.key === 'source' && sortConfig.direction === 'ascending'}
                {sortConfig.key === 'source' && sortConfig.direction === 'descending'}
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('subtitles')}>
                Subtitles
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
                {sortConfig.key === 'subtitles' && sortConfig.direction === 'ascending'}
                {sortConfig.key === 'subtitles' && sortConfig.direction === 'descending'}
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('genres')}>
                Genres
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
                {sortConfig.key === 'genres' && sortConfig.direction === 'ascending'}
                {sortConfig.key === 'genres' && sortConfig.direction === 'descending'}
              </th>
              <th className="text-center align-middle" onClick={() => handleSort('status')}>
                Status
                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />                
                {sortConfig.key === 'status' && sortConfig.direction === 'ascending'}
                {sortConfig.key === 'status' && sortConfig.direction === 'descending'}
              </th>
              <th className="text-center align-middle">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedMovies.map((movie, index) => (
              <tr className="text-center align-items-center" key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={movie.imageUrl} alt={movie.title} className="mr-2" />
                    {movie.title}
                  </div>
                </td>
                <td className='align-middle'>{movie.year}</td>
                <td className='align-middle'>{movie.releaseDate}</td>
                <td className='align-middle'>
                  <span className={movie.source === 'Yes' ? 'text-success' : 'text-danger'}>
                    {movie.source}
                  </span>
                </td>
                <td className='align-middle'>{movie.subtitles}</td>
                <td className='align-middle'>
                  <div className="genres bg-light p-2 rounded">
                    {movie.genres}
                  </div>
                </td>
                <td className='align-middle'>
                  <span className={movie.status === 'Active' ? 'badge bg-success' : 'badge bg-danger'}>
                    {movie.status}
                  </span>
                </td>
                <td className='align-middle'>
                  <FontAwesomeIcon className="icon text-info" icon={faInfoCircle} />
                  <FontAwesomeIcon className="icon text-primary" icon={faEdit} />
                  <FontAwesomeIcon className="icon text-danger" icon={faTrash} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MoviesTable;
