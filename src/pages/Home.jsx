import React, { useEffect, useState } from 'react';
import { fetchRequestTrending } from 'components/services/api';
import { Link } from 'react-router-dom';
import css from './Style.module.css'


export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { results } = await fetchRequestTrending();
        setTrending(results);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    };
    getTrending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul className={css.movieList}>
        {trending.map(movie => {
          return (

            <Link to={`/movies/${movie.id}`} key={movie.id}>
              {movie.title || movie.name}
              {/* <img src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path
                }`} alt={movie.title} /> */}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
