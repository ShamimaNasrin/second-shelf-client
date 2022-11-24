import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
    
    return (
        <section className='lg:mt-24 md:mt-16 sm:mt-9 mt-5 lg:px-10 md:px-7 px-3'>
            <h2 className='font-bold text-primary text-center'>Advertisement</h2>
            <h2 className='text-3xl text-center mb-10'>Available Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-7 lg:mt-0 md:mt-0 mt-10 items-center justify-items-center justify-center' >
            {
                [...Array(6)].map((card, i) =><AdvertiseCard
                key={i}
                card={card}></AdvertiseCard>)
            }
        </div>
        </section>
    );
};

export default Advertise;