import React, { useState } from "react";
import ChannelsTitleComponent from "../shared/channelsTitleComponent";

function ChannelLogo(){

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

    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    return(
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
            <div className="row">
                <div className="col">
                    <p className="pathText">Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Movies</span></p>
                </div>
            </div>

            <ChannelsTitleComponent/>

            <div className="row">
                <form className="col-lg-11 mx-auto addForm" style={{backgroundColor: 'white'}}>

                    <div className='form-group col-md-6'>
                        <div className='input-group'>
                            <div className='custom-file'>
                                <input type='file' className='custom-file-input' id='file-upload' accept='image/*' onChange={handleImageUpload} />
                                <label className='custom-file-label' htmlFor='file-upload'>Select Image</label>
                            </div>
                        </div>
                    </div>

                    <div className='form-row'>
                        {selectedImage && (
                            <>
                                <img src={selectedImage} alt='Selected' className='image' />
                                <button type="button" className="btn btn-danger mt-2" style={{width:'2%', height:'2%', padding:'0.3%'}} onClick={handleRemoveImage}>X</button>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )

}

export default ChannelLogo;
