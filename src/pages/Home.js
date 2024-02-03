import React from 'react';
import Header from '../components/Header';
import MoviesList from '../components/MoviesList';


const Home = () => {
  return (
    <div className='bg-[#13315c]'>
        <Header />
        <h1 className='p-4 text-4xl font-medium text-white'>Popular Movies</h1>
        <br />

        <MoviesList listType='popular'/>
        <br />
        <h1 className='p-4 text-4xl font-medium text-white'>Top Rated</h1>
        <br />

        <MoviesList listType='top_rated'/>
    </div>
  );
};

export default Home;
