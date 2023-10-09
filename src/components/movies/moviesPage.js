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
  
  const [sharedData, setSharedData] = useState({id:'', movie_title: '', movie_description: '', movie_year: '', movie_release_date: '', movie_rate: '', movie_awards: '', movie_runtime: '',
  movie_source: '', movie_subtitles: '', movie_genres: '', movie_country: '',
  movie_parental_rate: '', movie_language: '', movie_status: '', ilike_image: '', jaw_image: '', ministra_image: '', movie_stream_location: '', movie_url: '',
  movie_protection: '', trailer_stream_location: '', trailer_url: '', trailer_protection: '', movie_subtitle: '', trailer_subtitle: '', subtitles_language: '',
  market_manager_country: ''});

  return (
    <Routes>
      <Route path="/" element={<MoviesTable />} />
      <Route path="mov_metaprovider/mov_metadata" element={<AddMovies sharedData={sharedData} setSharedData={setSharedData} />} />
      <Route path="/mov_graphics" element={<MovieGraphics sharedData={sharedData} setSharedData={setSharedData} />} />
      <Route path="/mov_videosources" element={<VideoSources sharedData={sharedData} setSharedData={setSharedData} />} />
      <Route path="/mov_subtitles" element={<SubtitlesPage sharedData={sharedData} setSharedData={setSharedData} />} />
      <Route path="/mov_market" element={<MarketManagerPage sharedData={sharedData} setSharedData={setSharedData} />} />
      <Route path="/mov_metaprovider/*" element={<MovieMetaProvider />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
  );
}

export default MoviesPage;
