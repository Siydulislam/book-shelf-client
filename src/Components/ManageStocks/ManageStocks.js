import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import useManageStocks from '../../Hooks/useManageStocks';

const ManageStocks = () => {

    const { manageStocksId } = useParams();
    const [manageStocks, setManageStocks] = useState({});
    const [isReload, setIsReload] = useState(false);

    const { _id, name, author, image, description, supplier, price, quantity, sold } = manageStocks;

    useEffect(() => {
        fetch(`http://localhost:5000/book/${manageStocksId}`)
            .then(res => res.json())
            .then(data => setManageStocks(data))
    }, [manageStocksId, isReload]);

    const handleUpdateQuantity = event => {
        event.preventDefault();
        const inputQuantity = event.target.quantity.value;

        if (inputQuantity <= 0) {
            return alert("Please enter a valid number");
        }

        const name = manageStocks.name;
        const author = manageStocks.author;
        const image = manageStocks.image;
        const description = manageStocks.description;
        const supplier = manageStocks.supplier;
        const price = manageStocks.price;
        const quantity = JSON.parse(manageStocks?.quantity) + JSON.parse(inputQuantity);
        const sold = manageStocks?.sold ? manageStocks?.sold : 0;

        const updateManageStocks = { name, author, image, description, supplier, price, quantity, sold };
        setManageStocks(updateManageStocks);

        fetch(`http://localhost:5000/book/${manageStocksId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateManageStocks)
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!isReload);
                event.target.reset();
            })
    };

    const handleDeliveredQuantity = () => {
        const name = manageStocks.name;
        const author = manageStocks.author;
        const image = manageStocks.image;
        const description = manageStocks.description;
        const supplier = manageStocks.supplier;
        const price = manageStocks.price;
        const quantity = JSON.parse(manageStocks?.quantity) !== 0 ? JSON.parse(manageStocks?.quantity) - 1 : JSON.parse(manageStocks?.quantity);
        const sold = quantity >= 0 ? (JSON.parse(manageStocks?.sold) ? JSON.parse(manageStocks?.sold) + 1 : 0 + 1) : JSON.parse(manageStocks?.sold);

        const updateManageStocks = { name, author, image, description, supplier, price, quantity, sold };
        setManageStocks(updateManageStocks);

        fetch(`http://localhost:5000/book/${manageStocksId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateManageStocks)
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!isReload);
            })
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center text-info text-decoration-underline">Manage Stocks of the Product</h1>
            <h2 className="text-center text-info text-decoration-underline">"{name}"</h2>
            <h6 className="text-center text-info text-decoration-underline">ID: {_id}</h6>
            <div className="container row mt-5">
                <img style={{ height: '23rem', width: '21rem' }} src={image} alt="" />
                <div className="col-md-12 col-lg-6 mx-5 mt-2 text-info mx-auto">
                    <h4>Author: {author}</h4>
                    <p>Description: {description}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Price: ${price}</p>
                    <p>In Stock: {quantity}</p>
                    <p>Sold: {sold}</p>
                    {quantity !== 0 ? (<button onClick={handleDeliveredQuantity} className="btn btn-info text-white">Delivered</button>) : (<button className="btn btn-info text-white">Sold Out</button>)}
                </div>
            </div >
            <div className="text-center mt-5">
                <h2 className="text-info text-decoration-underline">Restock the Item</h2>
                <form onSubmit={handleUpdateQuantity} className="d-flex justify-content-center align-items-center mt-5">
                    <input className="border-info w-50 p-1" type="number" name="quantity" id="" placeholder="Number of items to be added" />
                    <button className="btn btn-info text-white mx-3">Add</button>
                </form>
            </div>
            <div className="text-center mt-5">
                <Link to="/manage-inventories" className="btn btn-info text-white">Manage Inventories</Link>
            </div>
        </div >
    );
};

export default ManageStocks;