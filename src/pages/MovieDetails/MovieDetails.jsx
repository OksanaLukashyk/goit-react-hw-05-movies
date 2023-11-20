import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Notify } from 'notiflix'
import { getMovieDetails } from 'utilities/themoviedbAPI';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';
import css from './MovieDetails.module.css';


const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { id } = useParams();
    const location = useLocation();
    // "from" field can be null => optional chaining: if we have field in state, we take it's value, else - undefined  and to escape this error we use ?.
    // if undefined we assign to backLinkRef the link to Home
    const backLinkRef = useRef(location.state?.from ?? '/');

    useEffect(() => {
    if (!id) {
      return;
    }
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const response = await getMovieDetails(id);
        setMovieDetails(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails(id);
  }, [id]);

  return (
      <>
      <Link to={backLinkRef.current} className={css.goBackBtn}>Go Back</Link>
      {error !== null && Notify.failure(`Oops, some error occured... Please try reloading the page`, { timeout: 6000, })}
      {isLoading && <Loader />}
      {movieDetails !== null && <MovieCard movie={movieDetails} />}
    </>
  );
};

export default MovieDetails;

// На сторінках Movies, Cast, Reviews в масиві залежностей повинен бути id фільма який ми отримали з рядка запиту
// const { movieId } = useParams();
// useEffect(() => {
// if (!movieId) return;
// }, [movieId]);


// // /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// // /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.