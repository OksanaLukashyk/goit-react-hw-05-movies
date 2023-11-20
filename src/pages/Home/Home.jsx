import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import { getTrending } from 'utilities/themoviedbAPI';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
    const [moviesList, setMovies] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {

    const getMoviesList = async () => {
      try {
        setIsloading(true);
          const data = await getTrending();
          
        if (data.total_results === 0) {
            setIsloading(false);
            setError(null);
          setError(Notify.failure('Sorry, no results found', { timeout: 3000, }));
        }

        setMovies(prevState => [...data.results]);
      } catch (error) {
        setError(error.message);
      }
      finally {
        setIsloading(false);
      }
    }

        getMoviesList();
    }, []);

    return (
      <div className="app">
        <h1>Trending today</h1>
        {error !== null && Notify.failure(`Oops, some error occured... Please try reloading the page`, { timeout: 6000, })}
        {isLoading && <Loader />}
        {moviesList.length !== 0 && <MoviesList movies={moviesList} />}
      </div>
  )
}

export default Home;