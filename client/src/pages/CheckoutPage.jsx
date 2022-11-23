import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './CheckoutPage.scss';
import { useLocation } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState('');
  const [show, setShow] = useState(true);

  const location = useLocation();
  const { total } = location.state;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_REST_API_URL}/create-payment-intent`, {
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
    <div>
      <ToastContainer position="top-center" className="p-3">
        <Toast
          bg="success"
          onClose={() => setShow(false)}
          show={show}
          delay={10000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">TIP!</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Use the test card number 4242 4242 4242 4242, any expiration date in
            the future, and a random 3 digit CVC number to complete your
            purchase.
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <h3>Checkout:</h3>
      <div className="checkout">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm total={total} />
          </Elements>
        )}
      </div>
    </div>
  );
}
