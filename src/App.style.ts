import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
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
  }

  a, a:hover {
    transition: all .4s ease;
  }
`

export const Wrapper = styled.div`
  height: 6.5rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
`;