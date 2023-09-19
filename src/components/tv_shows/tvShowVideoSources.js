import React from "react";
import TvShowTitleComponent from "../shared/tvShowsTitleComponent";


function TvShowVideoSources(){

    return(
        <div className="container">
            <div className='path'>
                <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>Tv Shows</span></p>
            </div>

            <TvShowTitleComponent/>

            <div className="addForm">
                <div className='line'>
                    <p className='lineLabel'>Trailer Source</p>
                </div>
                <div className="formRow">
                    <div className="formDiv">
                        <label className="labelBox">Stream Location <span className="labelStar">*</span></label>
                        <select class='inputBox' name='StreamLocation'>
                            <option>External URL</option>
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </div>
                    <div className="formDiv">
                        <label className="labelBox">URL/Path <span className="labelStar">*</span></label>
                        <input className="inputBox" />
                    </div>
                </div>

                <div className="formDiv">
                    <label class='labelBox'>Protection <span class='labelStar'>*</span></label>
                        <select class='inputBox' name='StreamLocation'>
                            <option>Disabled</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                </div>

                <div class='submitDiv'>
                    <input class='formButton' type='submit' value="Save" />
                    <button class='cancelButton'>Cancel</button>
                </div>

            </div>
        </div>
    );
}

export default TvShowVideoSources;