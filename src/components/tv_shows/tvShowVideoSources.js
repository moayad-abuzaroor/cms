import React, { useState } from "react";
import TvShowTitleComponent from "../shared/tvShowsTitleComponent";
import TvShowsNavBar from "../shared/TvShowsNavBar";

function TvShowVideoSources(){

    const [showStreamLocation, setShowStreamLocation] = useState(null);
    const [showLocationRequiredMsg, setShowLocationRequiredMsg] = useState(false);

    const handleShowStreamLocationChange = (e) => {
        setShowStreamLocation(e.target.value);
        setShowLocationRequiredMsg(false); // Reset required message when input changes
    };

    const [showUrlPath, setShowUrlPath] = useState('');
    const [showUrlRequiredMsg, setShowUrlRequiredMsg] = useState(false);

    const handleShowUrlChange = (e) => {
        setShowUrlPath(e.target.value);
        setShowUrlRequiredMsg(false); // Reset required message when input changes
    };

    const [showProtection, setShowProtection] = useState(null);
    const [showProtectionRequiredMsg, setShowProtectionRequiredMsg] = useState(false);

    const handleShowProtectionChange = (e) => {
        setShowProtection(e.target.value);
        setShowProtectionRequiredMsg(false); // Reset required message when input changes
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (showStreamLocation == null) {
        setShowLocationRequiredMsg(true);
        } else {
        // Handle form submission
        setShowLocationRequiredMsg(false);
        }

        if (showUrlPath.trim() === '') {
        setShowUrlRequiredMsg(true);
        } else {
        // Handle form submission
        setShowUrlRequiredMsg(false);
        }

        if (showProtection == null) {
        setShowProtectionRequiredMsg(true);
        } else {
        // Handle form submission
        setShowProtectionRequiredMsg(false);
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
            </div>
        </div>
    );
}

export default TvShowVideoSources;
