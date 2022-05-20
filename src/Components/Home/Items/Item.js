import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryItem = (props) => {
    const { _id, name, image, author, price, quantity, description, supplier } = props.item;
    const navigate = useNavigate();

    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className="col-md-6 col-lg-4 col-sm-12 mt-4">
            <Card style={{ width: '21rem' }} className="mx-auto">
                <Card.Img variant="top" style={{ height: '25rem' }} src={image} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="fs-5">{author}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Supplier: {supplier}</Card.Text>
                    <div className="d-flex justify-content-center">
                        <Card.Text>Price: ${price}</Card.Text>
                        <Card.Text className="mx-2">Quantity: {quantity}</Card.Text>
                    </div>
                    <Button onClick={() => navigateToInventory(_id)} className='text-white' variant="info">Manage Stock</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default InventoryItem;