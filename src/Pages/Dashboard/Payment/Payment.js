import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

//console.log('stripepromis :',stripePromise);

const Payment = () => {
    const item = useLoaderData();
    //console.log(item);
    const { bookName, resalePrice, buyerPhone, meetLocation } = item;
    return (

        <div className='p-5'>
            <h3 className="text-3xl font-bold text-center my-10 ">You are paying for {bookName}</h3>


            {/* call the checkoutform */}
            <div className='lg:w-[40%] my-12 mx-auto p-5'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    item={item}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;