import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRequestReviews } from "components/services/api";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviewsData, setReviewsData] = useState(null);

    useEffect(() => {
        if (!movieId) {
            return;
        }
        const fetchReviews = async () => {
            try {
                const result = await fetchRequestReviews(movieId);
                setReviewsData(result);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchReviews();
    }, [movieId]);

    return (
        <div>
            {!reviewsData || reviewsData.results.length === 0 ? (
                <p>We don't have any reviews for this movie.</p>
            ) : (
                <ul>
                    {reviewsData.results.map(review => (
                        <li key={review.id}>
                            <p>Author: {review.author}</p>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default Reviews;