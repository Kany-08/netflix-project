import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
// import Section from './components/Section/Section';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import TvShows from './pages/TvShows/TvShows';
import NotFound from './pages/NotFound/NotFound';
import Movie from './pages/Movie/Movie';
import TvShow from './pages/TvShow/TvShow';
import TvShowEpisode from './pages/TvShowEpisode/TvShowEpisode';



function App() {
  return (
    <>
      <Navbar/>
      <main className='Container'>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/movie/:pageId' element={<Movie/>} />
          <Route path='/tv-shows' element={<TvShows/>} />
          <Route path='tv-show/:tvShowId' element={<TvShow/>} />
          <Route path='/tv-show-episode/:tvShowId/:seasonId/:episodeId' element={<TvShowEpisode/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>

      </main>
      <Footer/>
    </>
  );
}

export default App;
