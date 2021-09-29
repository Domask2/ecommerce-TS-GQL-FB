import styled from 'styled-components';

export const Wrapper = styled.div`
  .productCard {
    max-width: 80rem;
    margin: 0 auto 10rem;

    .hero {
      display: block;
      width: 100%;
      margin: 2rem auto;

      img {
        display: block;
        width: 100%;
        margin: 0;
      }
    }

    .productDetails {
      ul,
      ul li {
        padding: 0;
        margin: 0;
      }

      ul li {
        list-style-type: none;
        margin: 0 auto 1rem;

        h1 {
          margin: 0;
        }
      }
    }

    .addToCart {
      max-width: 20rem;
    }
  }
`;
