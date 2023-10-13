import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRequestCast } from "components/services/api";

export const Cast = () => {
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
            } catch (error) {
                console.error(error);
            }
        };
        fetchCast();
    }, [movieId]);

    return (
        <div>
            {castData ?
                <ul >
                    {castData.cast.map(cast => (
                        <li key={cast.id}>
                            <img src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`} alt={cast.name} />
                            <p>{cast.name}</p>
                        </li>
                    ))}
                </ul> : null}
        </div>
    );
};

