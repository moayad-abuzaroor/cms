import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import ChannelsTable from "./channelsTable";
import AddChannel from "./addChannel";
import ChannelSources from "./channelSources";
import ChannelLogo from "./channelLogo";
import ChannelSubmit from "../shared/channelsubmit";


function ChannelsPage(){

    useEffect(() => {
        document.title = 'CMS | Channels';
      }, []);

    return(
        <Routes>
            <Route path="/" element={<ChannelsTable />} />
            <Route path="/information" element={<AddChannel />} />
            <Route path="/sources" element={<ChannelSources />} />
            <Route path="/logo" element={<ChannelLogo />} />
            <Route path="/submit" element={<ChannelSubmit />} />
        </Routes>
    );
}

export default ChannelsPage;