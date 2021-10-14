import React, { useState } from "react";

import FormInput from "../forms/FormInput/FormInput";
import Button from "../forms/Button/Button";
import { CountryDropdown } from "react-country-region-selector";

import { Wrapper } from "./PaymentDetails.style";
import { FormRow } from "../forms/FormSelect/FormSelect.style";
import { WrapperForm } from "../forms/FormInput/FormInput.style";

const PaymentDetails = () => {
  const [name, setName] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
  };

  console.log(country);
  return (
    <Wrapper>
      <div className="paymentDetails">
        <form onSubmit={handleFormSubmit}>
          <div className="group">
            <h2>Shipping Address</h2>

            <FormInput
              type="text"
              placeholder="Recipient name"
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />

            <FormInput type="text" placeholder="Line 1" />

            <FormInput type="text" placeholder="Line 2" />

            <FormInput type="text" placeholder="City" />

            <FormInput type="text" placeholder="postal Code" />

            <FormInput type="text" placeholder="State" />
            
            <WrapperForm>
              <FormRow>
                <CountryDropdown
                  value={country}
                  onChange={(val) => setCountry(val)}
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
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />

            <FormInput type="text" placeholder="Line 1" />

            <FormInput type="text" placeholder="Line 2" />

            <FormInput type="text" placeholder="City" />

            <FormInput type="text" placeholder="postal Code" />

            <FormInput type="text" placeholder="State" />
          </div>

          <div className="group">
            <h2>Card Details</h2>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default PaymentDetails;
