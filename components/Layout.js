import React from 'react';

import Navigation from './Navigation';
import Container from './Container';
import GlobalStyle from './Global';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Container>
      <Navigation />
      {children}
    </Container>
  </>
);

export default Layout;
