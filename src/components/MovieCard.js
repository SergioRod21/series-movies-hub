import { logDOM } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, overview, id, posterPath}) => {
  return (
    <Link to={`/movie/${id}`} onClick={() => console.log(id)} className='cursor-pointer border-2 rounded-xl border-gray-500 p-4 m-2 w-64 flex flex-col items-center'>
      <img className='w-48' src={`https://image.tmdb.org/t/p/w500/${posterPath}`} alt={title} />
      <h1 className='text-lg font-bold mb-2'>{title}</h1>
    </Link>
  );
};

export default MovieCard;
