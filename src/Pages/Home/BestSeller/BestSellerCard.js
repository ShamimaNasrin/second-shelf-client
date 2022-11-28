import React from 'react';

const BestSellerCard = ({ bestBook }) => {
    //console.log(bestBook);
    const { title, author, bookCover } = bestBook;
    return (
        <div className="card max-h-[370px] rounded-none">
            <figure className='w-9/12 mx-auto h-[260px]'><img src={bookCover} alt="bestbooks" /></figure>
            <div className="card-body pt-2">
                <h2 className="card-title text-info pb-0">
                    {title}
                </h2>
                <p className='pt-0'>{author}</p>
            </div>
        </div>
    );
};

export default BestSellerCard;