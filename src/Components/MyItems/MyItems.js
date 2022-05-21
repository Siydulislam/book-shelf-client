import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../Auth/firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [isReload, setIsReload] = useState(false);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            try {
                const { data } = await axiosPrivate.get(`https://damp-crag-39837.herokuapp.com/myBooks?email=${email}`);
                setItems(data);
            }
            catch (error) {
                if (error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
                if (error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItems();
    }, [user]);

    const handleDeleteItem = id => {
        const response = window.confirm("Are you sure to delete this item?")
        if (response === true) {
            fetch('https://damp-crag-39837.herokuapp.com/book/' + id, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => { })
            const restItems = items.filter(item => item._id !== id);
            setItems(restItems);
            setIsReload(!isReload);
        }
    }

    return (
        <>
            <PageTitle title="My Items" />
            <div>
                <h2 className="mt-3 text-center text-decoration-underline text-info">My Added Books</h2>
                <div className="container row mx-auto">
                    {
                        items.map((item) =>
                            <div key={item._id} className="col-md-6 col-lg-4 col-xs-12 mt-3">
                                <Card style={{ width: '21rem' }} className="mx-auto">
                                    <Card.Img variant="top" style={{ height: '25rem' }} src={item.image} />
                                    <Card.Body className='text-center'>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Title>{item.author}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                        <Card.Text>Supplier: {item.supplier}</Card.Text>
                                        <div className="d-flex justify-content-center">
                                            <Card.Text>Price: ${item.price}</Card.Text>
                                            <Card.Text className="mx-2">Quantity: {item.quantity}</Card.Text>
                                        </div>
                                        <Button onClick={() => handleDeleteItem(item._id)} className='text-white' variant="info">Delete</Button>
                                    </Card.Body>
                                </Card>
                            </div >
                        )
                    }
                </div>
            </div>
            {
                items.length === 0 &&
                <div className="text-info text-center mt-5" style={{ height: "50vh" }}>
                    <h2>No Books Found!</h2>
                    <p>Please add some books to see in your add list</p>
                </div>
            }
        </>
    );
};

export default MyItems;