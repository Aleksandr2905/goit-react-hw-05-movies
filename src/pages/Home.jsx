import React, { useEffect, useState } from 'react';
import { fetchRequestTrending } from 'components/services/api';
import { Link } from 'react-router-dom';
import css from './Style.module.css'

const Home = () => {
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
      <h1 className={css.titleTrending}>Trending today &#127916;</h1>
      <ul className={css.listTrending}>
        {trending.map(movie => {
          return (
            <Link className={css.trending} to={`/movies/${movie.id}`} key={movie.id}>
              <div className={css.cardTrending}>
                <img className={css.imgTrending} src={`https://image.tmdb.org/t/p/w342${movie.poster_path
                  }`} alt={movie.title} />
                <p className={css.pTrending}>{movie.title || movie.name}</p>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
