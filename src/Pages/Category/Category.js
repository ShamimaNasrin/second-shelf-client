import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import CategoryCard from './CategoryCard';

import ItemBookModal from './ItemBookModal';

const Category = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);

    //scrolltop
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useTitle('Books');

    return (
        <section className='lg:mt-16 md:mt-16 sm:mt-9 mt-5 lg:px-10 md:px-7 px-3'>
            <h2 className='text-4xl text-center mb-10 font-bold'>Available books in this category</h2>
            <div className='grid grid-cols-1 gap-5 mx-auto px-7 lg:mt-0 md:mt-0 mt-10 items-center justify-items-center justify-center' >
                {
                    allBooks.map((book) => <CategoryCard
                        key={book._id}
                        book={book}></CategoryCard>)
                }
            </div>

            {
                <ItemBookModal>

                </ItemBookModal>
            }

        </section>
    );
};

export default Category;