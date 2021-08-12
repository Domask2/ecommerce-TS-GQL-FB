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
    color: black;
  }

  a, a:hover {
    transition: all .4s ease;
  }

  li {
    list-style-type: none;
  }

`;
