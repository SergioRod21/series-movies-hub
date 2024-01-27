import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = ({ listType }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${listType}`, {
          params: { language: 'en-US', page: '1' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzQ2MjE0Zjc2YTQ4YWYzNjg1NjU0MTE3ZGEyMmY1ZCIsInN1YiI6IjY1YWU5MTU1M2UyZWM4MDEwYjA1NGM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZWHmhtUnE-FwED9sst9lHJBPFmbWKcpROWHbbqce8PA',
          },
        });

        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul className='grid gap-4 grid-rows-1 grid-cols-7'>
        {movies.map((movie) => (
          <MovieCard title={movie.title} overview={movie.overview} id={movie.id} posterPath={movie.poster_path}/>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;