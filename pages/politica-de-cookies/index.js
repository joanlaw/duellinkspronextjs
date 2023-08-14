import React from 'react';
import CookiesPolicy from '../../components/CookiesPolicy';
import Header from '../../components/Header'
import Footer from '../../components/Footer';

const Cookies = () => {
  return (
    <>
    <Header />
    <div className='container'>
      <CookiesPolicy />
    </div>
    <Footer />
    </>
  );
};

export default Cookies;
