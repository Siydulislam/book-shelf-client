import React from 'react';
import { Card, Carousel } from 'react-bootstrap';

const Review = (props) => {
    const { name, image } = props.review;
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;