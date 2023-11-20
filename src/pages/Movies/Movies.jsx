import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import { ImSearch } from 'react-icons/im';
import { Notify } from 'notiflix'
import css from './Movies.module.css';
import { getMovies } from 'utilities/themoviedbAPI';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { Button } from 'components/Button/Button';

export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const perPage = 20;
    const [isLoadMoreShown, setIsLoadMoreShown] = useState(false);

    const queryValue = searchParams.get("query");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const value = evt.currentTarget.elements.searchQuery.value;

        if (value.trim()==="") {
            Notify.warning("Please enter a valid search query",
                {
                    clickToClose: true,
                    timeout: 3000,
                    cssAnimationStyle: 'zoom',
                });
            return;
        };
        
        setSearchParams({ query: value });
        setPage(1);
        evt.currentTarget.reset();
    };
    
    useEffect(() => {
        if (!queryValue) return;

        const getMoviesByQuery = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const data = await getMovies(queryValue, page);
          
        if (data.total_results === 0) {
            setIsLoading(false);
            setIsLoadMoreShown(false);
            setError(Notify.failure('Sorry, no results found', { timeout: 3000, }));
            };

            setSearchedMovies(data.results);
            setIsLoadMoreShown(page < Math.ceil(data.total_results / perPage));

            if (page === Math.ceil(data.total_results / perPage)) {
          setIsLoadMoreShown(false);
          return Notify.warning(
            `You've reached the end of search results. Total number of images - ${data.total_results} `, { timeout: 3000, });
        }

        } catch (error) {
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }
        }
        
        if (queryValue !== '' || page !== 1) {
      getMoviesByQuery();
                }
            
    }, [queryValue, page]);
  
      const handleLoadMore = () => {
    setPage(page + 1)
      }
    
    return (
        <div>
            <form className={css.form} onSubmit={handleSubmit}>
            <input
            className={css.input}
            type="text"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            required
            />
            <button type="submit" className={css.button}>
            <ImSearch color="white" size="18" />
            </button>
            </form>
            {error !== null && Notify.failure(`Oops, some error occured... Please try reloading the page`, { timeout: 6000, })}
            {isLoading && <Loader />}
            {searchedMovies.length !== 0 && <MoviesList movies={searchedMovies} />}
            {isLoadMoreShown && <Button onClick={handleLoadMore} />}
      </div>
  );
}