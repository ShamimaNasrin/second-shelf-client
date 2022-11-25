import React from 'react';
import CustomBtn from '../../components/CustomBtn/CustomBtn';
import img from '../../images/Books/vinci-code.jpg';
import './CategoryCss.css';

const CategoryCard = () => {
    return (
        <div className='lg:w-3/5 md:w-3/4'>
            <div className="card lg:card-side md:card-side shadow-xl lg:max-w-fit lg:max-h-[290px] md:max-h-[360px] md:max-w-fit sm:max-h-fit sm:max-w-[330px] max-h-fit rounded-none">
                <div className='lg:w-1/3 md:w-1/3 flex justify-center items-center justify-items-center'>
                    <img className='cat-img' src={img} alt="Album" />
                </div>

                <div className="card-body gap-0 px-[32px] py-[12px]">
                    <h2 className="card-title">The Hobbit</h2>
                    <p className='mb-4 text-sm'>By J.R.R Tolkien</p>
                    <p className='pb-0 text-sm'>Buying price: 50$</p>
                    <p className='pb-0 text-sm'>Resale price: 50$</p>
                    <p className='pb-0 text-sm'>Location: Dhaka</p>
                    <p className='pb-0 text-sm'>Years of use: 1 yr</p>
                    <p className='pb-0 text-sm'>Post on: 1 nov</p>
                    <p className='pb-0 text-sm'>Seller: harry</p>
                    <div className="card-actions justify-end">
                        <label
                            htmlFor="booking-modal"
                            className="btn btn-primary bg-primary text-white border-none"

                        >Book now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;