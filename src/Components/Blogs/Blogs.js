import React from 'react';

const Blogs = () => {
    return (
        <div className="container text-info">
            <h2 className="mt-5 mb-5 text-center text-decoration-underline">Blogs</h2>
            <h3>Difference between javascript and nodejs.</h3>
            <p>Answer: Javascript is a programming language and node js is a javascript runtime environment. Javascript can only be run in the browsers, but with the help of node js we can run javascript outside the browser.</p>
            <h3>When should you use nodejs and when should you use mongodb?</h3>
            <p>Answer: Node js, a javascript based runtime environment, is definitely fast and it allows to explore a dynamic range of data at real-time. As nosql database like mongodb, stores data as a json format and collection of documents, it is possible to deal easily varied types of data over the internet using node js.</p>
            <h3>Difference between sql and nosql databases.</h3>
            <p>Answer: SQL is a Relational Database Management System(RDBMS), whereas nosql is non-relational database system. SQL has the predefined schema and nosql has the dynamic schema. SQL is vertically scalable, on the other hand, nosql is horizontally scalable.</p>
            <h3>What is the purpose of jwt and how does it work?</h3>
            <p>Answer: JWT, abbreviation of JSON Web Token that is a JSON object, is mainly used for an authentication system like transfer information securely over the web between two parties. JSON Web Token is composed of three parts- Header, Payload and Signature. Each are separated by dot. The Header contains the types of token and the signing algorithm. The Payload contains the claims. And the Signature ensures that the token has not been altered.</p>
        </div>
    );
};

export default Blogs;