import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={7}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <ul className='grid gap-4 grid-rows-1 grid-cols-7 '>
        {movies.map((movie) => (
          <SwiperSlide className='pb-8'>
          <MovieCard title={movie.title} overview={movie.overview} id={movie.id} posterPath={movie.poster_path}/>
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
    </div>
  );
};

export default MovieList;