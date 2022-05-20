import React from 'react';
import Authors from '../Authors/Authors';
import Banner from '../Banner/Banner';
// import Contact from '../Contact/Contact';
import Items from '../Items/Items';
import Reviews from '../Reviews/Reviews';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Items></Items>
            <Authors></Authors>
            <Reviews></Reviews>
            {/* <Contact></Contact> */}
        </div>
    );
};

export default Home;