import Head from 'next/head'
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className="container">
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout;