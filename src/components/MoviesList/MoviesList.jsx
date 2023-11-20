import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css'

const MoviesList = ({ movies }) => {
    const location = useLocation();
    // const defaultImg = '<https://media.comicbook.com/files/img/default-movie.png?auto=webp>'
    const defaultImg = '<https://www.seekpng.com/png/detail/311-3111678_clapperboard-png-transparent-images-film-poster.png>'

  return (
    <ul className={css.moviesList}>
          { movies.length !==0 && movies.map(({ id, title, poster_path }) => (
              <li className={css.moviesListItem} key={id}>
                  <Link className={css.movieLink} state={{ from: location }} to={`/movies/${id}`} >
                                    <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : defaultImg
                }
                alt={title}
                width={240}
              />
          {title}
        </Link>
		</li>
      ))}
    </ul>
  );
};

export default MoviesList;