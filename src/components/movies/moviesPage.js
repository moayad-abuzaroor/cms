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
  
  const [sharedData, setSharedData] = useState({id:null, movie_title: '', movie_description: null, movie_year: null, movie_release_date: null, movie_rate: null, movie_awards: null, movie_runtime: null,
  movie_source: null, movie_subtitles: null, movie_genres: null, movie_country: null,
  movie_parental_rate: null, movie_language: null, movie_status: null, ilike_image: null, jaw_image: null, ministra_image: null, movie_stream_location: null, movie_url: null,
  movie_protection: null, trailer_stream_location: null, trailer_url: null, trailer_protection: null, movie_subtitle: null, trailer_subtitle: null, subtitles_language: null,
  market_manager_country: null});

  return (
    <Routes>
      <Route path="/" element={<MoviesTable sharedData={sharedData} setSharedData={setSharedData} />} />
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
