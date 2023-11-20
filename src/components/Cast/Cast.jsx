import React, { useState, useEffect } from 'react';
import css from './Cast.module.css'
import { getMovieCredits } from 'utilities/themoviedbAPI';
import { Notify } from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

const Cast = () => {
    const [castList, setCastList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { id } = useParams();

    const defaultImg = '<https://psculturalcenter.org/template_1/img/default-movie-portrait.jpg>';

    useEffect(() => {
        if (!id) return;
        
        const fetctCastDetails = async () => {
        try {
            setIsLoading(true);
            setError(null);
            
            const { cast } = await getMovieCredits(id);
            setCastList(cast);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
        };
            
        fetctCastDetails(id);
    }, [id]);

    return (
        <div className={css.castCardWrp}>
             {error !== null && Notify.failure(`Oops, some error occured... Please try reloading the page`, { timeout: 6000, })}
            {isLoading && <Loader />}
            <ul>
                { castList.length !== 0 ? (castList.map(({ id, name, character, profile_path }) =>
                    <li className={css.castItemWrp} key={id} >
                        <div className={css.castPhotoWrp}>
                            <img src={profile_path ? `http://image.tmdb.org/t/p/w500${profile_path}` : defaultImg} alt={name} className={css.castPhoto} />
                        </div>
                        <div className={css.castInfoWrp}>
                            <h3>{name}</h3>
                            <p>
                                Character: {character}
                            </p>
                        </div>
                    </li>)) : (<li className={css.castItemWrp} key={id} >We don't have any information about the cast yet.</li>)
                }
            </ul>
        </div>
    )
}

export default Cast
