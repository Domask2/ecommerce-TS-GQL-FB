import styled from 'styled-components';

export const Wrapper = styled.div`
  .cart {
    max-width: 100rem;
    margin: 0 auto;

    h1 {
      display: block;
      width: 100%;
    }

    h1,
    p {
      text-align: center;
    }

    table {
      width: 100%;
    }
  }

  .checkoutHeader {
    border-bottom: 1px solid black;
  }

  .checkoutHeader,
  .cart {
    width: 100%;
    text-align: left;

    th,
    td {
      width: 22%;
    }
  }

  .cartItem {
    td {
      padding: 10px;
    }
    td img {
      display: block;
      width: 100%;
      height: 10 0px;
      object-fit: cover;
    }
  }

  .cartBtns {
    display: block;
    width: 100%;
  }

  .cartBtn {
    cursor: pointer;
  }

  @media only screen and (max-width: 980px) {
    .checkoutHeader {
      display: none;
    }

    .cartItem {
      border: 1px solid black;
    }

    .checkout .cart td {
      display: block;
      width: 100%;
    }

    .checkout .cartBtn.remove {
      display: block;
      width: 100%;
      padding: 1rem;
      background-color: black;
      color: white;
    }
  }
`;
