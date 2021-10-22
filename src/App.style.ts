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

  .main {
  width: 100%;
  height: calc(100% - 6.5rem);
  max-width: 1450px;
  padding: 0 10px;
  margin: 0 auto;
}

.controlPanel {
  position: relative;
  max-width: 1450px;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 3rem 0 6rem 25.0rem;
  border: 1px solid #d3d3d3;

  .sidebar {
    position: absolute;
    top: 0; left: 0;
    width: 25.0rem;
    height: 100%;
    z-index: 1;
    border-right: 1px solid #d3d3d3;
  }

  .content {
    width: 100%;
    padding: 0 10px;
  }
}

.adminLayout {
  height: calc(100% - 6.5rem - 5.8rem - 3.6rem);
}

.dashboardLayout {
  height: calc(100% - 6.5rem - 5.8rem);
}

`;
