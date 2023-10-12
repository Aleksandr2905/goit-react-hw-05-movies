import { fetchRequestMovieDetails } from 'components/services/api';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import css from './Style.module.css'

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieData, setMovieData] = useState(null);
    const location = useLocation();
    const backLinkRef = useRef(location?.state?.from ?? '/');


    useEffect(() => {
        if (!movieId) {
            return;
        }
        const fetchMoviesById = async () => {
            try {
                const result = await fetchRequestMovieDetails(movieId);
                setMovieData(result);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMoviesById();
    }, [movieId]);

    const userScore = Math.floor(movieData?.vote_average * 10);
    const genres = movieData?.genres?.map(genre => genre.name)?.join(', ');
    const releaseDate = movieData?.release_date?.slice(0, 4);

    return (
        <div >
            <Link className={css.movieDetailsBtn} to={backLinkRef.current}>&#129044; Go back</Link>
            {movieData ?
                <div className={css.movieDetailsWrap}>
                    <div>
                        <img className={css.movieDetailsImg} src={`https://image.tmdb.org/t/p/w342${movieData.poster_path}`} alt={movieData.title} />
                    </div>
                    <div>
                        <h1>{movieData.title} ({releaseDate})</h1>
                        <p>User score: {userScore}%</p>
                        <h2>Overview</h2>
                        <p>{movieData.overview}</p>
                        <h3>Genres</h3>
                        <p>{genres}</p>
                    </div>
                </div> : null}
        </div>
    );
};
