import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 100;
    src: url('../static/fonts/RoobertLight.woff') format('woff');
  }

  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 200;
    src: url('../static/fonts/RoobertRegular.woff') format('woff');
  }

  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 300;
    src: url('../static/fonts/RoobertMedium.woff') format('woff');
  }

  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 400;
    src: url('../static/fonts/RoobertSemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 500;
    src: url('../static/fonts/RoobertBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 600;
    src: url('../static/fonts/RoobertHeavy.woff') format('woff');
  }

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
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Roobert';
    color: #fff;
    background-color: #191A1F;
    background-image: url('../static/images/noise.png');
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  strong {
    font-weight: 500;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #00a8ff;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    font-weight: 300;

    &:hover {
      opacity: 1;
    }
  }
`;

export default Global;
