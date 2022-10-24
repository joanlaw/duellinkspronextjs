import React from 'react'
import { Link } from 'react-router-dom'
import Clustersmeta from './Clustersmeta'
import Footer from './Footer'
import Header from './Header'




const Decksmeta = () => {
  return (
    <div>
        <Header />
        <h1 className='h1margen'>Tier List</h1>
        <br />
        <Clustersmeta />
        <br />
        <Footer />
    </div>
  )
}

export default Decksmeta