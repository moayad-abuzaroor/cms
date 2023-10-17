import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ChannelsTitleComponent from "../shared/channelsTitleComponent";
import ChannelsNavBar from "../shared/ChannelsNavBar";
import { faCircleMinus, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function AddChannel({ sharedData, setSharedData }){

    console.log(sharedData)
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

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);

    const initialCategories = sharedData?.id ? [sharedData.channel_categories] : [];
    const initialStatusCheck = sharedData?.id ? (sharedData.channel_status === 'Active') : false;
    const initialStatus = sharedData?.id ? sharedData.channel_status : 'InActive';

    const [selectedCategories, setSelectedCategories] = useState(initialCategories);
    const [statusCheck, setStatusCheck] = useState(initialStatusCheck);
    const [status, setStatus] = useState(initialStatus);

    const handleStatusChange = (e) => {
        const isChecked = e.target.checked;
        setStatusCheck(isChecked);
        if (isChecked) {
          setStatus('Active');
        } else {
          setStatus('InActive');
        }
      };


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

    const [requiredMsg, setRequiredMsg] = useState(false);

    const [channelNumberRequiredMsg, setChannelNumberRequiredMsg] = useState(false);

    const [typeRequiredMsg, setTypeRequiredMsg] = useState(false);

    const [category, setCategory] = useState('');
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
            setCategory(selectedCategory)
        }
        setCategoriesRequiredMsg(false); // Reset the validation message
    };
    

    const handleRemoveCategories = (category) => {
        setSelectedCategories(selectedCategories.filter(item => item !== category));
    };

    const [channelDetails, setChannelDetails] = useState({
        channel_title: sharedData.channel_title, channel_epg: selectedEPG,
        channel_categories: category, channel_number: sharedData.channel_number, channel_type: sharedData.channel_type,
        channel_parental_rate: sharedData.channel_parental_rate,
        channel_status: status, channel_stream_location: sharedData.channel_stream_location, channel_url: sharedData.channel_url,
        channel_protection: sharedData.channel_protection, backup_stream_location: sharedData.backup_stream_location,
        backup_url: sharedData.backup_url, backup_protection: sharedData.backup_protection, channel_logo: sharedData.channel_logo, channel_drm: sharedData.channel_drm,
        backup_drm: sharedData.backup_drm
    });

    const handleTitleChange = (e) => {
        setChannelDetails({
          ...channelDetails,
          channel_title: e.target.value
        });
        setRequiredMsg(false); // Reset required message when input changes
    };

    const handleEPGChange = (e) => {
        setChannelDetails({
          ...channelDetails,
          channel_epg: selectedEPG
        });
    };

    const handleTypeChange = (e) => {
        setChannelDetails({
          ...channelDetails,
          channel_type: e.target.value
        });
        setTypeRequiredMsg(false);
    };

    const handleNumberChange = (e) => {
        setChannelDetails({
          ...channelDetails,
          channel_number: e.target.value
        });
        setChannelNumberRequiredMsg(false);
    };

    const handleParentalChange = (e) => {
        setChannelDetails({
          ...channelDetails,
          channel_parental_rate: e.target.value
        });
    };

    var count = 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (channelDetails.channel_title == '') {
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

        if(channelDetails.channel_type == null || channelDetails.channel_type == ''){
            setTypeRequiredMsg(true);
            count = count + 1;
        } else {
            setTypeRequiredMsg(false);
        }

        if(channelDetails.channel_number == ''){
            setChannelNumberRequiredMsg(true);
            count = count + 1;
        } else {
            setChannelNumberRequiredMsg(false);
        }

        if(count == 0){
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShowSuccessAlert(false);
            }, 5000);
            setChannelDetails({...channelDetails, channel_categories: selectedCategories[0]})

            const formData = new FormData(); // Create a FormData object to handle file uploads

            formData.append('channel_title', channelDetails.channel_title);
            if (channelDetails.channel_epg !== null) formData.append('channel_epg', selectedEPG);
            if (channelDetails.channel_categories !== null) formData.append('channel_categories', selectedCategories[0]);
            if (channelDetails.channel_number !== null) formData.append('channel_number', channelDetails.channel_number);
            if (channelDetails.channel_type !== null) formData.append('channel_type', channelDetails.channel_type);
            if (channelDetails.channel_parental_rate !== null) formData.append('channel_parental_rate', channelDetails.channel_parental_rate);
            if (channelDetails.channel_status !== null) formData.append('channel_status', status);

            if(sharedData.id == null){
                // Send the request
                fetch('http://localhost:8000/api/insert_channel/', {
                  method: 'POST',
                  body: formData,
                })
                .then(response => response.json())
                .then(data => {
                  // Handle the response data if needed
                  console.log('Success:', data);
                  setSharedData(data);
                })
                .catch(error => {
                  // Handle errors
                  console.error('Error:', error);
                });
              }
              else{
                // Send the request
                fetch(`http://localhost:8000/api/channel/${sharedData.id}`, {
                  method: 'PUT',
                  body: formData,
                })
                .then(response => response.json())
                .then(data => {
                  // Handle the response data if needed
                  console.log('Success:', data);
                  setSharedData(data);
                })
                .catch(error => {
                  // Handle errors
                  console.error('Error:', error);
                });
              }
        }
        else{
            setShowDangerAlert(true)
            setTimeout(() => {
              setShowDangerAlert(false);
            }, 5000);
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
                                value={channelDetails.channel_title}
                                onChange={handleTitleChange}
                                className={`form-control ${requiredMsg ? 'is-invalid' : ''}`} 
                            />

                            {requiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Electronic Program Guide</label>
                            <div style={{display: 'flex'}}>
                                <input value={selectedEPG} onChange={handleEPGChange} className='form-control customBorderRight' disabled/>
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
                            <input value={channelDetails.channel_number} onChange={handleNumberChange} className={`form-control ${channelNumberRequiredMsg ? 'is-invalid' : ''}`} type='number' />
                            {channelNumberRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>
                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Select Type <span className='text-danger'>*</span></label>
                            <div style={{display: 'flex'}}>
                                <select value={channelDetails.channel_type} onChange={handleTypeChange} className={`customBorderRight form-control ${typeRequiredMsg ? 'is-invalid' : ''}`} name='type'>
                                    <option value='' selected="false" disabled="disabled">Select Type</option>
                                    <option>Video</option>
                                    <option>Audio</option>
                                </select>
                                <button type="button" className="btn btn-danger customBorderLeft" onClick={() => {setChannelDetails({...channelDetails, channel_type: ''})}}>
                                    <FontAwesomeIcon icon={faCircleMinus} />
                                </button>
                            </div>
                            {typeRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Parental Rating</label>
                            <div style={{display: 'flex'}}>
                                <select value={channelDetails.channel_parental_rate} onChange={handleParentalChange} className='form-control customBorderRight' name='parentalRating'>
                                    <option value='' selected="false" disabled="disabled">Select a Parental Rating</option>
                                    <option>Restricted</option>
                                </select>
                                <button type="button" className="btn btn-danger customBorderLeft" onClick={() => {setChannelDetails({...channelDetails, channel_type: ''})}}>
                                    <FontAwesomeIcon icon={faCircleMinus} />
                                </button>
                            </div>
                        </div>
                        <div className='form-group col-md-4 mt-3 ml-4'>
                            <div className='form-check mt-4'>
                                <input className='form-check-input' style={{transform: "scale(1.1)"}} checked={statusCheck} onChange={handleStatusChange} type='checkbox' />
                                <label className='form-check-label labelBox'>Active</label>
                            </div>
                        </div>
                    </div>

                    <div className='form-group mt-4'>
                        <input className='btn btn-primary' type='submit' value="Save" />
                        <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
                    </div>                    
                </form>
                {showSuccessAlert && (
                    <div className="alert alert-success fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Metadata added successfully
                    </div>
                )}
                {showDangerAlert && (
                    <div class="alert alert-danger fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Please fill the required fields!
                    </div>
                )}
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