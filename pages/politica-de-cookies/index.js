import React from 'react';
import CookiesPolicy from '../../components/CookiesPolicy';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import NavbarCustom from '../../components/NavbarCustom';

const Cookies = () => {
  return (
    <>
    <NavbarCustom />
    <div className='container mx-auto px-4 mt-10'>
      <CookiesPolicy />
    </div>
    <Footer />
    </>
  );
};

export default Cookies;
