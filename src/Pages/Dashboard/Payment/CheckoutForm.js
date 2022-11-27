import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
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