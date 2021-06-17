import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  html,
  body,
  #root,
  .App {
    height: 100%;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a, a:hover {
    transition: all .4s ease;
  }

`;

export const Wrapper = styled.div``;

export const Main = styled.div`
  width: 100%;
  height: calc(100% - 6.5rem);
  max-width: 1450px;
  padding: 0 10px;
  margin: 0 auto;
`;
