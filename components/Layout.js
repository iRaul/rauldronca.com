import React from 'react';

import Navigation from './Navigation';
import GlobalStyle from './Global';
import Head from './Head';

const Layout = ({ children }) => (
  <>
    {/* <Head /> */}
    <GlobalStyle />
    {/* <Navigation /> */}
    {children}
  </>
);

export default Layout;
