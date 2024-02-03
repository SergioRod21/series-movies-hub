import { logDOM } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, overview, id, posterPath}) => {
  return (
    <Link to={`/movie/${id}`} onClick={() => console.log(id)} className='bg-[#0b2545] cursor-pointer border-2 rounded-xl border-slate-950 pt-4 pb-2 m-2 w-64 flex flex-col items-center justify-evenly'>
      <img className='w-48' src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />
      <h1 className='text-lg font-semibold mb-2 text-white text-center'>{title}</h1>
    </Link>
  );
};

export default MovieCard;
