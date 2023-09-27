import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faIdBadge, faUser } from '@fortawesome/free-solid-svg-icons';
import navlogo from '../../images/dws-logo.png'

function NavHeader() {
  const handleLogout = (event) => {
    event.preventDefault(); // Prevent the default link behavior
  
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // Perform logout action here
      // For now, let's just redirect to the homepage
      window.location.href = "/";
    }
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark specNav">
      <Link className="navbar-brand" to="/dashboard" style={{ fontWeight:'900', fontSize:'22px'}}>CMS</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>        
      </button>
      <img className='ml-4' src={navlogo} width={'10%'} />

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" style={{color: 'white'}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FontAwesomeIcon className='icon mr-2' icon={faUser} />Profile
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" style={{ left: 'auto', right: 0 }}>
              <Link className="dropdown-item" to="#"><FontAwesomeIcon className='icon mr-2' icon={faIdBadge} />My Account</Link>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" onClick={(e) => handleLogout(e)} href="/#">
                <FontAwesomeIcon className='icon mr-2' icon={faPowerOff} />
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavHeader;
