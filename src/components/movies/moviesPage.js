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

function MoviesPage() {

  useEffect(() => {
    document.title = 'CMS | Movies';
  }, []); 

  return (
    <Routes>
      <Route path="/" element={<MoviesTable />} />
      <Route path="mov_metaprovider/mov_metadata" element={<AddMovies />} />
      <Route path="/mov_graphics" element={<MovieGraphics />} />
      <Route path="/mov_videosources" element={<VideoSources />} />
      <Route path="/mov_subtitles" element={<SubtitlesPage />} />
      <Route path="/mov_market" element={<MarketManagerPage />} />
      <Route path="/mov_metaprovider/*" element={<MovieMetaProvider />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
  );
}

export default MoviesPage;
