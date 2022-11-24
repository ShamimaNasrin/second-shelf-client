import React from 'react';
import CustomBtn from '../../../components/CustomBtn/CustomBtn';
import './Banner.css';

const Banner = () => {
    return (
        <div className='rounded-[30px]'>
            <div className="hero md:h-[65vh] lg:min-h-[85vh] rounded-[30px] banner-bg">
                <div className="hero-overlay bg-opacity-60 rounded-[30px]"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold ">Buy and sell your books
                            at the best price</h1>
                        <p className="mb-5">From Fiction to textbooks resources, we have a lot of books in collection to offer you. We provide only the best books for buy</p>
                        <CustomBtn>Get Started</CustomBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;