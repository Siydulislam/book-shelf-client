import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <>
            <h2 className="mt-5 mb-5 text-center text-decoration-underline text-info">Popular Books</h2>
            <div className="container row mx-auto">
                {
                    items.map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </>
    );
};

export default Items;