import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    scroll-behavior: smooth;

    @media (max-width: 576px) {
      font-size: 12px;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #050505;
    color: #fff;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  strong {
    font-weight: 600;
  }

  a {
    cursor: pointer;
    color: #0099ff;
    font-weight: 700;
    text-decoration: none;
  }

  .fyusion-link {
    opacity: 0.7;
    color: #fff;
    font-style: italic;
    transition: opacity .1s ease;
  }
  .fyusion-link:hover {
    opacity: 1;
  }
`;

export default Global;
