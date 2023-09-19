import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../../stylesheets/videoSources.css'
import MovieTitleComponent from '../shared/movietTitleComponent';


function VideoSources(){

    return(
        <div class="container">
            <div class='path'>
                <p class='pathText'>Media Asset Management/VOD / <span>Movies</span></p>
            </div>

            <MovieTitleComponent/>

            <div class="addForm">
            <form class="formBox">
                <div class='line'>
                    <p class='lineLabel'>Movie Source</p>
                </div>
                <div class="formRow">
                    <div class='formDiv'>
                        <label class='labelBox'>Stream Location <span class='labelStar'>*</span></label>
                        <select class='inputBox' name='StreamLocation'>
                            <option>VOD Streaming15</option>
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </div>
                    <div class='formDiv'>
                        <label class='labelBox'>URL/Path <span class='labelStar'>*</span></label>
                        <input class='inputBox'/> 
                    </div>

                </div>
                <div class="formRow">
                    <div class='formDiv'>
                        <label class='labelBox'>Protection<span class='labelStar'>*</span></label>
                        <select class='inputBox' name='StreamLocation'>
                            <option>nimble</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </div>
                
                
                
                </div>
                <div class="formRow">

                    <div class='formDiv'>
                        <label class='labelBox'>DRM Content ID</label>
                        <input class='inputBox'/> 
                    </div>
                        <div>
                        <label class='labelBox'>Contain Video Profiles</label>
                        <div class="check">
                            <input  type='checkbox' />
                            <input type="text" placeholder="Search" />
                            
                        </div>
                    </div>
                </div>
                <div class='line'>
                    <p class='lineLabel'>Trailer Source</p>
                </div>
                <div class="formRow">
                    <div class='formDiv'>
                        <label class='labelBox'>Stream Location <span class='labelStar'>*</span></label>
                        <select class='inputBox' name='StreamLocation'>
                            <option>VOD Streaming15</option>
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </div>
                    <div class='formDiv'>
                        <label class='labelBox'>URL/Path <span class='labelStar'>*</span></label>
                        <input class='inputBox'/> 
                    </div>
                

                </div>
                <div class="formRow">
                    <div class='formDiv'>
                        <label class='labelBox'>Protection<span class='labelStar'>*</span></label>
                        <select class='inputBox' name='StreamLocation'>
                            <option>nimble</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </div>
                </div>
                <div class="formRow">
                    <div class='formDiv'>
                    <label class='labelBox'>DRM Content ID</label>
                    <input class='inputBox'/> 
                </div>
                <div>
                    <label class='labelBox'>Contain Video Profiles</label>
                    <div class="check">
                        <input  type='checkbox' />
                        <input type="text" placeholder="Search" />
                        
                    </div>
                </div>
            </div>
            <div class='submitDiv'>
                <input class='formButton' type='submit' value="Save" />
                <button class='cancelButton'>Cancel</button>
            </div>
            </form>
            </div>
        </div>

    );

}


export default VideoSources;