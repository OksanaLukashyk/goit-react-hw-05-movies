import React from 'react';
import { NavLink } from "react-router-dom";
// import css from './Layout.module.css'

const SharedLayout = () => {
  return (
      <header>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
  );
};

export default SharedLayout;