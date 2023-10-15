import React, { useState } from "react";
import TvShowTitleComponent from "../shared/tvShowsTitleComponent";
import TvShowsNavBar from "../shared/TvShowsNavBar";

function TvShowVideoSources({sharedData, setSharedData}){

    console.log(sharedData)

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);

    const [showStreamLocation, setShowStreamLocation] = useState(sharedData.tvshow_stream_location ? sharedData.tvshow_stream_location : null);
    const [showLocationRequiredMsg, setShowLocationRequiredMsg] = useState(false);

    const handleShowStreamLocationChange = (e) => {
        setShowStreamLocation(e.target.value);
        setShowLocationRequiredMsg(false); // Reset required message when input changes
    };

    const [showUrlPath, setShowUrlPath] = useState(sharedData.tvshow_url);
    const [showUrlRequiredMsg, setShowUrlRequiredMsg] = useState(false);

    const handleShowUrlChange = (e) => {
        setShowUrlPath(e.target.value);
        setShowUrlRequiredMsg(false); // Reset required message when input changes
    };

    const [showProtection, setShowProtection] = useState(sharedData.tvshow_protection);
    const [showProtectionRequiredMsg, setShowProtectionRequiredMsg] = useState(false);

    const handleShowProtectionChange = (e) => {
        setShowProtection(e.target.value);
        setShowProtectionRequiredMsg(false); // Reset required message when input changes
    };

    var count = 0;

    const handleSubmit = (e) => {
        e.preventDefault();  

        if (showStreamLocation == null) {
            setShowLocationRequiredMsg(true);
            count = count + 1;
        } else {
            // Handle form submission
            setShowLocationRequiredMsg(false);
        }

        if (showUrlPath == '') {
            setShowUrlRequiredMsg(true);
            count = count + 1;
        } else {
            // Handle form submission
            setShowUrlRequiredMsg(false);
        }

        if (showProtection == null) {
            setShowProtectionRequiredMsg(true);
            count = count + 1;
        } else {
            // Handle form submission
            setShowProtectionRequiredMsg(false);
        }

        if(count == 0){
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShowSuccessAlert(false);
            }, 5000);

            const formData = new FormData();

            formData.append('tvshow_title', sharedData.tvshow_title);
            formData.append('tvshow_genres', sharedData.tvshow_genres);

            formData.append('tvshow_stream_location', showStreamLocation);
            formData.append('tvshow_url', showUrlPath);
            formData.append('tvshow_protection', showProtection);

            // Send the request
            fetch(`http://localhost:8000/api/tvshow/${sharedData.id}`, {
                method: 'PUT',
                headers: {
                    
                },
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                // Handle the response data if needed
                console.log('Success:', data);
                setSharedData(data)
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
        }
        else{
            setShowDangerAlert(true)
            setTimeout(() => {
                setShowDangerAlert(false);
            }, 5000);
        }
    }

    return(
        <div className='container-fluid bg-light' style={{ padding: '2%', height: '100%'}}>
            <div className='row'>
                <div className='col'>
                    <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>TV Shows</span></p>
                </div>
            </div>

            <TvShowTitleComponent/>

            <div className="row">
                <form className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}} onSubmit={handleSubmit}>

                    <TvShowsNavBar/>

                    <div className='form-row mt-4'>
                        <div className='form-group col-md-6'>
                            <label className="labelBox">Stream Location <span className="text-danger">*</span></label>
                            <select value={showStreamLocation} onChange={handleShowStreamLocationChange}
                             className={`form-control ${showLocationRequiredMsg ? 'is-invalid' : ''}`} name='StreamLocation'>
                                <option selected="false" disabled="disabled">Select Stream Location</option>
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                            </select>
                            {showLocationRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className='form-group col-md-6'>
                            <label className="labelBox">URL/Path <span className="text-danger">*</span></label>
                            <input value={showUrlPath} onChange={handleShowUrlChange} className={`form-control ${showUrlRequiredMsg ? 'is-invalid' : ''}`} />
                            {showUrlRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>
                    </div>

                    <div className='form-group'>
                        <label className="labelBox">Protection <span className="text-danger">*</span></label>
                        <select value={showProtection} onChange={handleShowProtectionChange}
                         className={`form-control ${showProtectionRequiredMsg ? 'is-invalid' : ''}`} name='StreamLocation' required>
                            <option selected="false" disabled="disabled">Select a Protection</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                        {showProtectionRequiredMsg && <div className='text-danger small'>Required Field</div>}
                    </div>

                    <div className='form-group'>
                        <input className='btn btn-primary' type='submit' value="Save" />
                        <button className='btn btn-secondary ml-1'>Cancel</button>
                    </div>

                </form>
                {showSuccessAlert && (
                    <div className="alert alert-success fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Video Sources added successfully
                    </div>
                )}
                {showDangerAlert && (
                    <div class="alert alert-danger fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Please fill the required fields!
                    </div>
                )}
            </div>
        </div>
    );
}

export default TvShowVideoSources;
