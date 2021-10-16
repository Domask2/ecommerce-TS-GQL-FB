import React from 'react';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from '../../stripe/config';

const stripePromise = loadStripe(publishableKey);

const Payment: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentDetails />
    </Elements>
    
  )
};

export default Payment;
