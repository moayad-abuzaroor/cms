import React, { useState } from "react";
import MovieTitleComponent from "../shared/movietTitleComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faUpload, faFileImport } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import logo1 from '../../images/logo1.jpg';
import jerk from '../../images/jerk.webp';
import shbrWnos from '../../images/shbrWnos.jpg';
import "../../stylesheets/metaProvider.css";

function MovieMetaProvider() {


    const [movies, setMovies] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 8; // Adjust as needed
    const totalPages = Math.ceil(movies.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentMovies = movies.slice(startIndex, endIndex);




  const [title, setTitle] = useState("");
  const [requiredMsg, setRequiredMsg] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setRequiredMsg(false); // Reset required message when input changes
  };

  const [provider, setProvider] = useState();
  const [providerRequiredMsg, setProviderRequiredMsg] = useState(false);

  const handleProviderChange = (e) => {
    setProvider(e.target.value);
    setProviderRequiredMsg(false); // Reset required message when input changes
  };

  var count = 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setRequiredMsg(true);
      count = count + 1;
    } else {
      // Handle form submission
      setRequiredMsg(false);
    }

    if (provider == null) {
      setProviderRequiredMsg(true);
      count = count + 1;
    } else {
      // Handle form submission
      setProviderRequiredMsg(false);
    }

    if(count == 0){
        handleSearch();
        
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e) => {
    setShowModal(true);
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=a528f3e`)
    .then(response => response.json())
    .then(data => {
        // Set data to state or do something with it
        setMovies(data.Search)
    })
    .catch(error => console.error('Error fetching data:', error));

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-fluid" style={{ padding: "2%", height: "100%" }}>
      <div className="row">
        <div className="col">
          <p className="pathText">
            Media Asset Management/VOD /{" "}
            <span style={{ color: "rgb(55, 55, 55)" }}>Movies</span>
          </p>
        </div>
      </div>

      <MovieTitleComponent />

      <div className="row">
        <form
          onSubmit={handleSubmit}
          className="col-lg-11 mx-auto addForm"
          style={{ backgroundColor: "white" }}
        >
          <div className="form-row mt-1">
            <div className="form-group col-md-4">
              <label className="labelBox">
                Metadata Provider <span className="text-danger">*</span>
              </label>
              <select
                value={provider}
                onChange={handleProviderChange}
                className={`form-control ${
                  providerRequiredMsg ? "is-invalid" : ""
                }`}
                name="MetaProvider"
              >
                <option selected="false" disabled="disabled">
                  Select Meta Provider
                </option>
                <option>OMDB API</option>
                <option>IMDB API</option>
              </select>
              {providerRequiredMsg && (
                <div className="text-danger small">Required Field</div>
              )}
            </div>
            <div className="form-group col-md-4">
              <label className="labelBox">
                Title <span className="text-danger">*</span>
              </label>
              <input
                value={title}
                onChange={handleTitleChange}
                className={`form-control ${requiredMsg ? "is-invalid" : ""}`}
                type="text"
              />
              {requiredMsg && (
                <div className="text-danger small">Required Field</div>
              )}
            </div>
            <div className="mt-2 ml-1">
              <button
                type="submit"
                className="btn btn-primary mt-4"
              >
                Search
              </button>
              <Link to="mov_metadata">
                <button
                  type="button"
                  className="btn btn-primary mt-4 ml-2"
                >
                  Skip
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="custom-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h5>Movie Metadata Details</h5>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th className="text-center align-middle">Cover</th>
                            <th className="text-center align-middle">Title</th>
                            <th className="text-center align-middle">Year</th>
                            <th className="text-center align-middle">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentMovies.map((movie, index) => (
                            <tr className="text-center align-items-center" key={index}>
                            <td className='align-middle'>
                                <img src={movie.Poster} alt={movie.Title} className="mr-2 img-thumbnail" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                            </td>
                            <td className='align-middle'>{movie.Title}</td>
                            <td className='align-middle'>{movie.Year}</td>
                            <td className='align-middle'> 
                                {/* Add action buttons here */}
                                <span className="selectButton" style={{cursor: 'pointer'}}>
                                    Select
                                    <FontAwesomeIcon className='text-info mx-1' icon={faFileImport} />
                                </span>
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
        </div>
      )}
    </div>
  );
}

export default MovieMetaProvider;
