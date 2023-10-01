import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import ChannelsTable from "./channelsTable";
import AddChannel from "./addChannel";
import ChannelSources from "./channelSources";


function ChannelsPage(){

    useEffect(() => {
        document.title = 'CMS | Channels';
      }, []);

    return(
        <Routes>
            <Route path="/" element={<ChannelSources />} />
        </Routes>
    );
}

export default ChannelsPage;