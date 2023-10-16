import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TvShowTitleComponent from '../shared/tvShowsTitleComponent';
import TvShowsNavBar from '../shared/TvShowsNavBar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function AddSeason() {

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);

    const [title, setTitle] = useState('');
    const [requiredMsg, setRequiredMsg] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setRequiredMsg(false); // Reset required message when input changes
    };

    const [seasonNumber, setSeasonNumber] = useState('');
    const [seasonRequiredMsg, setSeasonRequiredMsg] = useState(false);

    const handleSeasonChange = (e) => {
        setSeasonNumber(e.target.value);
        setSeasonRequiredMsg(false); // Reset required message when input changes
    };

    const [crewName, setCrewName] = useState('');
    const [crewRole, setCrewRole] = useState('');
    const [crewTags, setCrewTags] = useState([]);

    const handleAddCrewTag = () => {
        if (crewName && crewRole) {
        setCrewTags([...crewTags, { crewName, crewRole }]);
        setCrewName('');
        setCrewRole('');
        }
    };

    const handleRemoveCrewTag = (index) => {
        const updatedTags = [...crewTags];
        updatedTags.splice(index, 1);
        setCrewTags(updatedTags);
    };

    
    const [castName, setCastName] = useState('');
    const [castRole, setCastRole] = useState('');
    const [castTags, setCastTags] = useState([]);

    const handleAddCastTag = () => {
        if (castName && castRole) {
        setCastTags([...castTags, { castName, castRole }]);
        setCastName('');
        setCastRole('');
        }
    };

    const handleRemoveCastTag = (index) => {
        const updatedTags = [...castTags];
        updatedTags.splice(index, 1);
        setCastTags(updatedTags);
    };

    var count = 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') {
          setRequiredMsg(true);
          count = count + 1;
        } else {
          // Handle form submission
          setRequiredMsg(false);
        }

        if (seasonNumber.trim() === '') {
          setSeasonRequiredMsg(true);
          count = count + 1;
        } else {
          // Handle form submission
          setSeasonRequiredMsg(false);
        }

        if(count == 0){
          setShowSuccessAlert(true);
          setTimeout(() => {
              setShowSuccessAlert(false);
          }, 5000);
        }
        else{
          setShowDangerAlert(true)
            setTimeout(() => {
                setShowDangerAlert(false);
            }, 5000);
        }
    };

  return (
    <div className='container-fluid bg-light' style={{ padding: '2%', height: '100%'}}>
      <div className='row'>
        <div className='col'>
          <p className='pathText'>Media Asset Management/VOD / <span style={{ color: 'rgb(55, 55, 55)' }}>TV Shows</span></p>
        </div>
      </div>

      <TvShowTitleComponent />

      <div className='row'>

        <form className='col-lg-11 mx-auto addForm' style={{backgroundColor: 'white'}} onSubmit={handleSubmit}>

            <TvShowsNavBar/>

            <div className="form-row mt-4 ml-auto">
                <div className='seasons-menu'>
                    <Link to="seasons">
                        <button className='btn btn-primary'><FontAwesomeIcon className='icon mr-2' icon={faArrowLeft} />Back to Seasons</button>
                    </Link>
                </div>
            </div>

            <div className='line mt-4'>
                <p className='lineLabel'>Common</p>
            </div>

            <div className='form-row mt-4'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Name (In English) <span className='text-danger'>*</span></label>
                    <input value={title} onChange={handleTitleChange} className={`form-control ${requiredMsg ? 'is-invalid' : ''}`} />
                    {requiredMsg && <div className='text-danger small'>Required Title</div>}
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Description (In English)</label>
                    <textarea className='form-control'></textarea>
                </div>

                <div className='form-group col-md-4'>
                    <label className='labelBox'>Season Number</label>
                    <input value={seasonNumber} onChange={handleSeasonChange} className={`form-control ${seasonRequiredMsg ? 'is-invalid' : ''}`} type='text' />
                    {seasonRequiredMsg && <div className='text-danger small'>Required Title</div>}
                </div>
            </div>
            
            <div className='form-row'>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Year</label>
                    <input className='form-control' type='text' />
                </div>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>First Air Date</label>
                    <input className='form-control' type='date' />
                </div>
                <div className='form-group col-md-4'>
                    <label className='labelBox'>Last Air Date</label>
                    <input className='form-control' type='date' />
                </div>                                        
            </div>

            <div className='form-group'>
                <div>
                    <input type='checkbox'/>
                    <label className='labelBox ml-2'>Active</label>
                </div>                                                    
            </div>           

            <div className='form-group'>
                <input className='btn btn-primary' type='submit' value="Save" />
                <button className='btn btn-secondary ml-1'>Cancel</button>
            </div>

        </form>
        {showSuccessAlert && (
            <div className="alert alert-success fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                Season added successfully
            </div>
        )}
        {showDangerAlert && (
            <div class="alert alert-danger fixed-bottom fixed-end p-3 m-4 ml-auto" style={{width: '25%', marginBottom: '5px'}} role="alert">
                Please fill the required fields!
            </div>
        )}
      </div>
    </div>
  );
}

export default AddSeason;
