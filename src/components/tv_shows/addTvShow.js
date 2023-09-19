import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../../stylesheets/addTvShow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TvShowTitleComponent from '../shared/tvShowsTitleComponent';



function AddTvShow(){

    const[requiredMsg, setRequiredMsg] = useState(false);

    return(
        <div className='addPageContainer'>
            <div className='path'>
                <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>Tv Shows</span></p>
            </div>
            
            <TvShowTitleComponent/>

            <div className='addForm'>                

                <form className='formBox'>
                    <div className='line'>
                        <p className='lineLabel'>Common</p>
                    </div>
                    <div className='formRow'>
                        <div className='formDiv'>
                            <label className='labelBox'>Title (In English) <span className='labelStar'>*</span></label>
                            <input className='inputBox' />
                            { requiredMsg && <span className='required'>Required Title</span>}
                        </div>
                        <div className='formDiv'>
                            <label className='labelBox'>Description (In English)</label>
                            <textarea className='areaBox'></textarea>
                        </div>
                        <div className='formDiv'>
                            <label className='labelBox'>Year</label>
                            <input className='inputBox' type='text' />
                        </div>
                        
                    </div>
                    
                    <div className='formRow'>
                        <div className='formDiv'>
                            <label className='labelBox'>First Air Date</label>
                            <input className='inputBox' type='date' />
                        </div>
                        <div className='formDiv'>
                            <label className='labelBox'>Last Air Date</label>
                            <input className='inputBox' type='date' />
                        </div>
                        <div className='formDiv'>
                            <label className='labelBox'>Rating (out of 10)</label>
                            <input className='inputBox' type='number' max={10} />
                        </div>                        
                    </div>

                    <div className='formRow'>
                        <div className='formDiv'>
                            <label className='labelBox'>Awards</label>
                            <input className='inputBox' type='text' />
                        </div>
                        <div className='formDiv'>
                            <label className='labelBox'>Episode Runtime (In Minutes)</label>
                            <input className='inputBox' type='number' />
                        </div>
                        <div className='formDiv'>
                            <label className='labelBox'>Genres <span className='labelStar'>*</span></label>
                            <select className='inputBox' name='Genres'>
                                <option>Select Genres</option>
                                <option>Genres 1</option>
                                <option>Genres 2</option>
                                <option>Genres 3</option>
                            </select>
                        </div>                        
                    </div>

                    <div className='formRow'>
                        <div className='formDiv'>
                            <label className='labelBox'>Parental Rating</label>
                            <select className='inputBox' name='parentalRating'>
                                <option>Select a Parental Rating</option>
                                <option>Rate 1</option>
                                <option>Rate 2</option>
                                <option>Rate 3</option>
                            </select>
                        </div>
                        <div className='formDiv'>
                            <label className='labelBox'>Countries</label>
                            <select className='inputBox' name='Countries'>
                                <option>Select Countries</option>
                                <option>Country 1</option>
                                <option>Country 2</option>
                                <option>Country 3</option>
                            </select>
                        </div>
                        <div className='formDiv'>
                            <label className='labelBox'>Original Version Language</label>
                            <select className='inputBox' name='Genres'>
                                <option>Select a Language</option>
                                <option>Language 1</option>
                                <option>Language 2</option>
                                <option>Language 3</option>
                            </select>
                        </div>                        
                    </div>

                    <div className='formDiv'>
                        <div>
                            <input type='checkbox'/>
                            <label className='labelBox'>Active</label>
                        </div>                                                    
                    </div>

                    <div className='line'>
                        <p className='lineLabel'>Cast</p>
                    </div>
                    
                    <div className='formRow'>
                        <div className='formDiv'>
                            <label className='labelBox'>Name</label>
                            <input className='inputBox' />
                        </div>
                        <div className='formDiv' style={{paddingRight: '6%'}}>
                            <label className='labelBox'>Role</label>
                            <input className='inputBox' />
                        </div>
                        <div className='formDiv'>
                            <button className='formButton'>Add</button>                                                        
                        </div>
                    </div>

                    <div className='formRow'>
                        <textarea className='formArea'></textarea>
                    </div>

                    <div className='line'>
                        <p className='lineLabel'>Crew</p>
                    </div>

                    <div className='formRow'>
                        <div className='formDiv'>
                            <label className='labelBox'>Name</label>
                            <input className='inputBox' />
                        </div>
                        <div className='formDiv' style={{paddingRight: '6%'}}>
                            <label className='labelBox'>Role</label>
                            <input className='inputBox' />
                        </div>
                        <div className='formDiv'>
                            <button className='formButton'>Add</button>                                                        
                        </div>
                    </div>

                    <div className='formRow'>
                        <textarea className='formArea'></textarea>
                    </div>

                    <div className='submitDiv'>
                        <input className='formButton' type='submit' value="Save"/>
                        <button className='cancelButton'>Cancel</button>
                    </div>                    
                    
                </form>
            </div>            
        </div>
    );

}


export default AddTvShow;