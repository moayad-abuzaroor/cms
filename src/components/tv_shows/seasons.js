import React, { useState } from "react";
import TvShowTitleComponent from "../shared/tvShowsTitleComponent";
import '../../stylesheets/seasons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash, faEdit, faArrowUpLong, faArrowDownLong, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import TvShowsNavBar from "../shared/TvShowsNavBar";
import { Link } from 'react-router-dom';


function Seasons(){

    const[seasons,setSeasons] = useState([
        {
            season_name: 's1',
            season_episode: '1/0',
            created: '8/2/23, 2:37 PM',
            modified: '8/2/23, 2:37 PM'
        },
        {
            season_name: 's2',
            season_episode: '1/0',
            created: '8/2/23, 2:37 PM',
            modified: '8/2/23, 2:37 PM'
        },
        {
            season_name: 's3',
            season_episode: '1/0',
            created: '8/2/23, 2:37 PM',
            modified: '8/2/23, 2:37 PM'
        },
        {
            season_name: 's4',
            season_episode: '1/0',
            created: '8/2/23, 2:37 PM',
            modified: '8/2/23, 2:37 PM'
        },
        {
            season_name: 's5',
            season_episode: '1/0',
            created: '8/2/23, 2:37 PM',
            modified: '8/2/23, 2:37 PM'
        }
    ]);

    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 3; // Adjust as needed
    const totalPages = Math.ceil(seasons.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSeasons = seasons.slice(startIndex, endIndex);



    return(
        <div className='container-fluid bg-light' style={{ padding: '2%', height: '100%'}}>
            <div className='row'>
                <div className='col'>
                    <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>TV Shows</span></p>
                </div>
            </div>

            <TvShowTitleComponent/>

            <div className="row">
                <form className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}}>

                    <TvShowsNavBar/>

                    <div className="form-row mt-4">
                        <div className='seasons-menu'>
                        <Link to="addseason">
                        <button className='btn btn-primary'><FontAwesomeIcon className='icon mr-1' icon={faPlus} />Add New Season</button>
                        </Link>
                    </div>
                    </div>
                    <div className="table-responsive mt-4">
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th className="text-center align-middle">Season Name <FontAwesomeIcon className='ml-1' icon={faArrowUpLong} />
                                        <FontAwesomeIcon className='ml-1' icon={faArrowDownLong} /></th>
                                    <th className="text-center align-middle">Season/Episode <FontAwesomeIcon className='ml-1' icon={faArrowUpLong} />
                                        <FontAwesomeIcon className='ml-1' icon={faArrowDownLong} /></th>
                                    <th className="text-center align-middle">Created</th>
                                    <th className="text-center align-middle">Modified <FontAwesomeIcon className='ml-1' icon={faArrowUpLong} />
                                        <FontAwesomeIcon className='ml-1' icon={faArrowDownLong} /></th>
                                    <th className="text-center align-middle">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentSeasons.map((season, index) => (
                                    <tr className="text-center align-items-center" key={index}>
                                    <td className='align-middle'>{season.season_name}</td>
                                    <td className='align-middle'>{season.season_episode}</td>
                                    <td className='align-middle'>{season.created}</td>
                                    <td className='align-middle'>{season.modified}</td>
                                    <td className='align-middle'> 
                                        {/* Add action buttons here */}
                                        <Link to="editseason">
                                            <FontAwesomeIcon className='text-primary mx-1' icon={faEdit} />
                                        </Link>
                                        <FontAwesomeIcon className='text-danger mx-1' icon={faTrash} />
                                    </td>
                                    </tr>                        
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="row justify-content-center">
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
                </form>

            </div>

        </div>
    );
}

export default Seasons;