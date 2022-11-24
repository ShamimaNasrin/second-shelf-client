import React from 'react';
import book from '../../../images/Books/hobbit.jpg';
import { RiStarFill } from "react-icons/ri";

const AdvertiseCard = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-max lg:max-h-[240px] md:max-h-[360px] md:max-w-[330px] sm:max-h-[360px] sm:max-w-[330px]">
                <figure className='lg:w-2/5'><img src={book} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">The Hobbit</h2>
                    <p>By J.R.R Tolkien</p>
                    <p className='flex items-center'><RiStarFill className='text-yellow-300 mr-1' />4.5</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;