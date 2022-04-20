import Footer from 'components/common/footer/footer';
import Nav from 'components/common/nav/nav';
import React, { Children } from 'react';

// eslint-disable-next-line react/prop-types
const NavFooterLayout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default NavFooterLayout;
