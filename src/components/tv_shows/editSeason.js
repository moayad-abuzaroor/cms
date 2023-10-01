import React, { useState } from "react";
import TvShowTitleComponent from "../shared/tvShowsTitleComponent";
import TvShowsNavBar from "../shared/TvShowsNavBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


function EditSeason (){

    const[seasons,setSeasons] = useState([
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
    const totalPages = Math.ceil(seasons.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSeasons = seasons.slice(startIndex, endIndex);

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
                            <Link to="seasons">
                                <button className='btn btn-primary'><FontAwesomeIcon className='icon mr-2' icon={faArrowLeft} />Back to Seasons</button>
                            </Link>
                        </div>
                    </div>

                    <div className='form-row mt-4'>
                        <div className='form-group col-md-2'>
                            <label className='labelBox'>Season No.</label>
                            <input className='form-control' type="number"/>
                        </div>
                        <div className='form-group col-md-2'>
                            <label className='labelBox'>Episode No.</label>
                            <input className='form-control' type="number"/>
                        </div>
                        <div className='form-group col-md-2'>
                            <label className='labelBox'>Year</label>
                            <input className='form-control'/>
                        </div>
                        <div className='form-group col-md-2'>
                            <label className='labelBox'>Get From</label>
                            <select className='form-control' name='getfrom'>
                                <option selected="false" disabled="disabled">Get From</option>
                                <option>Manually</option>
                                <option>option 3</option>
                            </select>
                        </div>
                        <div className='form-group col-md-3 mt-3'>
                            <div className='input-group mt-3'>
                                <div className='custom-file'>
                                    <input type='file' className='custom-file-input' id='file-upload' accept='image/*' />
                                    <label className='custom-file-label' htmlFor='file-upload'>Poster Link</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='form-row mt-2'>
                        <div className='form-group'>
                            <input className='btn btn-primary' type='submit' value="Add" />
                        </div>
                    </div>

                    <div className="table-responsive mt-4">
                        <h3>Seasons</h3>
                        <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr>
                                    <th className="text-center align-middle">#</th>
                                    <th className="text-center align-middle">No.</th>
                                    <th className="text-center align-middle">Name</th>
                                    <th className="text-center align-middle">Add Season to iLike</th>
                                    <th className="text-center align-middle">Transfer or Not</th>
                                    <th className="text-center align-middle">Added By</th>
                                    <th className="text-center align-middle">Show Episode</th>
                                    <th className="text-center align-middle">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentSeasons.map((season, index) => (
                                    <tr className="text-center align-items-center" key={index}>
                                        <td className='align-middle'>{season.number}</td>
                                        <td className='align-middle'>{season.no}</td>
                                        <td className='align-middle'>{season.name}</td>
                                        <td className='align-middle'>{season.add}</td>
                                        <td className='align-middle'>{season.transfer}</td>
                                        <td className='align-middle'>{season.added_by}</td>
                                        <td className='align-middle'>{season.show_episode}</td>
                                        <td className='align-middle'> 
                                            {/* Add action buttons here */}
                                            <FontAwesomeIcon className='text-primary mx-1' icon={faEdit} />
                                            <FontAwesomeIcon className='text-danger mx-1' icon={faTrash} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </form>
            </div>
        </div>
    );
}


export default EditSeason;