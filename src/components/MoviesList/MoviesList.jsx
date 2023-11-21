import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const defaultImg =
    // 'https://psculturalcenter.org/template_1/img/default-movie-portrait.jpg';
    'https://media.comicbook.com/files/img/default-movie.png?auto=webp';

  return (
    <ul className={css.moviesList}>
      {movies.length !== 0 ? (
        movies.map(({ id, title, poster_path }) => (
          <li className={css.moviesListItem} key={id}>
            <Link
              className={css.moviesListItemLink}
              state={{ from: location }}
              to={`/movies/${id}`}
            >
              <img
                className={css.galleryItemPoster}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : defaultImg
                }
                alt={title}
                width={240}
              />
              <p className={css.moviesListItemTitle}>{title}</p>
            </Link>
          </li>
        ))
      ) : (
        <li>No movies found, plese enter the name of movie to start search.</li>
      )}
    </ul>
  );
};

export default MoviesList;
