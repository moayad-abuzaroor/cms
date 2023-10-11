import React, { useEffect, useState } from "react";
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

    const [sharedData, setSharedData] = useState({id:null, channel_title: '', channel_epg: null,
        channel_categories: null, channel_number: '', channel_type: null, channel_parental_rate: null,
        channel_status: null, channel_stream_location: null, channel_url: '', channel_protection: null, backup_stream_location: null,
        backup_url: '', backup_protection: null, channel_logo: null
    });

    return(
        <Routes>
            <Route path="/" element={<ChannelsTable sharedData={sharedData} setSharedData={setSharedData} />} />
            <Route path="/information" element={<AddChannel sharedData={sharedData} setSharedData={setSharedData} />} />
            <Route path="/sources" element={<ChannelSources sharedData={sharedData} setSharedData={setSharedData} />} />
            <Route path="/logo" element={<ChannelLogo sharedData={sharedData} setSharedData={setSharedData} />} />
            <Route path="/submit" element={<ChannelSubmit />} />
        </Routes>
    );
}

export default ChannelsPage;