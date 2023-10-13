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
      } catch (error) {
        console.error(error);
      }
    };
    fetchMoviesByTitle();
  }, [queryParam]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="searchWord"
          type="text"
          placeholder="Enter search for a movie"
          defaultValue={queryParam}
        />
        <button type="submit">Search</button>
      </form>
      <ul className={css.movieList}>
        {searchMovies.map(movie => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            params={{ movieId: movie.id }}
          >
            {movie.title || movie.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
