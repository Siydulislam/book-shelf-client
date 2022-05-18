import React from 'react';
import { Form } from 'react-bootstrap';

const AddItems = () => {

    const handleAddItems = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const author = event.target.author.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const sold = event.target.sold.value;

        const newItem = { name, author, description, image, supplier, price, quantity, sold };

        fetch('http://localhost:5000/book', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        alert("Items added successfully!")
        event.target.reset();
    }
    return (
        <div>
            <h2 className="text-center text-info text-decoration-underline mt-3">Add New Items</h2>
            <Form onSubmit={handleAddItems} className="w-75 mx-auto border p-3 mt-5">
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-info fs-5">Name</Form.Label>
                    <Form.Control name="name" type="text" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-info fs-5">Author</Form.Label>
                    <Form.Control name="author" type="text" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="text-info fs-5">Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows={3} required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-info fs-5">Image Link</Form.Label>
                    <Form.Control name="image" type="text" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-info fs-5">Supplier</Form.Label>
                    <Form.Control name="supplier" type="text" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-info fs-5">Price</Form.Label>
                    <Form.Control name="price" type="number" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-info fs-5">Quantity</Form.Label>
                    <Form.Control name="quantity" type="number" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label className="text-info fs-5">Sold</Form.Label>
                    <Form.Control name="sold" type="number" required />
                </Form.Group>
                <button className="btn btn-info mt-3 text-white fs-5">Submit</button>
            </Form>
        </div>
    );
};

export default AddItems;