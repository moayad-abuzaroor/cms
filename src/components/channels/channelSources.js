import React, { useState } from "react";
import ChannelsTitleComponent from "../shared/channelsTitleComponent";

function ChannelSources(){

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
    const [channelProtectionRequiredMsg, setChannelProtectionRequiredMsg] = useState(false);

    const handleChannelProtectionChange = (e) => {
        setChannelProtection(e.target.value);
        setChannelProtectionRequiredMsg(false); // Reset required message when input changes
    };

    return(
        <div className="contatiner-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
            <div className="row">
                <div className="col">
                    <p className="pathText">Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Movies</span></p>
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
                            <label className="labelBox">Protection <span className="text-danger">*</span></label>
                            <select value={channelProtection} onChange={handleChannelProtectionChange} name="Protection"
                                className={`form-control ${channelProtectionRequiredMsg ? 'is-invalid' : ''}`}
                            >
                                <option selected="false" disabled="disabled">Select a Protection</option>
                                <option>disabled</option>
                                <option>nimble</option>
                                <option>nimble2</option>
                            </select>
                            {channelProtectionRequiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>
                    </div>

                    <div className="line mt-3">
                        <p className="lineLabel">Backup Source</p>
                    </div>

                    <div className='form-group col-md-4 mt-1'>
                        <div className='form-check mt-3'>
                            <input className='form-check-input' style={{transform: "scale(1.4)"}} type='checkbox' />
                            <label className='form-check-label labelBox ml-1' style={{fontSize: '100%'}}>Enable Backup Source</label>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );

}

export default ChannelSources;