import React from 'react';
import { Card } from 'react-bootstrap';

const Author = (props) => {
    const { name, imageURL, profession } = props.author;

    return (
        <div className="col-md-6 col-lg-4 col-xs-12 mt-3">
            <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" style={{ height: '22rem' }} src={imageURL} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {profession}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Author;