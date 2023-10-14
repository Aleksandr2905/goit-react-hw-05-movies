import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
import css from '../pages/Style.module.css';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  const location = useLocation();

  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={`${css.navigate} ${location.pathname === '/' ? css.active : ''}`} to="/" >
            Home
          </NavLink>
          <NavLink className={`${css.navigate} ${location.pathname.includes('/movies') ? css.active : ''}`} to="/movies" >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          </Routes>
        </Suspense>
      </main>
    </ >
  );
};
