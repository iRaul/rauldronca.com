import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  @font-face {
    font-family: 'Founders Grotesk';
    src: url('../static/fonts/FoundersGrotesk-Light.woff2') format('woff2'),
         url('../static/fonts/FoundersGrotesk-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Founders Grotesk';
    src: url('../static/fonts/FoundersGrotesk-LightItalic.woff2') format('woff2'),
         url('../static/fonts/FoundersGrotesk-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Founders Grotesk';
    src: url('../static/fonts/FoundersGrotesk-SemiboldItalic.woff2') format('woff2'),
         url('../static/fonts/FoundersGrotesk-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Founders Grotesk';
    src: url('../static/fonts/FoundersGrotesk-Medium.woff2') format('woff2'),
         url('../static/fonts/FoundersGrotesk-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Founders Grotesk';
    src: url('../static/fonts/FoundersGrotesk-MediumItalic.woff2') format('woff2'),
         url('../static/fonts/FoundersGrotesk-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Founders Grotesk';
    src: url('../static/fonts/FoundersGrotesk-Bold.woff2') format('woff2'),
         url('../static/fonts/FoundersGrotesk-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Founders Grotesk';
    src: url('../static/fonts/FoundersGrotesk-Regular.woff2') format('woff2'),
         url('../static/fonts/FoundersGrotesk-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Founders Grotesk';
    src: url('../static/fonts/FoundersGrotesk-BoldItalic.woff2') format('woff2'),
         url('../static/fonts/FoundersGrotesk-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Founders Grotesk Regular';
    src: url('../static/fonts/FoundersGrotesk-RegularItalic.woff2') format('woff2'),
         url('../static/fonts/FoundersGrotesk-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
    text-rendering: optimizeLegibility;
  }

  @font-face {
    font-family: 'Founders Grotesk';
    src: url('../static/fonts/FoundersGrotesk-Semibold.woff2') format('woff2'),
         url('../static/fonts/FoundersGrotesk-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    text-rendering: optimizeLegibility;
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

    @media (max-width: 576px) {
      font-size: 12px;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Founders Grotesk', sans-serif;
    color: #fff;
    background-color: #0E1012;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  strong {
    font-weight: bold;
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
