import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

function ChannelsNavBar() {
  return (
    <Navbar variant="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ borderBottom: '1px solid #ccc' }}>
        <Nav className="mr-auto">
          <NavLink to="/dashboard/media/channels/information" className='nav-link' activeClassName="active">General Information</NavLink>
          <NavLink to="/dashboard/media/channels/sources" className='nav-link' activeClassName="active">Sources</NavLink>
          <NavLink to="/dashboard/media/channels/logo" className='nav-link' activeClassName="active">Logo</NavLink>
          <NavLink to="/dashboard/media/channels/submit" className='nav-link' activeClassName="active">Sync</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ChannelsNavBar;
