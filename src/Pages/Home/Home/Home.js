import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Advertise></Advertise>
            <Contact></Contact>
        </div>
    );
};

export default Home;