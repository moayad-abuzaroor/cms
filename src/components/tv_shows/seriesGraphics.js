import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../../stylesheets/graphics.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import MovieTitleComponent from '../shared/movietTitleComponent';
import TvShowTitleComponent from '../shared/tvShowsTitleComponent';


function SeriesGraphics(){

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
        setSelectedImage(reader.result);
        };

        if (file) {
        reader.readAsDataURL(file);
        }
    };

    return(
        <div className="container">
            <div className='path'>
                <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>Tv Shows</span></p>
            </div>
            
            <TvShowTitleComponent/> 

            <div className="addForm">
                <div className="formRow">
                    <div className='formDiv'>
                        <select className='graph-inputBox' name='StreamLocation'>
                            <option>Cover</option>
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </div>

                    <div className="file-input">
                        <label for="file-upload" class="file-label">
                        <FontAwesomeIcon className='icon' icon={faPlus} />Browse
                        </label>
                        <input type="file" id="file-upload" class="file-input-field" accept="image/*" onChange={handleImageUpload} />
                    </div>
                </div>
                <div className='line'>
                    <p className='lineLabel'>Cover(s)</p>
                </div>
                <div className="formRow">
                    {selectedImage && <img src={selectedImage} alt="Selected" className='image' />}
                </div>

                <div className='line'>
                    <p className='lineLabel'>Banner(s)</p>
                </div>

                <div className='line'>
                    <p className='lineLabel'>Gallery</p>
                </div>

                <div className='graphics' style={{paddingTop: '20px'}}>
                    <span>Allowed Extinsions</span>
                    <span className='graphics-allowed' style={{marginLeft: '1%'}}>.jpg</span>
                    <span className='graphics-allowed'>.png</span>
                    <span className='graphics-allowed'>.jpeg</span>
                </div> 

            </div>
        </div>
    );

}

export default SeriesGraphics;