import React, { useEffect } from 'react';
import useTitle from '../../../Hooks/useTitle';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import BestSeller from '../BestSeller/BestSeller';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';
import TrendingItems from '../TrendingItems/TrendingItems';

const Home = () => {

    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useTitle('Second Shelf');

    return (
        <div className=''>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            <BestSeller></BestSeller>
            <TrendingItems></TrendingItems>
            <Contact></Contact>
        </div>
    );
};

export default Home;