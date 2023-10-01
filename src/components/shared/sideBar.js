import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/sideBar.css'
import '../../stylesheets/sb-admin-2.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTv, faFilm, faPeopleGroup, faDatabase, faVideo, faPhotoFilm, faPhotoVideo, faHome, faPlay, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';


function SideBar() {

  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const [showVODmenu, setShowVODmenu] = useState(false);

  const toggleVODmenu = () => {
    setShowVODmenu(!showVODmenu);
  };
  
  return(    
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Content - CMS <sup>3</sup></div>
    </a>

    <hr className="sidebar-divider my-0"></hr>

    <li className="nav-item">
      <Link to="/dashboard" className="collapse-item" style={{ textDecoration: 'none' }}>
          <a className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i>           
              <span>
                <FontAwesomeIcon style={{color:'white'}} className="mr-3" icon={faHome} />Dashboard
                <FontAwesomeIcon style={{color:'white', float:'right'}} className="mr-2 mt-2" icon={faAngleRight} />           
              </span>
          </a>
      </Link>
    </li>

    <hr className="sidebar-divider"></hr>

    <li className="nav-item">
        <a onClick={toggleSubmenu} className="nav-link" href="#" data-target="#collapseTwo" aria-expanded="true"
            aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>
              Media Asset Management
              {!showSubmenu &&<FontAwesomeIcon style={{color:'white', float:'right'}} className="mr-2 mt-2" icon={faAngleRight} />}
              {showSubmenu &&<FontAwesomeIcon style={{color:'white', float:'right'}} className="mr-2 mt-2" icon={faAngleDown} />}
            </span>
        </a>
        {showSubmenu &&<div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo"
            data-parent="#accordionSidebar">
                <a onClick={toggleVODmenu} className="nav-link" href="#" data-target="#collapseTwo" aria-expanded="true"
                    aria-controls="collapseTwo">
                    <span>
                      <FontAwesomeIcon style={{color:'white'}} className="mr-2" icon={faPlay} />VOD
                      {!showVODmenu &&<FontAwesomeIcon style={{color:'white', float:'right'}} className="mr-4 mt-2" icon={faAngleRight} />}
                      {showVODmenu &&<FontAwesomeIcon style={{color:'white', float:'right'}} className="mr-4 mt-2" icon={faAngleDown} />}
                    </span>
                </a>
              {showVODmenu && <div className="bg-white py-2 collapse-inner rounded animated--grow-in">
                
                <Link to="media/movies" className="collapse-item">
                  <FontAwesomeIcon className="text-info mr-3" icon={faFilm} />Movies
                </Link>
                <Link to="media/tv-shows" className="collapse-item">
                  <FontAwesomeIcon className="text-info mr-2" icon={faTv} /> TV Shows
                </Link>
                <Link to="media/channels" className="collapse-item">
                  <FontAwesomeIcon className="text-info mr-2" style={{fontSize:'small'}} icon={faPhotoFilm} /> Channels
                </Link>              
            </div>}
        </div>}
    </li>

</ul>
);
}

export default SideBar;
