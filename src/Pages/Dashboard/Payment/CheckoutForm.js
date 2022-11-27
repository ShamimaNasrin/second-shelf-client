import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const [cardError, setCardError] = useState('');

    //stripe hooks
    const stripe = useStripe();
    const elements = useElements();

    // form submit handler
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='shadow-xl p-6 bg-white rounded-md m-6'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-4 btn-primary text-white' type="submit" disabled={!stripe}>
                    Pay
                </button>

                {/* <p className="text-red-500 mt-4">{cardError}</p> */}
            </form>
        </div>
    );
};

export default CheckoutForm;