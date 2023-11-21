import React, { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './MovieCard.module.css';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieCard = ({ movie }) => {
  const defaultImg =
    // 'https://psculturalcenter.org/template_1/img/default-movie-portrait.jpg';
    'https://media.comicbook.com/files/img/default-movie.png?auto=webp';

  let releaseDate = movie.release_date;
  let releaseYear = releaseDate.substring(0, 4);
  let time = movie.runtime;
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  let avgUsScr = Number(movie.vote_average.toFixed(1));

  return (
    <div className={css.movieCardWrp}>
      <div className={css.mainInfoWrp}>
        <div className={css.posterWrp}>
          <img
            src={
              movie.poster_path
                ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            className={css.posterImg}
          />
          <img
            src={
              movie.poster_path
                ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            className={css.posterImgShadow}
          />
        </div>
        <div className={css.textInfoWrp}>
          <h1>
            {movie.title} <span>({releaseYear})</span>
          </h1>
          <p>"{movie.tagline}"</p>
          <p>
            <span className={css.charName}>Duration: </span>
            {hours}h {minutes}m
          </p>
          <p>
            <span className={css.charName}>Average User Score: </span>
            {avgUsScr}
          </p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres:</h3>
          <ul className={css.genresList}>
            {movie.genres &&
              movie.genres.map(genre => (
                <li className={css.genreItem} key={genre.id}>
                  {genre.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className={css.moreInfoWrp}>
        <h3 className={css.moreInfo}>Additional information</h3>
        <ul className={css.moreInfoList}>
          <li className={css.moreInfoItem}>
            <NavLink className={css.moreInfoLink} to="cast">
              Cast
            </NavLink>
          </li>
          <li className={css.moreInfoItem}>
            <NavLink className={css.moreInfoLink} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieCard;
