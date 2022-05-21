import React from 'react';
import LibraryImage from '../../Assets/Images/banner-4.jpg';

const About = () => {
    return (
        <div className="container">
            <h2 className="mt-5 mb-5 text-center text-decoration-underline text-info">About</h2>
            <div className="container row mt-5">
                <p className="text-info fs-4 mx-auto" style={{ width: '50rem' }}>As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and still considered as an investment of time to read. In a restricted sense, a book is a self-sufficient section or part of a longer composition, a usage reflecting that, in antiquity, long works had to be written on several scrolls and each scroll had to be identified by the book it contained.</p>
                <img style={{ height: '30rem', width: '50rem' }} className="mx-auto mt-5" src={LibraryImage} alt="" />
            </div >
        </div>
    );
};

export default About;