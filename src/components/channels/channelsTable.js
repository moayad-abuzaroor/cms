import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTrash, faEdit, faArrowUp, faArrowDown, faFilter, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import logo1 from '../../images/logo1.jpg';
import jerk from '../../images/jerk.webp';
import shbrWnos from '../../images/shbrWnos.jpg';


function ChannelsTable(){

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        // Define the URL for your API endpoint
        const apiUrl = 'http://localhost:8000/api/get_all_channels/';
    
        // Make the GET request
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => { setChannels(data);
            })     
          .catch(error => { console.error('Error fetching channels:', error); });
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const handleSearch = () => {
        setCurrentPage(0);
      };

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
      const totalPages = Math.ceil(channels.length / itemsPerPage);
      const startIndex = currentPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
    
      const filteredChannels = channels.filter((channel) =>
        channel.channel_title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      const sortedChannels = [...filteredChannels].sort((a, b) => {
        if (sortConfig.key) {
          if (typeof a[sortConfig.key] === 'string') {
            return sortString(a, b, sortConfig.key);
          } else {
            return sortNumber(a, b, sortConfig.key);
          }
        }
        return 0;
      });

      const currentChannels = sortedChannels.slice(startIndex, endIndex);

    return(
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
            <div className="row mb-4">
                <div className="col">
                    <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Channels</span></p>
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
                    <Link to="information">
                        <button className="btn btn-primary">
                            <FontAwesomeIcon icon={faPlus} /> Add New Channel
                        </button>
                    </Link>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th className="text-center align-middle" onClick={() => handleSort('chno')}>
                                Ch.No
                                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
                            </th>
                            <th className="text-center align-middle">
                                Logo
                            </th>
                            <th className="text-center align-middle" onClick={() => handleSort('title')}>
                                Title
                                <FontAwesomeIcon className="ml-1" icon={faArrowUp} />
                                <FontAwesomeIcon className="ml-1" icon={faArrowDown} />
                            </th>
                            <th className="text-center align-middle">
                                Properties
                            </th>
                            <th className="text-center align-middle">
                                Channel Categories
                            </th>
                            <th className="text-center align-middle" onClick={() => handleSort('parental')}>
                                Parental Rating
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
                        {currentChannels.map((channel, index) => (
                            <tr className="text-center align-middle" key={index}>
                                <td className="align-middle">
                                    {channel.channel_number}
                                </td>
                                <td className="align-middle">
                                    <img src={channel.channel_logo} alt={channel.channel_title} className="mr-2 img-thumbnail" style={{ maxWidth: '50px', maxHeight: '50px' }} />
                                </td>
                                <td className="align-middle">
                                    {channel.channel_title}
                                </td>
                                <td className="align-middle">
                                    {channel.channel_type}
                                </td>
                                <td className="align-middle">
                                    <div className="bg-light p-2 rounded">
                                        {channel.channel_categories}
                                    </div>
                                </td>
                                <td className="align-middle">
                                    {channel.channel_parental_rate}
                                </td>
                                <td className='align-middle'>
                                    <span className={channel.channel_status === 'Active' ? 'badge badge-success custom_white' : 'badge badge-danger custom_white'}>
                                        {channel.channel_status}
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

export default ChannelsTable;