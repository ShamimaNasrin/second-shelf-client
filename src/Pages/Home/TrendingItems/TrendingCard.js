import React from 'react';

const TrendingCard = ({ card }) => {
    const { title, author, icon } = card;
    return (
        <div className="card max-h-[370px] rounded-none">
            <figure className='w-9/12 mx-auto'><img src={icon} alt="Shoes" /></figure>
            <div className="card-body pt-2">
                <h2 className="card-title text-info pb-0">
                    {title}
                </h2>
                <p className='pt-0'>{author}</p>
            </div>
        </div>
    );
};

export default TrendingCard;