import React from 'react';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import './CategoryCss.css';

const CategoryCard = ({ book, setABook }) => {
    const { image, author, bookName, buyingPrice, category, resalePrice, location, yearsOfUse, postDate, name, email } = book;
    return (
        <div className='lg:w-3/5 md:w-3/4'>
            <div className="card lg:card-side md:card-side shadow-xl lg:max-w-fit lg:max-h-[290px] md:max-h-[360px] md:max-w-fit sm:max-h-fit sm:max-w-[330px] max-h-fit rounded-none">
                <div className='lg:w-1/3 md:w-1/3 flex justify-center items-center justify-items-center'>
                    <img className='cat-img' src={image} alt="Album" />
                </div>

                <div className="card-body gap-0 px-[32px] py-[12px]">
                    <h2 className="card-title">{bookName}</h2>
                    <p className='mb-4 text-sm'>By {author}</p>
                    <p className='pb-0 text-sm'>Catgory: {category}</p>
                    <p className='pb-0 text-sm'>Buying price: {buyingPrice}</p>
                    <p className='pb-0 text-sm'>Resale price: {resalePrice}</p>
                    <p className='pb-0 text-sm'>Location: {location}</p>
                    <p className='pb-0 text-sm'>Years of use: {yearsOfUse}</p>
                    <p className='pb-0 text-sm'>Post on: {postDate}</p>
                    <p className='pb-0 text-sm'>Seller: {name}</p>

                     {/* The button to open modal */}
                    <div className="card-actions justify-end">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary bg-primary text-white border-none"
                            onClick={() => setABook(book)}
                        >Book now</label>    
                    </div>

                </div>
            </div>

            
        </div>
    );
};

export default CategoryCard;