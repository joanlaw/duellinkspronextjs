import React from 'react'

import Header from '../../components/Header'
import PrivacyPolicy from '../../components/PrivacyPolicy '
import Footer from '../../components/Footer'
import NavbarCustom from '../../components/NavbarCustom'

function Privacy() {
  return (
    <>
    <NavbarCustom />
    <div className='container mx-auto px-4 mt-10'>

    <PrivacyPolicy />
  </div>
  <Footer />
  </>
  )
}

export default Privacy