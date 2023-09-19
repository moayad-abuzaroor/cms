import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import logo1 from '../../images/logo1.jpg'
import jerk from '../../images/jerk.webp'
import shbrWnos from '../../images/shbrWnos.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash, faEdit, faArrowUpLong, faArrowDownLong, faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/tvShowsTable.css'


function TvShowsTable(){

    const [tvShows, setTvShows] = useState([
        { 
          title: 'اسمي فرح (مدبلج)',
          season: '1',
          episode: '70',
          year: 2023,
          genres: 'تركي مدبلج',
          status: 'Active',
          imageUrl: logo1
        },
        { 
          title: 'Dragon - دراغون بول',
          season: '1',
          episode: '130',
          year: '2015-2018',
          genres: 'اطفال - kids',
          status: 'Not Active',
          imageUrl: logo1
        },
        { 
          title: 'شاء القدر (مدبلج)',
          season: '1',
          episode: '96',
          year: 2022,
          genres: 'مسلسلات عربية',
          status: 'Active',
          imageUrl: logo1
        }
        // Add more movie data as needed
      ]);

      const titleSort = () => {
        setTvShows([...tvShows].reverse())
      }
    
    return(
        <div className="container-fluid tv-container">
            <div className='path'>
                <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>Tv Shows</span></p>
            </div>
            <div className='menu'>
                <button className='menuButton'><FontAwesomeIcon className='icon' icon={faFilter} />Filter</button>
                <button className='menuButton'><FontAwesomeIcon className='icon' icon={faPlus} />Add Tv Shows</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th onClick={titleSort}>Title <FontAwesomeIcon className='upIcon' icon={faArrowUpLong} />
                         <FontAwesomeIcon className='downIcon' icon={faArrowDownLong} /></th>
                        <th>Seasons <FontAwesomeIcon className='upIcon' icon={faArrowUpLong} />
                         <FontAwesomeIcon className='downIcon' icon={faArrowDownLong} /></th>
                        <th>Episode <FontAwesomeIcon className='upIcon' icon={faArrowUpLong} />
                         <FontAwesomeIcon className='downIcon' icon={faArrowDownLong} /></th>
                        <th>Year <FontAwesomeIcon className='upIcon' icon={faArrowUpLong} />
                         <FontAwesomeIcon className='downIcon' icon={faArrowDownLong} /></th>
                        <th>Genres</th>
                        <th>Status <FontAwesomeIcon className='upIcon' icon={faArrowUpLong} />
                         <FontAwesomeIcon className='downIcon' icon={faArrowDownLong} /></th>
                        <th>Actions</th>
                    </tr>
                </thead>                
                <tbody>
                    {tvShows.map((tvShow, index) => (
                        <tr className = 'tableRow' key={index}>
                        <td><span className='imageTitle'><img src={tvShow.imageUrl}></img>{tvShow.title}</span></td>
                        <td>{tvShow.season}</td>
                        <td>{tvShow.episode}</td>
                        <td>{tvShow.year}</td>
                        <td><div className='genres'>{tvShow.genres}</div></td>
                        <td>
                            {tvShow.status == 'Active' && <span className='green'>{tvShow.status}</span>}
                            {tvShow.status == 'Not Active' && <span className='red'>{tvShow.status}</span>}
                        </td>
                        <td> 
                            {/* Add action buttons here */}
                            <FontAwesomeIcon className='icon' icon={faInfoCircle} />
                            <FontAwesomeIcon className='icon' icon={faEdit} />
                            <FontAwesomeIcon className='icon' icon={faTrash} />
                        </td>
                        </tr>                        
                    ))}
                </tbody>
            </table>
        </div>
    );

}


export default TvShowsTable;