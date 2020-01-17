import { createGlobalStyle } from 'styled-components';

// Fonts
import RoobertLight from '../static/fonts/RoobertLight.woff';
import RoobertRegular from '../static/fonts/RoobertRegular.woff';
import RoobertMedium from '../static/fonts/RoobertMedium.woff';
import RoobertSemiBold from '../static/fonts/RoobertSemiBold.woff';
import RoobertBold from '../static/fonts/RoobertBold.woff';
import RoobertHeavy from '../static/fonts/RoobertHeavy.woff';

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 100;
    src: url(${RoobertLight}) format('woff');
  }

  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 200;
    src: url(${RoobertRegular}) format('woff');
  }

  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 300;
    src: url(${RoobertMedium}) format('woff');
  }

  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 400;
    src: url(${RoobertSemiBold}) format('woff');
  }

  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 500;
    src: url(${RoobertBold}) format('woff');
  }

  @font-face {
    font-family: 'Roobert';
    font-style: normal;
    font-weight: 600;
    src: url(${RoobertHeavy}) format('woff');
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
    color: #222;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default Global;
