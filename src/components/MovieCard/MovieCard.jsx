import React from 'react';
import { Suspense, lazy } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import { Loader } from 'components/Loader/Loader';
import css from './MovieCard.module.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));


const MovieCard = ({ movie }) => {
    // const defaultImg = '<https://media.comicbook.com/files/img/default-movie.png?auto=webp>'
    const defaultImg = '<https://www.seekpng.com/png/detail/311-3111678_clapperboard-png-transparent-images-film-poster.png>'

    return (
        <div className={css.movieCardWrp}>
            <div className={css.mainInfoWrp}>
                <div className={css.posterWrp}>
                    <img src={movie.poster_path? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`: defaultImg} alt={movie.title} className={css.posterImg}/>
                </div>
                <div className={css.textInfoWrp}>
                    <h1>{movie.original_title}</h1>
                    <p>
                        User Score: <span>{movie.popularity}</span>
                    </p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <ul>{movie.genres && movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}</ul>
                </div>
            </div>
            <div className={css.moreInfoWrp}>
                <h3 className={css.moreInfo}>Additional information</h3>
                <ul className={css.moreInfoList}>
                    <li className={css.moreInfoItem}>
                        <Link className={css.moreInfoLink} to="cast">Cast</Link>
                    </li>
                    <li className={css.moreInfoItem}>
                        <Link className={css.moreInfoLink} to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews/>} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default MovieCard;