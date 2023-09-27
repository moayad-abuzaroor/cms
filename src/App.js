import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pages from './components/shared/pages';
import Login from './components/shared/login';
import ChannelsTable from './components/channels/channelsTable';
import AddChannel from './components/channels/addChannel';
import ChannelSources from './components/channels/channelSources';
import ChannelLogo from './components/channels/channelLogo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/dashboard/*" element={<Pages />} />
      </Routes>
    </Router>
    );
  
}

export default App;
