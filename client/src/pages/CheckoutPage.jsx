import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './CheckoutPage.scss';
import { useLocation } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState('');
  const location = useLocation();
  const { total } = location.state;

  useEffect(() => {
    fetch('http://localhost:3010/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ total })
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret));
  }, [total]);

  const appearance = {
    theme: 'stripe'
  };
  const options = {
    clientSecret,
    appearance
  };

  return (
    <div className="checkout">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm total={total} />
        </Elements>
      )}
    </div>
  );
}
