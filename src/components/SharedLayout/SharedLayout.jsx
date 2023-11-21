import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  return (
    <div className={css.container}>
      <header className={css.pageHeader}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default SharedLayout;
