import React, { useState } from "react";

import { CardElement, useElements } from "@stripe/react-stripe-js";

import FormInput from "../forms/FormInput/FormInput";
import Button from "../forms/Button/Button";
import { CountryDropdown } from "react-country-region-selector";

import { Wrapper } from "./PaymentDetails.style";
import { FormRow } from "../forms/FormSelect/FormSelect.style";
import { WrapperForm } from "../forms/FormInput/FormInput.style";

const initialAddressState = {
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
};

interface IInitialAddressState {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

const PaymentDetails: React.FC = () => {
  const [billingAddress, setBillingAddress] = useState<IInitialAddressState>({
    ...initialAddressState,
  });
  const [shippingAddress, setShippingAddress] = useState<IInitialAddressState>({
    ...initialAddressState,
  });
  const [recipientName, setRecipientName] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");

  const handleShipping = (e:any) => {
    const { name, value } = e.target;

    setShippingAddress({
      ...shippingAddress,
      [name] : value
    })
  }

  const handleBilling = (e:any) => {
    const { name, value } = e.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value
    });
  }

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();


  };

  const configCardElement = {
    style: {
      base: {
        fontSize: '16px'
      }
    },
    hidePostalCode: true
  };

  return (
    <Wrapper>
      <div className="paymentDetails">
        <form onSubmit={handleFormSubmit}>
          <div className="group">
            <h2>Shipping Address</h2>

            <FormInput
              type="text"
              placeholder="Recipient name"
              name="recipientName"
              value={recipientName}
              handleChange={(e) => setRecipientName(e.target.value)}
            />

            <FormInput
              type="text"
              placeholder="Line 1"
              name="line1"
              value={shippingAddress.line1}
              handleChange={(e:any) => handleShipping(e)}
            />

            <FormInput
              type="text"
              placeholder="Line 2"
              name="line2"
              value={shippingAddress.line2}
              handleChange={(e:any) => handleShipping(e)}

            />

            <FormInput
              type="text"
              placeholder="City"
              name="city"
              value={shippingAddress.city}
              handleChange={(e:any) => handleShipping(e)}

            />

            <FormInput
              type="text"
              placeholder="State"
              name="state"
              value={shippingAddress.state}
              handleChange={(e:any) => handleShipping(e)}

            />

            <FormInput
              type="text"
              placeholder="postal Code"
              name="postal_code"
              value={shippingAddress.postal_code}
              handleChange={(e:any) => handleShipping(e)}

            />

            <WrapperForm>
              <FormRow>
                <CountryDropdown
                  value={shippingAddress.country}
                  onChange={(val) =>
                    setShippingAddress({ ...shippingAddress, country: val })
                  }
                  valueType="short"
                />
              </FormRow>{" "}
            </WrapperForm>
          </div>

          <div className="group">
            <h2>Billing Address</h2>

            <FormInput
              type="text"
              placeholder="Name on Card"
              name="nameOnCard"
              value={nameOnCard}
              handleChange={(e) => setNameOnCard(e.target.value)}
            />

            <FormInput
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
              type="text"
              placeholder="City"
              name="city"
              value={billingAddress.city}
              handleChange={(e) => handleBilling(e)}
            />

            <FormInput
              type="text"
              placeholder="State"
              name="state"
              value={billingAddress.state}
              handleChange={(e) => handleBilling(e)}
            />

            <FormInput
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
                  onChange={(val) =>
                    setShippingAddress({ ...billingAddress, country: val })
                  }
                  valueType="short"
                />
              </FormRow>{" "}
            </WrapperForm>
          </div>

          <div className="group">
            <h2>Card Details</h2>

            <CardElement
              options={configCardElement}
            />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default PaymentDetails;
