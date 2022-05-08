import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { name, image } = props.item;
    return (
        <div className="col-md-6 col-lg-4 col-xs-12 mt-3">
            <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" style={{ height: '25rem' }} src={image} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button as={Link} to="/inventory" className='text-white' variant="info">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;