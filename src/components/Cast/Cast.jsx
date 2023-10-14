import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRequestCast } from "components/services/api";
import css from './Cast.module.css'
import image from '../image/no-image.png'

const Cast = () => {
    const { movieId } = useParams();
    const [castData, setCastData] = useState(null);


    useEffect(() => {
        if (!movieId) {
            return;
        }
        const fetchCast = async () => {
            try {
                const result = await fetchRequestCast(movieId);
                setCastData(result);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCast();
    }, [movieId]);

    return (
        <div>
            {castData ?
                <ul className={css.cardCast}>
                    {castData?.cast?.map(cast => (
                        <li className={css.castItem} key={cast.id}>
                            <img className={css.castImg} src={`https://image.tmdb.org/t/p/w185${cast.profile_path}` || { image }} alt={cast.name} onError={(e) => {
                                e.target.src = image;
                            }} />
                            <p className={css.castText}>{cast.name}</p>
                        </li>
                    ))}
                </ul> : null}
        </div>
    );
};

export default Cast;

