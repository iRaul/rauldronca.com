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
    background-color: #fff;
    color: #000;
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  strong {
    font-weight: 600;
  }

  a {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    font-weight: 500;
    text-decoration: none;

    &.link-a {
      background-color: #084ae0;
      color: #fff;
      padding: 2px 4px;
      border-radius: 1px;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export default Global;
