import React from 'react';
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";
import { Loader } from "./Loader/Loader";
import NotFound from "pages/NotFound/NotFound";

const Movies = lazy(() => import('pages/Movies/Movies'));
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

const App = () => {
  return (
    <div className="container">
      <SharedLayout />

      <Suspense
        fallback={
          // <div>Loading...</div>
            <Loader />
          }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          {/* /*
          // or 
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>*/}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export  default App;