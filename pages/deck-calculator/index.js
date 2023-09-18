import React from 'react'
import NavbarCustom from '../../components/NavbarCustom'
import FooterCustom from '../../components/FooterCustom'
import DeckCalculator from '../../components/DeckCalculator'

function index() {
  return (
    <>
    <NavbarCustom />
    <div className='flex flex-col min-h-screen'>
     <div className='container mx-auto'>
        <DeckCalculator />
        </div>
    </div>
    <FooterCustom />
    </>
  )
}

export default index