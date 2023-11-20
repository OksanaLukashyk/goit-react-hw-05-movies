import React from 'react';
import { NavLink } from "react-router-dom";
// import css from './Layout.module.css'

const SharedLayout = ({children}) => {
  return (
      <div>
          <header>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>{children}</main>
      </div> );
};

export default SharedLayout;