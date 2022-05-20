import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <>
            <PageTitle title="Reviews" />
            <h2 className="mt-5 mb-5 text-center text-decoration-underline text-info">Reviews</h2>
            <div className="container row mx-auto">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </>
    );
};

export default Reviews;