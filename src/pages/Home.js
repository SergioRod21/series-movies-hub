import React from 'react';
import Header from '../components/Header';
import MoviesList from '../components/MoviesList';


const Home = () => {
  return (
    <div className=''>
        <Header />
        <h1>Popular Movies</h1>
        <br />

        <MoviesList listType='popular'/>
        <br />
        <h1>Top Rated</h1>
        <br />

        <MoviesList listType='top_rated'/>
    </div>
  );
};

export default Home;
