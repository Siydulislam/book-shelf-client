import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('author.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <>
            <h2 className="mt-5 mb-5 text-center text-decoration-underline text-info">Popular Author</h2>
            <div>
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