import styled from "styled-components";

export const Wrapper = styled.div`
  .paymentDetails {
    display: block;
    width: 100%;
    max-width: 80rem;
    padding: 0;
    margin: 2rem auto;

    .group {
      margin: 0 0 2rem;

      .formRow {
        display: inline-block;
        width: 100%;
      }
      .checkoutInput {
        display: block;
        width: 100%;
        font-size: 1.5rem;
        line-height: 1;
        font-weight: 400;
        text-align: left;
        padding: 10px 5px;
        margin: 0 auto;
        border: 1px solid #9e9e9e;
        outline: none;
      }

      input {
        margin: 12px auto;
        border: 1px solid #9e9e9e;
      }
    }
  }
`;
