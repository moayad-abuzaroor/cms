import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/subtitlesPage.css'
import MovieTitleComponent from '../shared/movietTitleComponent';


function SubtitlesPage(){


    const[subtitles, setSubtitles] = useState([
        {
            locale: 'ar',
            movie_src: 'Tiger24',
            trailer_src: 'NA',
            created: '8/2/23, 11:22 AM',
            modified: '8/2/23, 11:22 AM'
        },
        {
            locale: 'en',
            movie_src: 'Tiger24',
            trailer_src: 'NA',
            created: '8/2/23, 11:23 AM',
            modified: '8/2/23, 11:23 AM'
        }
    ])

    return(       
        <div className='subtitlesContainer'>            
            <div className='path'>
                <p className='pathText'>Media Asset Management/VOD / <span style={{color: 'rgb(55, 55, 55)'}}>Movies</span></p>
            </div>

            <MovieTitleComponent/>

            <div className='subtitleForm'>
                <div className='movie_trailer'>
                    <div className='movieSource'>
                        <div className='sub-line'>
                            <p className='sub-lineLabel'>Movie Source</p>
                        </div>
                        <div className='subForm'>
                            <label className='sub-title'>Movie Subtitle <span className='sub-labelStar'>*</span></label>
                            <div class="file-input">
                                <label for="file-upload" class="file-label">
                                <FontAwesomeIcon className='icon' icon={faPlus} />Browse
                                </label>
                                <input type="file" id="file-upload" class="file-input-field" />
                            </div>
                            <div className='sub-allowed' style={{paddingTop: '8px'}}>
                                <span>Allowed Extinsions</span>
                                <span className='sub-file-allowed'>.srt</span>
                                <span className='sub-file-allowed'>.sub</span>
                                <span className='sub-file-allowed'>.sbv</span>
                                <span className='sub-file-allowed'>.smi</span>
                                <span className='sub-file-allowed'>.vtt</span>
                            </div>                            
                        </div>
                        <div className='sub-line'></div>                        
                    </div>

                    <div className='trailerSource'>
                        <div className='sub-line'>
                            <p className='sub-lineLabel'>Trailer Source</p>
                        </div>
                        <div className='subForm'>
                            <label className='sub-title'>Trailer Subtitle</label>
                            <div class="file-input">
                                <label for="file-upload" class="file-label">
                                <FontAwesomeIcon className='icon' icon={faPlus} />Browse
                                </label>
                                <input type="file" id="file-upload" class="file-input-field" />
                            </div>
                            <div className='sub-allowed' style={{paddingTop: '8px'}}>
                                <span>Allowed Extinsions</span>
                                <span className='sub-file-allowed'>.srt</span>
                                <span className='sub-file-allowed'>.sub</span>
                                <span className='sub-file-allowed'>.sbv</span>
                                <span className='sub-file-allowed'>.smi</span>
                                <span className='sub-file-allowed'>.vtt</span>
                            </div>                            
                        </div>
                        <div className='sub-line'></div>  
                    </div>
                </div>
                
                <div className='sub-languageForm'>
                    <label className='sub-title'>Language <span className='sub-labelStar'>*</span></label>
                    <div>
                        <select className='sub-language-select' name='sub-language'>
                            <option>Arabic</option>
                            <option>English</option>
                        </select>
                        <button className='sub-AddButton'>Add</button>
                    </div>
                    
                </div>

                <table className='sub-table'>
                    <thead className='sub-thead'>
                        <tr className='sub-th'>
                            <th className='sub-th'>Locale</th>
                            <th className='sub-th'>Movie SRC</th>
                            <th className='sub-th'>Trailer SRC</th>
                            <th className='sub-th'>Created</th>
                            <th className='sub-th'>Modified</th>
                            <th className='sub-th'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {subtitles.map((subtitle, index) => (
                        <tr key={index}>
                        <td className='sub-td'>{subtitle.locale}</td>
                        <td className='sub-td'>{subtitle.movie_src}</td>
                        <td className='sub-td'>{subtitle.trailer_src}</td>
                        <td className='sub-td'>{subtitle.created}</td>
                        <td className='sub-td'>{subtitle.modified}</td>
                        <td className='sub-td'> 
                            {/* Add action buttons here */}
                            <FontAwesomeIcon className='icon' icon={faEdit} />
                            <FontAwesomeIcon className='icon' icon={faTrash} />
                        </td>
                        </tr>                        
                    ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    );


}

export default SubtitlesPage;