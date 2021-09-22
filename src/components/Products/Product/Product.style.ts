import styled from 'styled-components';

export const ProductWrapper = styled.div`
  width: 33.33%;
  height: 20rem;
  float: left;
  padding: 0 10px;
  margin: 0 auto 20rem;

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 100%;
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
    padding: 1rem 0;
    margin: 0 auto;

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
        margin: 0 0 0.5rem;

        .name {
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 400;
        }

        .price {
          font-size: 1.6rem;
          line-height: 1;
          font-weight: 400;
        }
      }
    }
  }
`;
