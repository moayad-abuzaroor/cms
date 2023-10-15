import React, { useState } from "react";
import TvShowTitleComponent from "../shared/tvShowsTitleComponent";
import TvShowsNavBar from "../shared/TvShowsNavBar";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function ShowEpisodes() {

    const[episodes,setEpisodes] = useState([
        {
            number: 's1',
            no: '1/0',
            name:'',
            add: '',
            transfer: '',
            added_by: '',
            show_episode:'',
        },
        {
            number: 's1',
            no: '1/0',
            name:'',
            add: '',
            transfer: '',
            added_by: '',
            show_episode:'',
        },
        {
            number: 's1',
            no: '1/0',
            name:'',
            add: '',
            transfer: '',
            added_by: '',
            show_episode:'',
        },
        {
            number: 's1',
            no: '1/0',
            name:'',
            add: '',
            transfer: '',
            added_by: '',
            show_episode:'',
        },
        {
            number: 's1',
            no: '1/0',
            name:'',
            add: '',
            transfer: '',
            added_by: '',
            show_episode:'',
        }
    ]);

    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 3; // Adjust as needed
    const totalPages = Math.ceil(episodes.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentEpisodes = episodes.slice(startIndex, endIndex);

    return(
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%'}}>
            <div className='row'>
                <div className='col'>
                    <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>TV Shows</span></p>
                </div>
            </div>
            
            <TvShowTitleComponent />

            <div className="row">
                <form className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}}>
                    <TvShowsNavBar />
                    <div className="form-row mt-4 ml-auto">
                        <div className='seasons-menu'>
                            <Link to="/dashboard/media/tv-shows/seasons/editseason">
                                <button className='btn btn-primary'><FontAwesomeIcon className='icon mr-2' icon={faArrowLeft} />Back to Season</button>
                            </Link>
                        </div>
                    </div>
                    <div className='form-row mt-5'>
                        <div className='form-group col-md-2'>
                            <input className='btn btn-primary' type="button" value="Add Episode manually"/>
                        </div>
                        <div className='form-group col-md-2'>
                            <input className='btn btn-primary ml-5' type="button" value="Add Episode OMDB"/>
                        </div>
                        <div className='form-group col-md-2' style={{marginLeft: '9%'}}>
                            <input className='btn btn-success' type="button" value="Add All Episodes"/>
                        </div>
                    </div>
                    <div className='form-row mt-2'>
                        <div className='form-group col-md-3'>
                            <input className='form-control' type="text" placeholder="Episode Number" />
                        </div>
                        <div className='form-group col-md-3'>
                            <select className='form-control' name='stream_location'>
                                <option selected="false" disabled="disabled">Select Stream Location</option>
                                <option>VOD Streaming 15</option>
                                <option>option 3</option>
                            </select>
                        </div>
                        <div className='form-group col-md-2'>
                            <input className='btn btn-success' type="button" value="Generate"/>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th className="text-center align-middle">#</th>
                                <th className="text-center align-middle">Title</th>
                                <th className="text-center align-middle">Poster</th>
                                <th className="text-center align-middle">Transfer to iLike</th>
                                <th className="text-center align-middle">Transfer or Not</th>
                                <th className="text-center align-middle">Added By</th>
                                <th className="text-center align-middle">Date</th>
                                <th className="text-center align-middle">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEpisodes.map((episode, index) => (
                                <tr className="text-center align-items-center" key={index}>
                                    <td className='align-middle'></td>
                                    <td className='align-middle'></td>
                                    <td className='align-middle'></td>
                                    <td className='align-middle'><input className='btn btn-primary' type='button' value="Add" /></td>
                                    <td className='align-middle'></td>
                                    <td className='align-middle'></td>
                                    <td className='align-middle'></td>
                                    <td className='align-middle'> 
                                        {/* Add action buttons here */}
                                        <FontAwesomeIcon className='text-primary mx-1' icon={faEdit} />
                                        <FontAwesomeIcon className='text-danger mx-1' icon={faTrash} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>

        </div>
    )
}

export default ShowEpisodes;