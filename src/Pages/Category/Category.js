import React from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    return (
        <section className='lg:mt-16 md:mt-16 sm:mt-9 mt-5 lg:px-10 md:px-7 px-3'>
            <h2 className='text-4xl text-center mb-10 font-bold'>Available books in this category</h2>
            <div className='grid grid-cols-1 gap-5 mx-auto px-7 lg:mt-0 md:mt-0 mt-10 items-center justify-items-center justify-center' >
            {
                [...Array(6)].map((card, i) =><CategoryCard
                key={i}
                card={card}></CategoryCard>)
            }
        </div>
        </section>
    );
};

export default Category;