import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Notify } from 'notiflix';
import { getMovieDetails } from 'utilities/themoviedbAPI';
import { Loader } from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  // "from" field can become null => optional chaining: if we have field in state, we take it's value, else - undefined  and to escape this error we use ?.
  // if undefined we assign to backLinkRef the link to Home

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMovieDetails(movieId);

        setMovieDetails(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="innerPageContainer">
      <Link to={backLinkRef.current} className={css.backLinkRef}>
        Go Back
      </Link>
      {error !== null &&
        Notify.failure(
          `Oops, some error occured... Please try reloading the page`,
          { timeout: 6000 }
        )}
      {isLoading && <Loader />}
      {movieDetails !== null && <MovieCard movie={movieDetails} />}
    </div>
  );
};

export default MovieDetails;
