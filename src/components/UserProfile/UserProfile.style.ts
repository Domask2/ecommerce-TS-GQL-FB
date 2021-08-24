import styled from 'styled-components';

export const Wrapper = styled.div`
  .userProfile {
    display: block;
    width: 100%;
    margin: 3rem auto 1rem;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    ul {
      li {
        display: block;
        width: 100%;

        .img {
          display: block;
          width: 5rem;
          margin: 0 auto;

          img {
            display: block;
            width: 100%;
          }
        }

        .displayName {
          display: block;
          width: 100%;
          text-align: center;
          margin: 1rem auto;
          font-size: 1.8rem;
          line-height: 1;
          text-transform: uppercase;
        }
      }
    }
  }
`;
