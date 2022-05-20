import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../Hooks/useItems';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Item from './Item';

const Items = () => {
    const [items] = useItems();
    return (
        <>
            <PageTitle title="Items" />
            <h2 className="mt-5 mb-5 text-center text-decoration-underline text-info">Popular Books</h2>
            <div className="container row mx-auto">
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className="text-center mt-5">
                <Link to="/manage-inventories" className="btn btn-info text-white">Manage Inventories</Link>
            </div>
        </>
    );
};

export default Items;