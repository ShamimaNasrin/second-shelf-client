import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

//console.log('stripepromis :',stripePromise);

const Payment = () => {
    const item = useLoaderData();
    //console.log(item);
    const { bookName, resalePrice, buyerPhone, meetLocation } = item;
    return (
        <h3 className="text-3xl">You are paying for {bookName}</h3>

    );
};

export default Payment;