import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';
import { BsTrash } from "react-icons/bs";
import { Link } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ManageInventories = () => {
    const [items, setItems] = useItems();
    const [isReload, setIsReload] = useState(false);

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
        <div className="container">
            <PageTitle title="Manage Inventories" />
            <h2 className="text-center text-info mt-3 text-decoration-underline">Manage Inventory</h2>
            <Table bordered variant="light" responsive className="text-info mt-3">
                <thead>
                    <tr>
                        <th>SR</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Supplier</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sold</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) =>
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td><img src={item.image} alt="" style={{ width: "50px" }} /></td>
                                <td>{item.name}</td>
                                <td>{item.author}</td>
                                <td>{item.supplier}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.sold}</td>
                                <td><button onClick={() => handleDeleteItem(item._id)} className="btn btn-secondary"><BsTrash className="fs-3"></BsTrash></button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Link to="/add-items" className="btn btn-info text-white mt-3">Add New Items</Link>
        </div >
    );
};

export default ManageInventories;