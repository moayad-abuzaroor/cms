import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TvShowsTable from "../tv_shows/tvShowsTable";
import AddTvShow from "../tv_shows/addTvShow";
import SeriesGraphics from "../tv_shows/seriesGraphics";
import TvShowVideoSources from "../tv_shows/tvShowVideoSources";
import Seasons from "../tv_shows/seasons";
import MetaProvider from './metaProvider';
import AddSeason from './addSeason';
import TvSubmit from '../shared/tvSubmit';
import EditSeason from './editSeason';

function TvShowPage() {

  useEffect(() => {
    document.title = 'CMS | TV Shows';
  }, []); 

  const [sharedData, setSharedData] = useState({id: null, tvshow_title: null, tvshow_seasons: null, tvshow_episodes: null, tvshow_year: null, tvshow_genres: null,
    tvshow_status: null, tvshow_description: null, tvshow_first_date: null, tvshow_last_date: null, tvshow_rate: null, tvshow_awards: null, tvshow_parental_rate: null,
    tvshow_country: null, tvshow_language: null, tvshow_stream_location: null, tvshow_url: null, tvshow_protection: null,
    ilike_image: null, jaw_image: null, ministra_image: null, seasons: null
  })

  return (
    <div style={{height: '100%'}}>
      <Routes>
        <Route path="/" element={<TvShowsTable sharedData={sharedData} setSharedData={setSharedData} />} />
        <Route path="tv_metaprovider/metadata" element={<AddTvShow sharedData={sharedData} setSharedData={setSharedData} />} />
        <Route path="/graphics" element={<SeriesGraphics sharedData={sharedData} setSharedData={setSharedData} />} />
        <Route path="/videosources" element={<TvShowVideoSources sharedData={sharedData} setSharedData={setSharedData} />} />
        <Route path="/seasons/*" element={<Seasons />} />
        <Route path='/tv_metaprovider/*' element={<MetaProvider />} />
        <Route path='/seasons/addseason' element={<AddSeason />} />
        <Route path='/submit' element={<TvSubmit />} />
        <Route path='/seasons/editseason' element={<EditSeason />} />
      </Routes>
    </div>
  );
}

export default TvShowPage;
