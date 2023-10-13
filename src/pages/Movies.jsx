import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchRequestSearch } from 'components/services/api';
import css from './Style.module.css'

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [params, setSearchParams] = useSearchParams();
  const queryParam = params.get('query');
  const location = useLocation();

  const handleSubmit = async event => {
    event.preventDefault();
    setSearchParams({ query: event.currentTarget.elements.searchWord.value });
  };

  useEffect(() => {
    if (queryParam === null) {
      return;
    }
    const fetchMoviesByTitle = async () => {
      try {
        const { results } = await fetchRequestSearch(queryParam);
        setSearchMovies(results);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMoviesByTitle();
  }, [queryParam]);

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input className={css.searchFormInput}
          name="searchWord"
          type="text"
          placeholder="Enter search for a movie"
          defaultValue={queryParam}
        />
        <button className={css.searchFormBtn} type="submit">Search</button>
      </form>
      <ul className={css.listMovie}>
        {searchMovies.map(movie => (
          <Link className={css.movies}
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            params={{ movieId: movie.id }}
          >
            <div className={css.cardMovies}>
              <img className={css.imgMovies} src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
              <p className={css.pMovies}>{movie.title || movie.name}</p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
