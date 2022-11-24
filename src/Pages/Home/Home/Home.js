import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='max-w-[1450px] mx-auto'>
            <Banner></Banner>
            <Contact></Contact>
        </div>
    );
};

export default Home;