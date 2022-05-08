import React, { useEffect, useState } from 'react';
import Author from './Author';

const Authors = () => {
    const [authors, setAuthor] = useState([]);

    useEffect(() => {
        fetch('author.json')
            .then(res => res.json())
            .then(data => setAuthor(data))
    }, [])
    return (
        <>
            <h2 className="mt-5 mb-5 text-center text-decoration-underline text-info">Popular Author</h2>
            <div className="container row mx-auto">
                {
                    authors.map(author => <Author
                        key={author.id}
                        author={author}
                    ></Author>)
                }
            </div>
        </>
    );
};

export default Authors;