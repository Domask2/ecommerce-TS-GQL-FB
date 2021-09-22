import styled from 'styled-components';

export const ProductWrapper = styled.div`
  width: calc(33.33% - 15px);
  margin: 0px 0px 10px 1rem;
  border: 1px solid lightgray;

  @media (max-width: 800px) {
    width: 48%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 200px) {
    width: 40%;
  }

  .thumb {
    display: block;
    width: 100%;

    img {
      display: block;
      width: 100%;
      height: 300px;
      margin: 0;
      object-fit: cover;
    }
  }

  .details {
    display: block;
    width: 100%;

    ul,
    ul li {
      padding: 0;
      margin: 0;
    }

    ul {
      li {
        display: block;
        width: 100%;
        list-style-type: none;
        text-align: left;
        margin-bottom: 10px;

        .name {
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 400;
          padding: 10px;
        }

        .price {
          font-size: 1.6rem;
          line-height: 1;
          font-weight: 400;
          padding: 10px;
        }
      }
    }

    .addToCard {
      margin: 2rem 0 0 0;
      button {
        margin: 0;
        border-radius: 0px;
        box-shadow: 0px 0px 0px white;
      }
    }
  }
`;
