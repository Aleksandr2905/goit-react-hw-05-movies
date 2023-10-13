import { fetchRequestMovieDetails } from 'components/services/api';
import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import css from './Style.module.css'
import { Loader } from 'components/Loader/Loader';

// import { Cast } from 'components/Cast/Cast';
// import { Reviews } from 'components/Reviews/Reviews';
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
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
            <div>
                <p>Additional information</p>
                <Link to='cast'>Cast</Link>
                <Link to='reviews'>Reviews</Link>
            </div>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path='cast' element={<Cast />} />
                    <Route path='reviews' element={<Reviews />} />
                </Routes>
            </Suspense>

        </div >
    );
};

export default MovieDetails;