import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SideBar from './sideBar';
import MoviesPage from '../movies/moviesPage';
import TvShowPage from '../tv_shows/tvShowPage';
import NavHeader from './NavHeader';
import Dashboard from './dashboard';
import ChannelsPage from '../channels/channelsPage';
import AddUser from './adduser';

function Pages() {
  return (
    <div style={{height:'100vh'}}>
      
        <div style={{ width: '100%', height:'100%'}}>
          <NavHeader/>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            
            <SideBar />
            
            <main className="" style={{ width: '100%' }}>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path="/media/movies/*" element={<MoviesPage />} />
                <Route path="/media/tv-shows/*" element={<TvShowPage />} />
                <Route path="/media/channels/*" element={<ChannelsPage />} />
                <Route path="/adduser" element={<AddUser />} />
              </Routes>
            </main>
          </div>
        </div>
    </div>
    
  );
}

export default Pages;
