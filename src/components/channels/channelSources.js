import React, { useState } from "react";
import ChannelsTitleComponent from "../shared/channelsTitleComponent";

function ChannelSources(){

    const [backupCheckbox, setBackupCheckbox] = useState(false);

    const [channelStreamLocation, setChannelStreamLocation] = useState(null);
    const [channelLocationRequiredMsg, setChannelLocationRequiredMsg] = useState(false);

    const handleChannelStreamLocationChange = (e) => {
        setChannelStreamLocation(e.target.value);
        setChannelLocationRequiredMsg(false); // Reset required message when input changes
    };

    const [channelUrlPath, setChannelUrlPath] = useState('');
    const [channelUrlRequiredMsg, setChannelUrlRequiredMsg] = useState(false);

    const handleChannelUrlChange = (e) => {
        setChannelUrlPath(e.target.value);
        setChannelUrlRequiredMsg(false); // Reset required message when input changes
    };

    const [channelProtection, setChannelProtection] = useState(null);

    const handleChannelProtectionChange = (e) => {
        setChannelProtection(e.target.value);
    };

    const [backupStreamLocation, setBackupStreamLocation] = useState(null);
    const [backupLocationRequiredMsg, setBackupLocationRequiredMsg] = useState(false);

    const handleBackupStreamLocationChange = (e) => {
        setBackupStreamLocation(e.target.value);
        setBackupLocationRequiredMsg(false); // Reset required message when input changes
    };

    const [backupUrlPath, setBackupUrlPath] = useState('');
    const [backupUrlRequiredMsg, setBackupUrlRequiredMsg] = useState(false);

    const handleBackupUrlChange = (e) => {
        setBackupUrlPath(e.target.value);
        setBackupUrlRequiredMsg(false); // Reset required message when input changes
    };

    const [backupProtection, setBackupProtection] = useState(null);

    const handleBackupProtectionChange = (e) => {
        setBackupProtection(e.target.value);
    };

    return(
        <div className="contatiner-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
            <div className="row">
                <div className="col">
                    <p className="pathText">Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Channels</span></p>
                </div>
            </div>

            <ChannelsTitleComponent/>

            <div className="row">
                <form className="col-lg-11 mx-auto addForm" style={{backgroundColor: 'white'}}>

                    {/*<MoviesNavBar/>*/}

                    <div className="line mt-1">
                        <p className="lineLabel">Primary Source</p>
                    </div>

                    <div className="form-row mt-2">
                        <div className="form-group col-md-4">
                            <label className="labelBox">Stream Location <span className="text-danger">*</span></label>
                            <select
                              value={channelStreamLocation}
                              onChange={handleChannelStreamLocationChange}
                              className={`form-control ${channelLocationRequiredMsg ? 'is-invalid' : ''}`} 
                              name="StreamLocation"
                              >
                                <option selected="false" disabled="disabled">Select Stream Location</option>
                                <option>External URL</option>
                                <option>Media Server / CDN</option>
                            </select>
                            {channelLocationRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className="form-group col-md-4">
                            <label className="labelBox">URL/Path <span className="text-danger">*</span></label>
                            <input value={channelUrlPath} onChange={handleChannelUrlChange} className={`form-control ${channelUrlRequiredMsg ? 'is-invalid' : ''}`} />
                            {channelUrlRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className="form-group col-md-4">
                            <label className="labelBox">Protection</label>
                            <select value={channelProtection} onChange={handleChannelProtectionChange} name="Protection"className='form-control' >
                                <option selected="false" disabled="disabled">Select a Protection</option>
                                <option>disabled</option>
                                <option>nimble</option>
                                <option>nimble2</option>
                            </select>
                            { channelProtection == 'disabled' ? false : true  && channelProtection && <label className="labelBox mt-2">DRM Content ID</label> }
                            { channelProtection == 'disabled' ? false : true  && channelProtection && <input className='form-control'/>}
                        </div>
                    </div>

                    <div className="line mt-3">
                        <p className="lineLabel">Backup Source</p>
                    </div>

                    <div className='form-group col-md-4 mt-1'>
                        <div className='form-check mt-3'>
                            <input className='form-check-input' onChange={() => (setBackupCheckbox(!backupCheckbox))} style={{transform: "scale(1.4)"}} type='checkbox' />
                            <label className='form-check-label labelBox ml-1' style={{fontSize: '100%'}}>Enable Backup Source</label>
                        </div>
                    </div>

                    {backupCheckbox && <div className="form-row mt-2">
                        <div className="form-group col-md-4">
                            <label className="labelBox">Stream Location <span className="text-danger">*</span></label>
                            <select
                              value={backupStreamLocation}
                              onChange={handleBackupStreamLocationChange}
                              className={`form-control ${backupLocationRequiredMsg ? 'is-invalid' : ''}`} 
                              name="StreamLocation"
                              >
                                <option selected="false" disabled="disabled">Select Stream Location</option>
                                <option>External URL</option>
                                <option>Media Server / CDN</option>
                            </select>
                            {backupLocationRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className="form-group col-md-4">
                            <label className="labelBox">URL/Path <span className="text-danger">*</span></label>
                            <input value={backupUrlPath} onChange={handleBackupUrlChange} className={`form-control ${backupUrlRequiredMsg ? 'is-invalid' : ''}`} />
                            {backupUrlRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className="form-group col-md-4">
                            <label className="labelBox">Protection</label>
                            <select value={backupProtection} onChange={handleBackupProtectionChange} name="Protection"className='form-control' >
                                <option selected="false" disabled="disabled">Select a Protection</option>
                                <option>disabled</option>
                                <option>nimble</option>
                                <option>nimble2</option>
                            </select>
                            { backupProtection == 'disabled' ? false : true  && backupProtection && <label className="labelBox mt-2">DRM Content ID</label> }
                            { backupProtection == 'disabled' ? false : true  && backupProtection && <input className='form-control'/>}
                        </div>
                    </div>}

                    <div className='form-group mt-4'>
                        <input className='btn btn-primary' type='submit' value="Save" />
                        <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
                    </div>

                </form>
            </div>
        </div>
    );

}

export default ChannelSources;