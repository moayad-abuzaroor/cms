import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

function MoviesNavBar({ disabled }) {
  return (
    <Navbar variant="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ borderBottom: '1px solid #ccc' }}>
        <Nav className="mr-auto">
          <NavLink to="/dashboard/media/movies/mov_metaprovider/mov_metadata" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active" onClick={(e) => disabled && e.preventDefault()}>Metadata</NavLink>
          <NavLink to="/dashboard/media/movies/mov_graphics" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active" onClick={(e) => disabled && e.preventDefault()}>Graphics</NavLink>
          <NavLink to="/dashboard/media/movies/mov_videosources" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active" onClick={(e) => disabled && e.preventDefault()}>Video Sources</NavLink>
          <NavLink to="/dashboard/media/movies/mov_subtitles" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active" onClick={(e) => disabled && e.preventDefault()}>Subtitles</NavLink>
          <NavLink to="/dashboard/media/movies/mov_market" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active" onClick={(e) => disabled && e.preventDefault()}>Market Manager</NavLink>
          <NavLink to="/dashboard/media/movies/submit" className={`nav-link ${disabled ? 'disabled' : ''}`} activeClassName="active" onClick={(e) => disabled && e.preventDefault()}>Sync</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MoviesNavBar;
