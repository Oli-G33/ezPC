// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

// import CheckoutForm from '../components/CheckoutForm';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC);

// export default function CheckoutPage() {
//   const [clientSecret, setClientSecret] = useState('');
//   const price = 50;

//   useEffect(() => {
//     fetch('http://localhost:3010/create-payment-intent', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ price })
//     })
//       .then(res => res.json())
//       .then(data => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance = {
//     theme: 'stripe'
//   };
//   const options = {
//     clientSecret,
//     appearance
//   };

//   return (
//     <div className="App">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   );
// }
