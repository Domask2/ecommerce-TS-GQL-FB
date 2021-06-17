import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 6.5rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  .container {
    max-width: 1450px;
    height: 100%;
    position: relative;
    margin: 0 auto;
  }

  .logo {
    width: 13rem;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    img {
      display: block;
      width: 100%;
      margin: 0;
    }
  }
`;
