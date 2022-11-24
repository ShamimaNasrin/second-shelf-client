import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            <Contact></Contact>
        </div>
    );
};

export default Home;