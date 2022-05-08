import React from 'react';
import { Card } from 'react-bootstrap';

const Review = (props) => {
    const { name, imageURL, profession, comment } = props.review;
    return (
        <div className="col-md-6 col-lg-4 col-xs-12 mt-3">
            <Card className="text-center border-0 d-flex justify-content-center align-items-center" style={{ width: '21rem' }}>
                <Card.Img variant="top" style={{ width: '10rem', height: '10rem', borderRadius: '50%' }} src={imageURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{profession}</Card.Text>
                    <Card.Text>{comment}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;