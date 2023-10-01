import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import MovieTitleComponent from "../shared/movietTitleComponent";
import ChannelsTitleComponent from "../shared/channelsTitleComponent";
import ChannelsNavBar from "../shared/ChannelsNavBar";
import { faCircleMinus, faList, faMinusCircle, faPersonCircleMinus, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function AddChannel(){

    const [epg, setEPG] = useState([
        {
            title: 'Abu Dhabi AE',
            source: 'EPG best',
            last_updated: '6/25/23, 11:00 PM',
            expire: '7/2/23, 12:00 AM',
            syncing: 'Yes'
        },
        {
            title: '12 Keshet IL',
            source: 'EPG best',
            last_updated: '6/25/23, 11:00 PM',
            expire: '7/2/23, 12:00 AM',
            syncing: 'Yes'
        },
        {
            title: 'Al Jazeera',
            source: 'EPG best',
            last_updated: '6/25/23, 11:00 PM',
            expire: '7/2/23, 12:00 AM',
            syncing: 'No'
        },
        {
            title: '12 Keshet IL',
            source: 'EPG best',
            last_updated: '6/25/23, 11:00 PM',
            expire: '7/2/23, 12:00 AM',
            syncing: 'Yes'
        },
        {
            title: 'Al Jazeera',
            source: 'EPG best',
            last_updated: '6/25/23, 11:00 PM',
            expire: '7/2/23, 12:00 AM',
            syncing: 'No'
        },
        {
            title: '12 Keshet IL',
            source: 'EPG best',
            last_updated: '6/25/23, 11:00 PM',
            expire: '7/2/23, 12:00 AM',
            syncing: 'Yes'
        },
        {
            title: 'Al Jazeera',
            source: 'EPG best',
            last_updated: '6/25/23, 11:00 PM',
            expire: '7/2/23, 12:00 AM',
            syncing: 'No'
        }
    ]);

    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 8; // Adjust as needed
    const totalPages = Math.ceil(epg.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentEPG = epg.slice(startIndex, endIndex);

    const [selectedEPG, setSelectedEPG] = useState('');
    const handleTDClick = (title) => {
        setSelectedEPG(title);
        closeModal();
    };

    const [title, setTitle] = useState('');
    const [requiredMsg, setRequiredMsg] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setRequiredMsg(false); // Reset required message when input changes
    };

    const [channelNumber, setChannelNumber] = useState('');
    const [channelNumberRequiredMsg, setChannelNumberRequiredMsg] = useState(false);

    const handleChannelNumberChange = (e) => {
        setChannelNumber(e.target.value);
        setChannelNumberRequiredMsg(false); // Reset required message when input changes
    };

    const [type, setType] = useState(null);
    const [typeRequiredMsg, setTypeRequiredMsg] = useState(false);

    const handleTypeChange = (e) => {
        setType(e.target.value);
        setTypeRequiredMsg(false); // Reset required message when input changes
    };

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [categoriesOptions, setCategoriesOptions] = useState([
        'Categories 1',
        'Categories 2',
        'Categories 3'
    ]);
    const [categoriesRequiredMsg, setCategoriesRequiredMsg] = useState(false);

    const handleCategoriesSelect = (e) => {
        const selectedCategory = e.target.value;
        if (selectedCategory && !selectedCategories.includes(selectedCategory)) {
        setSelectedCategories([...selectedCategories, selectedCategory]);
        }
        setCategoriesRequiredMsg(false); // Reset the validation message
    };
    

    const handleRemoveCategories = (category) => {
        setSelectedCategories(selectedCategories.filter(item => item !== category));
    };

    var count = 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') {
            setRequiredMsg(true);
            count = count + 1;
        } else {
            // Handle form submission
            setRequiredMsg(false);
        }

        if(selectedCategories.length == 0){
            setCategoriesRequiredMsg(true);
            count = count + 1;
        } else {
            setCategoriesRequiredMsg(false);
        }

        if(type == null){
            setTypeRequiredMsg(true);
            count = count + 1;
        } else {
            setTypeRequiredMsg(false);
        }

        if(channelNumber == ''){
            setChannelNumberRequiredMsg(true);
            count = count + 1;
        } else {
            setChannelNumberRequiredMsg(false);
        }
    }

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return(
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%'}}>
            <div className='row'>
                <div className='col'>
                <   p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Channels</span></p>
                </div>
            </div>

            <ChannelsTitleComponent/>

            <div className="row">
                <form onSubmit={handleSubmit} className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}}>

                    <ChannelsNavBar />

                    <div className='form-row mt-4'>
                        <div className='form-group col-md-4'>
                            <label htmlFor="title" className='labelBox'>Title (In English) <span className='text-danger'>*</span></label>
                            <input 
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                className={`form-control ${requiredMsg ? 'is-invalid' : ''}`} 
                            />

                            {requiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Electronic Program Guide</label>
                            <div style={{display: 'flex'}}>
                                <input value={selectedEPG} className='form-control customBorderRight' disabled/>
                                <button type="button" className="btn btn-primary customBorderLeft customBorderRight" onClick={openModal}>
                                    <FontAwesomeIcon className='mx-1' icon={faList} />
                                </button>
                                <button type="button" className="btn btn-primary customBorderLeft" onClick={() => {setSelectedEPG('')}}>
                                    <FontAwesomeIcon icon={faCircleMinus} />
                                </button>
                            </div>                            
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Channel Categories <span className='text-danger'>*</span></label>
                            <select
                                className={`form-control ${categoriesRequiredMsg ? 'is-invalid' : ''}`}
                                name="Categories"
                                onChange={handleCategoriesSelect}
                                value="" // This is important to reset the selection after each pick
                            >
                            <option selected="false" disabled value="">
                            Select Channel Categories
                            </option>
                            {categoriesOptions.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                            ))}
                            </select>
                            <div className="mt-2">
                                {selectedCategories.map((category, index) => (
                                <span
                                    key={index}
                                    className="badge badge-pill badge-primary mr-2"
                                    style={{ cursor: 'pointer', color: 'white' }}
                                    onClick={() => handleRemoveCategories(category)}
                                >
                                    {category} <span className="font-weight-bold">x</span>
                                </span>
                                ))}
                            </div>
                            {categoriesRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Channel Number <span className='text-danger'>*</span></label>
                            <input value={channelNumber} onChange={handleChannelNumberChange} className={`form-control ${channelNumberRequiredMsg ? 'is-invalid' : ''}`} type='number' />
                            {channelNumberRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>
                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Select Type <span className='text-danger'>*</span></label>
                            <select value={type} onChange={handleTypeChange} className={`form-control ${typeRequiredMsg ? 'is-invalid' : ''}`} name='type'>
                                <option selected="false" disabled="disabled">Select Type</option>
                                <option>Video</option>
                                <option>Audio</option>
                            </select>
                            {typeRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Parental Rating</label>
                            <select className='form-control' name='parentalRating'>
                                <option selected="false" disabled="disabled">Select a Parental Rating</option>
                                <option>Restricted</option>
                            </select>
                        </div>
                        <div className='form-group col-md-4 mt-3 ml-4'>
                            <div className='form-check mt-4'>
                                <input className='form-check-input' style={{transform: "scale(1.1)"}} type='checkbox' />
                                <label className='form-check-label labelBox'>Active</label>
                            </div>
                        </div>
                    </div>

                    <div className='form-group mt-4'>
                        <input className='btn btn-primary' type='submit' value="Save" />
                        <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
                    </div>                    
                </form>
            </div>


            {modalVisible &&
                <div className="custom-modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title">Select Electronic Program Guide</h6>
                            <button type="button" className="close" onClick={closeModal} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Modal content goes here */}
                            <div className="form-row mt-1">
                                <div className="form-group col-md-4">
                                    <label className="labelBox">
                                        EPG Source
                                    </label>
                                    <select
                                        className='form-control'
                                        name="epgsource"
                                    >
                                        <option selected="false" disabled="disabled">
                                        Select EPG Source
                                        </option>
                                        <option>EPG best</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="labelBox">Title</label>
                                    <input
                                        className='form-control'
                                        type="text"
                                    />
                                </div>
                                <div className="mt-2 ml-1">
                                    <button type="button" className="btn btn-primary mt-4" >Search</button>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center align-middle">Title</th>
                                            <th className="text-center align-middle">EPG Source</th>
                                            <th className="text-center align-middle">Last Updated</th>
                                            <th className="text-center align-middle">EPG Expire</th>
                                            <th className="text-center align-middle">Syncing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentEPG.map((ep, index) => (
                                            <tr className="text-center align-items-center" key={index}>
                                                <td className='align-middle'>{ep.title}</td>
                                                <td className='align-middle'>{ep.source}</td>
                                                <td className='align-middle'>{ep.last_updated}</td>
                                                <td className='align-middle'>{ep.expire}</td>
                                                <td className='align-middle' onClick={() => handleTDClick(ep.title)} style={{cursor: 'pointer'}}>
                                                    <span className={ep.syncing === 'Yes' ? 'badge badge-success custom_white' : 'badge badge-danger custom_white'}>
                                                        {ep.syncing}
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
                </div>
            }



        </div>
    );

}

export default AddChannel;