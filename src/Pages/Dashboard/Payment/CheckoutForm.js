import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ item }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const { resalePrice, buyerEmail, buyerName } = item;


    //stripe hooks
    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ resalePrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resalePrice]);

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

        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            setSuccess('Payment completed');
            setTransactionId(paymentIntent.id);
        }
        setProcessing(false);



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

                <button
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>

            </form>

            <p className="text-red-500 mt-4">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId is: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;