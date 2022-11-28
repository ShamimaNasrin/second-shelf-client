import React from 'react';
import { RiStarFill } from "react-icons/ri";

const AdvertiseCard = (book) => {
    //console.log(book);
    const { image, bookName, author, resalePrice, category } = book.book;
    //console.log(bookName,author, resalePrice,category);

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-max lg:max-h-[240px] md:max-h-[360px] md:max-w-[330px] sm:max-h-[360px] sm:max-w-[330px]">
                <figure className='lg:w-2/5'><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>{author}</p>
                    <p>{resalePrice}$</p>
                    <p className='flex items-center'><RiStarFill className='text-yellow-300 mr-1' />4.5</p>
                    <p className='text-red-600 text-sm'>To buy this book check in the {category} category</p>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;