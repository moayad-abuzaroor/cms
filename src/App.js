import AddMovies from "./components/movies/addMovies";
import MoviesTable from "./components/movies/moviesTable";
import MovieGraphics from "./components/movies/movieGraphics";
import MarketManagerPage from "./components/movies/marketManagerPage";
import SubtitlesPage from "./components/movies/subtitlesPage";
import VideoSources from "./components/movies/videoSources";
import TvShowsTable from "./components/tv_shows/tvShowsTable";
import MetaProvider from "./components/metaProvider";
import AddTvShow from "./components/tv_shows/addTvShow";
import SeriesGraphics from "./components/tv_shows/seriesGraphics";
import TvShowVideoSources from "./components/tv_shows/tvShowVideoSources";
import Seasons from "./components/tv_shows/seasons";

function App() {
  return (
    <div>
      <MoviesTable/>
    </div>
  );
}

export default App;
