import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import '../../stylesheets/navBar.css'
import {NavLink} from 'react-router-dom'

function TvShowsNavBar({ disabled }){
    return(
        <Navbar variant="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{borderBottom: '1px solid #ccc'}}>
                <Nav className="mr-auto">
                    <NavLink to="/dashboard/media/tv-shows/tv_metaprovider/metadata" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active">Metadata</NavLink>
                    <NavLink to="/dashboard/media/tv-shows/graphics" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active">Graphics</NavLink>
                    <NavLink to="/dashboard/media/tv-shows/videosources" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active">Video Sources</NavLink>
                    <NavLink to="/dashboard/media/tv-shows/seasons" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active">Seasons</NavLink>
                    <NavLink to="/dashboard/media/tv-shows/submit" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active">Sync</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TvShowsNavBar;