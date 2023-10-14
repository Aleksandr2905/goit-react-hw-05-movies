import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRequestReviews } from "components/services/api";
import css from './Reviews.module.css'

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
                <p className={css.reviewText}>We don't have any reviews for this movie.</p>
            ) : (
                <ul className={css.review}>
                    {reviewsData.results.map(review => (
                        <li className={css.reviewItem} key={review.id}>
                            <h2 className={css.reviewAuthor}>Author: {review.author}</h2>
                            <p className={css.reviewText}>{review.content}</p>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default Reviews;