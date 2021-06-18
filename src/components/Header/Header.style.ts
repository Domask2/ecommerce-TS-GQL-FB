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

  .callToActions {
    position: absolute;
    right:10px;
    top: 50%;
    transform: translateY(-50%);

    ul, li {
      margin: 0;
      padding: 0;
    }

    li {
      list-style-type: none;
      display: inline-block;
      margin-right: 1.5rem;

      &:last-child {
        margin-right:0;
      }

      a {
        font-size: 1.8rem;
        line-height: 1;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
`;
