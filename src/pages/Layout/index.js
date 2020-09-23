import React from 'react';
import { Navbar } from '../../components';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
