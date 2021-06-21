import styled from 'styled-components';

export const Wrapper = styled.section`
  display: block;
  width: 100%;
  max-width: 40rem;
  margin: 4rem auto;
  border: 1px solid lightgray;

  .container {
    padding: 10px;

    h2 {
      font-size: 2.2rem;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
      text-align: center;
      display: block;
      width: 100%;
      padding: 0;
      margin: 1.2rem auto;
    }

    .socialSignIn {
      margin: 3rem auto 2rem;
    }

    span {
      background: url('https://developers-dot-devsite-v2-prod.appspot.com/identity/sign-in/g-normal.png')
        transparent 5px 50% no-repeat;
      display: inline-block;
      vertical-align: middle;
      width: 5rem;
      height: 5rem;
    }

    p {
      display: inline-block;
    }
  }
`;
