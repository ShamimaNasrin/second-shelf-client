import React from 'react';
import kids from '../../../images/cat-icons/kids.png';
import business from '../../../images/cat-icons/business.png';
import literature from '../../../images/cat-icons/literature.png';

const Categories = () => {
    const cardData = [
        {
            id: 1,
            title: 'Children',
            icon: kids,
        },
        {
            id: 2,
            title: 'Business',
            icon: business,
        },
        {
            id: 3,
            title: 'Literature',
            icon: literature,
        },

    ]
    return (

        <section className='lg:mt-24 md:mt-20 sm:mt-9 mt-5 lg:px-10 md:px-7 px-3'>
            <h2 className='font-bold text-primary text-center'>Categories</h2>
            <h2 className='text-3xl text-center mb-10'>Choose a category</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto px-7 lg:mt-0 md:mt-0 mt-10 items-center justify-items-center justify-center w-fit'>
                {
                    cardData.map(card => <div
                        key={card.id} className="mx-auto flex justify-center">
                        <div className=' bg-secondary flex flex-col items-center justify-center px-10 py-4 rounded-md'>
                            <figure className='w-[80px]'><img src={card.icon} alt="Album" /></figure>
                            <p className='font-bold text-center text-xl'>{card.title}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>

    );
};

export default Categories;