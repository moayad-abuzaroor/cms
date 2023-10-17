import React, { useState } from "react";
import ChannelsTitleComponent from "../shared/channelsTitleComponent";
import ChannelsNavBar from "../shared/ChannelsNavBar";

function ChannelLogo({ sharedData, setSharedData }){

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);

    const [selectedImage, setSelectedImage] = useState(sharedData.channel_logo);
    const [backendSelectedImage, setBackendSelectedImage] = useState('');
    console.log(selectedImage)
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setSelectedImage(reader.result);
            setBackendSelectedImage(file);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setBackendSelectedImage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(selectedImage == null){
            setShowDangerAlert(true)
            setTimeout(() => {
            setShowDangerAlert(false);
        }, 5000);
        }
        else{
            setShowSuccessAlert(true);
            setTimeout(() => {
            setShowSuccessAlert(false);
        }, 5000);
        }

        const formData = new FormData(); // Create a FormData object to handle file uploads

        // Add form data to the FormData object
        formData.append('channel_title', sharedData.channel_title);
        formData.append('channel_logo', backendSelectedImage);
    
        // Send the request
        fetch(`http://localhost:8000/api/channel/${sharedData.id}`, {
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
    };

    return(
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%' }}>
            <div className="row">
                <div className="col">
                    <p className="pathText">Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Channels</span></p>
                </div>
            </div>

            <ChannelsTitleComponent/>

            <div className="row">
                <form onSubmit={handleSubmit} className="col-lg-11 mx-auto addForm" style={{backgroundColor: 'white'}}>

                    <ChannelsNavBar />

                    <div className='form-group col-md-6 mt-4'>
                        <div className='input-group'>
                            <div className='custom-file'>
                                <input type='file' className='custom-file-input' id='file-upload' accept='image/*' onChange={handleImageUpload} />
                                <label className='custom-file-label' htmlFor='file-upload'>{backendSelectedImage.name || 'Select Image'}</label>
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
                    <div className='form-group mt-4'>
                        <input className='btn btn-primary' type='submit' value="Save" />
                        <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
                    </div>
                </form>
                {showSuccessAlert && (
                    <div className="alert alert-success fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Logo added successfully
                    </div>
                )}
                {showDangerAlert && (
                    <div class="alert alert-danger fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                        Please select cover!
                    </div>
                )}
            </div>
        </div>
    )

}

export default ChannelLogo;
