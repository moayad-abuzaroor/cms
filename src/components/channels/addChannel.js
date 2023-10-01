import React, { useState } from "react";
import MovieTitleComponent from "../shared/movietTitleComponent";
import ChannelsTitleComponent from "../shared/channelsTitleComponent";
import ChannelsNavBar from "../shared/ChannelsNavBar";


function AddChannel(){

    const [title, setTitle] = useState('');
    const [requiredMsg, setRequiredMsg] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setRequiredMsg(false); // Reset required message when input changes
    };

    const [channelNumber, setChannelNumber] = useState('');
    const [channelNumberRequiredMsg, setChannelNumberRequiredMsg] = useState(false);

    const handleChannelNumberChange = (e) => {
        setChannelNumber(e.target.value);
        setChannelNumberRequiredMsg(false); // Reset required message when input changes
    };

    const [type, setType] = useState('');
    const [typeRequiredMsg, setTypeRequiredMsg] = useState(false);

    const handleTypeChange = (e) => {
        setType(e.target.value);
        setTypeRequiredMsg(false); // Reset required message when input changes
    };

    const [selectedCategories, setSelectedCategories] = useState([]);
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
        }
        setCategoriesRequiredMsg(false); // Reset the validation message
    };
    

    const handleRemoveCategories = (category) => {
        setSelectedCategories(selectedCategories.filter(item => item !== category));
    };

    return(
        <div className="container-fluid bg-light" style={{ padding: '2%', height: '100%'}}>
            <div className='row'>
                <div className='col'>
                <   p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>Channels</span></p>
                </div>
            </div>

            <ChannelsTitleComponent/>

            <div className="row">
                <form className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}}>

                    <ChannelsNavBar />

                    <div className='form-row mt-4'>
                        <div className='form-group col-md-4'>
                            <label htmlFor="title" className='labelBox'>Title (In English) <span className='text-danger'>*</span></label>
                            <input 
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                className={`form-control ${requiredMsg ? 'is-invalid' : ''}`} 
                            />

                            {requiredMsg && <div className='text-danger small'>Required Field</div>}
                        </div>

                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Electronic Program Guide</label>
                            <input className='form-control' disabled/>
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
                            <input className={`form-control ${channelNumberRequiredMsg ? 'is-invalid' : ''}`} type='number' />
                        </div>
                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Select Type <span className='text-danger'>*</span></label>
                            <select value={type} onChange={handleTypeChange} className='form-control' name='type'>
                                <option selected="false" disabled="disabled">Select Type</option>
                                <option>Video</option>
                                <option>Audio</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className='form-group col-md-4'>
                            <label className='labelBox'>Parental Rating</label>
                            <select className='form-control' name='parentalRating'>
                                <option selected="false" disabled="disabled">Select a Parental Rating</option>
                                <option>Restricted</option>
                            </select>
                        </div>
                        <div className='form-group col-md-4 mt-3 ml-4'>
                            <div className='form-check mt-4'>
                                <input className='form-check-input' style={{transform: "scale(1.1)"}} type='checkbox' />
                                <label className='form-check-label labelBox'>Active</label>
                            </div>
                        </div>
                    </div>

                    <div className='form-group mt-4'>
                        <input className='btn btn-primary' type='submit' value="Save" />
                        <button type='button' className='btn btn-secondary ml-1'>Cancel</button>
                    </div>                    
                </form>
            </div>
        </div>
    );

}

export default AddChannel;