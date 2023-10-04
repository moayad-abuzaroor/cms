import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviesTable from "./moviesTable";
import AddMovies from "./addMovies";
import MovieGraphics from "./movieGraphics";
import VideoSources from "./videoSources";
import SubtitlesPage from "./subtitlesPage";
import MarketManagerPage from "./marketManagerPage";
import MovieMetaProvider from '../movies/movieMetaProvider';
import Submit from '../shared/submit';
import { useState } from 'react';

function MoviesPage() {

  useEffect(() => {
    document.title = 'CMS | Movies';
  }, []);
  
  const [sharedTitle, setSharedTitle] = useState('');

  return (
    <Routes>
      <Route path="/" element={<MoviesTable />} />
      <Route path="mov_metaprovider/mov_metadata" element={<AddMovies sharedTitle={sharedTitle} setSharedTitle={setSharedTitle} />} />
      <Route path="/mov_graphics" element={<MovieGraphics sharedTitle={sharedTitle} />} />
      <Route path="/mov_videosources" element={<VideoSources />} />
      <Route path="/mov_subtitles" element={<SubtitlesPage />} />
      <Route path="/mov_market" element={<MarketManagerPage />} />
      <Route path="/mov_metaprovider/*" element={<MovieMetaProvider />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
  );
}

export default MoviesPage;
