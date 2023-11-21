import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { Notify } from 'notiflix';
import { getMovies } from 'utilities/themoviedbAPI';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const queryValue = searchParams.get('query');

  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.currentTarget.elements.searchQuery.value;

    if (value.trim() === '') {
      Notify.warning('Please enter a valid search query', {
        clickToClose: true,
        timeout: 3000,
        cssAnimationStyle: 'zoom',
      });
      return;
    }

    setSearchParams({ query: value });
    evt.currentTarget.reset();
  };

  useEffect(() => {
    if (!queryValue) return;

    const getMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getMovies(queryValue);

        if (data.total_results === 0) {
          setIsLoading(false);
          setError(
            Notify.failure('Sorry, no results found', { timeout: 3000 })
          );
        }

        setSearchedMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMoviesByQuery();
  }, [queryValue]);

  return (
    <div className="innerPageContainer">
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoFocus
          placeholder="Search movies..."
          name="searchQuery"
          required
        />
        <button type="submit" className={css.button}>
          <ImSearch color="white" size="18" />
        </button>
      </form>
      {error !== null &&
        Notify.failure(
          `Oops, some error occured... Please try reloading the page`,
          { timeout: 6000 }
        )}
      {isLoading && <Loader />}
      {searchedMovies !== null && <MoviesList movies={searchedMovies} />}
    </div>
  );
};

export default Movies;
