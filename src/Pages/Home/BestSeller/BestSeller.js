import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BestSellerCard from './BestSellerCard';

const BestSeller = () => {
    const [bestBooks, setbestBooks] = useState([]);

    useEffect(() => {

        axios.get('https://second-shelf-server.vercel.app/bestbooks')
            .then(data => {
                //console.log(data.data);
                const bookData = data.data;
                setbestBooks(bookData);
            })
    }, [])

    //console.log(bestBooks);

    return (
        <section className='lg:mt-24 md:mt-20 sm:mt-9 mt-5 lg:px-10 md:px-7 px-3 mx-auto'>
            <h2 className='font-bold text-primary text-center'>BestSeller</h2>
            <h2 className='text-3xl text-center mb-10'>Best Seller items collection</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto px-7 lg:mt-0 md:mt-0 mt-10 items-center justify-items-center justify-center w-fit lg:w-[70%]'>
                {
                    bestBooks.map(bestBook => <BestSellerCard
                    key={bestBook._id}
                        bestBook={bestBook}>
                    </BestSellerCard>)
                }
            </div>
        </section>
    );
};

export default BestSeller;