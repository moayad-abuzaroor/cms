import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import TvShowsTable from "../tv_shows/tvShowsTable";
import AddTvShow from "../tv_shows/addTvShow";
import SeriesGraphics from "../tv_shows/seriesGraphics";
import TvShowVideoSources from "../tv_shows/tvShowVideoSources";
import Seasons from "../tv_shows/seasons";
import MetaProvider from './metaProvider';
import AddSeason from './addSeason';
import TvSubmit from '../shared/tvSubmit';

function TvShowPage() {

  useEffect(() => {
    document.title = 'CMS | TV Shows';
  }, []); 

  return (
    <div style={{height: '100%'}}>
      <Routes>
        <Route path="/" element={<TvShowsTable />} />
        <Route path="tv_metaprovider/metadata" element={<AddTvShow />} />
        <Route path="/graphics" element={<SeriesGraphics />} />
        <Route path="/videosources" element={<TvShowVideoSources />} />
        <Route path="/seasons/*" element={<Seasons />} />
        <Route path='/tv_metaprovider/*' element={<MetaProvider />} />
        <Route path='/seasons/addseason' element={<AddSeason />} />
        <Route path='/submit' element={<TvSubmit />} />
      </Routes>
    </div>
  );
}

export default TvShowPage;
