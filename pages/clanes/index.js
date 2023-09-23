import React from 'react'
import ClanList from '../../components/clanes/ClanList'
import NavbarCustom from '../../components/NavbarCustom'
import FooterCustom from '../../components/FooterCustom'

function Index() {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavbarCustom />
        <div className='container mx-auto p-4'>
        <ClanList />
        </div>
      <FooterCustom />  
    </div>
  )
}

export default Index