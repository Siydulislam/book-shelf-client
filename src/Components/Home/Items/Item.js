import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryItem = (props) => {
    const { _id, name, image, author, price, quantity, description, supplier } = props.item;
    const navigate = useNavigate();

    const navigateToManageStocks = id => {
        navigate(`/manage-stocks/${id}`);
    }

    return (
        <div className="col-md-6 col-lg-4 col-xs-12 mt-3">
            <Card style={{ width: '21rem' }}>
                <Card.Img variant="top" style={{ height: '25rem' }} src={image} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{author}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>Supplier: {supplier}</Card.Text>
                    <div className="d-flex justify-content-center">
                        <Card.Text>Price: ${price}</Card.Text>
                        <Card.Text className="mx-2">Quantity: {quantity}</Card.Text>
                    </div>
                    <Button onClick={() => navigateToManageStocks(_id)} className='text-white' variant="info">Manage Stock</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default InventoryItem;