import React from 'react';
import img1 from '../../../images/Books/god-father.jpg';
import img2 from '../../../images/Books/hobbit.jpg';
import img3 from '../../../images/Books/lord-of-the-rings.jpg';
import img4 from '../../../images/Books/tale-of-two-cities.jpg';
import img5 from '../../../images/Books/vinci-code.jpg';
import TrendingCard from './TrendingCard';

const TrendingItems = () => {
    const cardData = [
        {
            id: 1,
            title: 'The Godfather',
            author: 'Mario Puzo',
            bookCover: img1,
        },
        {
            id: 2,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            bookCover: img2,
        },
        {
            id: 3,
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            bookCover: img3,
        },
        {
            id: 4,
            title: 'A Tale of Two Cities',
            author: 'Charles Dickens',
            bookCover: img4,
        },
        {
            id: 5,
            title: 'Da Vinci Code',
            author: 'Dan Brown',
            bookCover: img5,
        },

    ]
    return (
        <section className='lg:mt-24 md:mt-20 sm:mt-9 mt-5 lg:px-10 md:px-7 px-3'>
            <h2 className='font-bold text-primary text-center'>Trendings</h2>
            <h2 className='text-3xl text-center mb-10'>Frequently viewed items</h2>
            <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4 mx-auto px-7 lg:mt-0 md:mt-0 mt-10 items-center justify-items-center justify-center w-fit'>
                {
                    cardData.map(card => <TrendingCard
                        key={card.id}
                        card={card}>
                    </TrendingCard>)
                }
            </div>
        </section>
    );
};

export default TrendingItems;