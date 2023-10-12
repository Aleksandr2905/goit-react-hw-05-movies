import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import css from '../pages/Style.module.css'

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
