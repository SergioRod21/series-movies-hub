// MovieDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: { language: 'en-US', page: '1' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzQ2MjE0Zjc2YTQ4YWYzNjg1NjU0MTE3ZGEyMmY1ZCIsInN1YiI6IjY1YWU5MTU1M2UyZWM4MDEwYjA1NGM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZWHmhtUnE-FwED9sst9lHJBPFmbWKcpROWHbbqce8PA',
          },
        });

        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
          params: { language: 'en-US', page: '1' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzQ2MjE0Zjc2YTQ4YWYzNjg1NjU0MTE3ZGEyMmY1ZCIsInN1YiI6IjY1YWU5MTU1M2UyZWM4MDEwYjA1NGM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZWHmhtUnE-FwED9sst9lHJBPFmbWKcpROWHbbqce8PA',
          },
        });

        setCast(response.data.cast);
        response.data.crew.map((person) => {
          if (person.job === 'Director') {
            setDirector(person.name);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);



   return (
    <div className="min-h-screen min-w-full flex items-center justify-center bg-[#0b2545]">
      <div className="bg-[#13315c] p-8 rounded-lg shadow-md max-w-screen-xl w-full flex flex-row items-center">
        <img className="rounded-lg shadow-md w-1/3 " src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
        <div className=' pl-16'>
        <h1 className="text-4xl mb-4 text-white">{movie.title}</h1>
        <div>
          <span className="font-bold text-white">Director:</span>
          <span className="ml-2 text-white">{director}</span>
          <br />
          <span className="font-bold text-white">Cast:</span>
        <span className="ml-2 text-white">
          {cast.slice(0, 5).map((actor, index) => (
            <span key={index} className="mr-4 text-white">
              {actor.name}{index < 4 ? ',' : ''}
            </span>
          ))}
        </span>
        <h3 className='pt-8 text-white'>{movie.overview}</h3>
        </div>

      </div>
    </div>
    </div>
  );
};

export default MovieDetail;
