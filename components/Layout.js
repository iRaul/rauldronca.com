import React from 'react';

import Navigation from './Navigation';
import Container from './Container';
import GlobalStyle from './Global';
import Head from './Head';

const Layout = ({ children }) => (
  <>
    <Head />
    <GlobalStyle />
    <Container>
      <Navigation />
      {children}
    </Container>
  </>
);

export default Layout;
