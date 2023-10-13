import { NavLink, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
import css from '../pages/Style.module.css';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink className={css.navItem} to="/">
            Home
          </NavLink>
          <NavLink className={css.navItem} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </div >
  );
};
