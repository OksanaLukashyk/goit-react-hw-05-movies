import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { getMovieCredits } from 'utilities/themoviedbAPI';
import { Loader } from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const defaultImg =
    // 'https://psculturalcenter.org/template_1/img/default-movie-portrait.jpg';
    'https://media.comicbook.com/files/img/default-movie.png?auto=webp';

  useEffect(() => {
    if (!movieId) return;

    const fetctCastDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { cast } = await getMovieCredits(movieId);
        setCastList(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetctCastDetails();
  }, [movieId]);

  return (
    <div className={css.castCardWrp}>
      {error !== null &&
        Notify.failure(
          `Oops, some error occured... Please try reloading the page`,
          { timeout: 6000 }
        )}
      {isLoading && <Loader />}
      {castList.length === 0 && !isLoading && (
        <div>We don't have any information about the cast yet.</div>
      )}
      <ul className={css.castList}>
        {castList.map(({ id, name, character, profile_path }) => (
          <li className={css.castItemWrp} key={id}>
            <div className={css.castPhotoWrp}>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={name}
                className={css.castPhoto}
                width="150"
              />
            </div>
            <div className={css.castInfoWrp}>
              <h3>{name}</h3>
              <p>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
