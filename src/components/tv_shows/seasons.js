import React, { useState } from "react";
import TvShowTitleComponent from "../shared/tvShowsTitleComponent";
import '../../stylesheets/seasons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash, faEdit, faArrowUpLong, faArrowDownLong, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';

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

    const itemsPerPage = 1; // Adjust as needed
    const totalPages = Math.ceil(seasons.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSeasons = seasons.slice(startIndex, endIndex);



    return(
        <div className="container">
            <div className='path'>
                <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>Tv Shows</span></p>
            </div>
            
            <TvShowTitleComponent/>

            <div className="seasons-form">

                <div className='seasons-menu'>
                    <button className='menuButton'><FontAwesomeIcon className='icon' icon={faPlus} />Add New Season</button>
                </div>

                <table className="sub-table">
                    <thead className="sub-thead">
                        <tr>
                            <th>Season Name <FontAwesomeIcon className='upIcon' icon={faArrowUpLong} />
                            <FontAwesomeIcon className='downIcon' icon={faArrowDownLong} /></th>
                            <th>Season/Episode <FontAwesomeIcon className='upIcon' icon={faArrowUpLong} />
                            <FontAwesomeIcon className='downIcon' icon={faArrowDownLong} /></th>
                            <th>Created</th>
                            <th>Modified <FontAwesomeIcon className='upIcon' icon={faArrowUpLong} />
                            <FontAwesomeIcon className='downIcon' icon={faArrowDownLong} /></th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentSeasons.map((season, index) => (
                            <tr key={index}>
                            <td className='sub-td'>{season.season_name}</td>
                            <td className='sub-td'>{season.season_episode}</td>
                            <td className='sub-td'>{season.created}</td>
                            <td className='sub-td'>{season.modified}</td>
                            <td className='sub-td'> 
                                {/* Add action buttons here */}
                                <FontAwesomeIcon className='icon' icon={faEdit} />
                                <FontAwesomeIcon className='icon' icon={faTrash} />
                            </td>
                            </tr>                        
                        ))}
                    </tbody>
                </table>

                <ReactPaginate
                    pageCount={totalPages}
                    pageRangeDisplayed={0}
                    marginPagesDisplayed={0}
                    onPageChange={({ selected }) => setCurrentPage(selected)}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageLinkClassName={'page-link'} // Add this className
                    breakLinkClassName={'break-link'} // Add this className
                    previousLabel={'Previous'} // Add previous label
                    nextLabel={'Next'} // Add next label
                    disableInitialCallback // Disable the initial callback to prevent multiple renders
                />
            </div>

        </div>
    );
}

export default Seasons;