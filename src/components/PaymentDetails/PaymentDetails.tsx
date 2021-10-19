import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import FormInput from '../forms/FormInput/FormInput';
import Button from '../forms/Button/Button';
import { CountryDropdown } from 'react-country-region-selector';

import { apiInstance } from '../../Utils/utils';

import { Wrapper } from './PaymentDetails.style';
import { FormRow } from '../forms/FormSelect/FormSelect.style';
import { WrapperForm } from '../forms/FormInput/FormInput.style';

import { selectCartTotal, selectCartItemsCount } from '../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/Cart/cart.actions';

const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
};

interface IInitialAddressState {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
});

const PaymentDetails: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const history = useHistory();
  const { total, itemCount } = useSelector(mapState);
  const [billingAddress, setBillingAddress] = useState<IInitialAddressState>({
    ...initialAddressState,
  });
  const [shippingAddress, setShippingAddress] = useState<IInitialAddressState>({
    ...initialAddressState,
  });
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  useEffect(() => {
    if (itemCount < 1) {
      history.push('');
    }
  }, [itemCount]);

  const handleShipping = (e: any) => {
    const { name, value } = e.target;

    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  const handleBilling = (e: any) => {
    const { name, value } = e.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    const cardElement = elements?.getElement('card')!;

    if (
      !shippingAddress.line1 ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.postal_code ||
      !shippingAddress.country ||
      !billingAddress.line1 ||
      !billingAddress.city ||
      !billingAddress.state ||
      !billingAddress.postal_code ||
      !billingAddress.country ||
      !recipientName ||
      !nameOnCard
    ) {
      return;
    }

    apiInstance
      .post('/payment/create', {
        amount: total * 100,
        shipping: {
          name: recipientName,
          address: {
            ...shippingAddress,
          },
        },
      })
      .then(({ data: clientSecret }: { data: any }) => {
        stripe
          ?.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
              name: nameOnCard,
              address: {
                ...billingAddress,
              },
            },
          })
          .then(({ paymentMethod }) => {
            stripe
              .confirmCardPayment(clientSecret, {
                payment_method: paymentMethod!.id,
              })
              .then(({ paymentIntent }) => {
                console.log(paymentIntent);
                dispatch(clearCart());
              });
          });
      });
  };

  const configCardElement = {
    style: {
      base: {
        fontSize: '16px',
      },
    },
    hidePostalCode: true,
  };

  return (
    <Wrapper>
      <div className="paymentDetails">
        <form onSubmit={handleFormSubmit}>
          <div className="group">
            <h2>Shipping Address</h2>

            <FormInput
              required
              type="text"
              placeholder="Recipient name"
              name="recipientName"
              value={recipientName}
              handleChange={(e) => setRecipientName(e.target.value)}
            />

            <FormInput
              required
              type="text"
              placeholder="Line 1"
              name="line1"
              value={shippingAddress.line1}
              handleChange={(e: any) => handleShipping(e)}
            />

            <FormInput
              type="text"
              placeholder="Line 2"
              name="line2"
              value={shippingAddress.line2}
              handleChange={(e: any) => handleShipping(e)}
            />

            <FormInput
              required
              type="text"
              placeholder="City"
              name="city"
              value={shippingAddress.city}
              handleChange={(e: any) => handleShipping(e)}
            />

            <FormInput
              required
              type="text"
              placeholder="State"
              name="state"
              value={shippingAddress.state}
              handleChange={(e: any) => handleShipping(e)}
            />

            <FormInput
              required
              type="text"
              placeholder="postal Code"
              name="postal_code"
              value={shippingAddress.postal_code}
              handleChange={(e: any) => handleShipping(e)}
            />

            <WrapperForm>
              <FormRow>
                <CountryDropdown
                  value={shippingAddress.country}
                  onChange={(val) => setShippingAddress({ ...shippingAddress, country: val })}
                  valueType="short"
                />
              </FormRow>{' '}
            </WrapperForm>
          </div>

          <div className="group">
            <h2>Billing Address</h2>

            <FormInput
              required
              type="text"
              placeholder="Name on Card"
              name="nameOnCard"
              value={nameOnCard}
              handleChange={(e) => setNameOnCard(e.target.value)}
            />

            <FormInput
              required
              type="text"
              placeholder="Line 1"
              name="line1"
              value={billingAddress.line1}
              handleChange={(e) => handleBilling(e)}
            />

            <FormInput
              type="text"
              placeholder="Line 2"
              name="line2"
              value={billingAddress.line2}
              handleChange={(e) => handleBilling(e)}
            />

            <FormInput
              required
              type="text"
              placeholder="City"
              name="city"
              value={billingAddress.city}
              handleChange={(e) => handleBilling(e)}
            />

            <FormInput
              required
              type="text"
              placeholder="State"
              name="state"
              value={billingAddress.state}
              handleChange={(e) => handleBilling(e)}
            />

            <FormInput
              required
              type="text"
              placeholder="postal Code"
              name="postal_code"
              value={billingAddress.postal_code}
              handleChange={(e) => handleBilling(e)}
            />

            <WrapperForm>
              <FormRow>
                <CountryDropdown
                  value={billingAddress.country}
                  onChange={(val) => setBillingAddress({ ...billingAddress, country: val })}
                  valueType="short"
                />
              </FormRow>{' '}
            </WrapperForm>
          </div>

          <div className="group">
            <h2>Card Details</h2>

            <CardElement options={configCardElement} />
          </div>

          <Button pd="16px" type="submit">
            Pay Now
          </Button>
        </form>
      </div>
    </Wrapper>
  );
};

export default PaymentDetails;
