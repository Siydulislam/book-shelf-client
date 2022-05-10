import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import useManageStocks from '../../Hooks/useManageStocks';

const ManageStocks = () => {

    const { manageStocksId } = useParams();
    const [manageStocks, setManageStocks] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/book/${manageStocksId}`)
            .then(res => res.json())
            .then(data => setManageStocks(data))
    }, [manageStocksId]);


    return (
        <div className="container mt-5">
            <h1 className="text-center text-info text-decoration-underline">Manage Stocks of the Product</h1>
            <h2 className="text-center text-info text-decoration-underline">"{manageStocks.name}"</h2>
            <h6 className="text-center text-info text-decoration-underline">ID: {manageStocks._id}</h6>
            <div className="container row mt-5">
                <img style={{ height: '23rem', width: '21rem' }} src={manageStocks.image} alt="" />
                <div className="col-md-12 col-lg-6 mx-5 mt-2 text-info mx-auto">
                    <h4>Author: {manageStocks.author}</h4>
                    <p>Description: {manageStocks.description}</p>
                    <p>Supplier: {manageStocks.supplier}</p>
                    <p>Price: ${manageStocks.price}</p>
                    <p>In Stock: {manageStocks.quantity}</p>
                    <p>Sold: {manageStocks.sold}</p>
                    <button className="btn btn-info text-white">Delivered</button>
                </div>
            </div>
            <div className="text-center mt-5">
                <h2 className="text-info text-decoration-underline">Restock the Item</h2>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <input className="border-info w-50 p-1" type="number" name="items" id="" placeholder="Number of items to be added" />
                    <button className="btn btn-info text-white mx-3">Add</button>
                </div>
            </div>
            <div className="text-center mt-5">
                <Link to="/manage-inventories" className="btn btn-info text-white">Manage Inventories</Link>
            </div>
        </div>
    );
};

export default ManageStocks;