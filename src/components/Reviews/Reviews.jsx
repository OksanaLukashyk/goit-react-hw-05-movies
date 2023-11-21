import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { getMovieReviews } from 'utilities/themoviedbAPI';
import { Loader } from 'components/Loader/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetctMovieReviews = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { results } = await getMovieReviews(movieId);
        setReviewsList(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetctMovieReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsCardWrp}>
      {error !== null &&
        Notify.failure(
          `Oops, some error occured... Please try reloading the page`,
          { timeout: 6000 }
        )}
      {isLoading && <Loader />}
      {reviewsList.length === 0 && !isLoading && (
        <div>We don't have any reviews for this movie yet.</div>
      )}
      <ul className={css.reviewsList}>
        {reviewsList.map(({ id, author, content }) => (
          <li className={css.reviewsItemWrp} key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
