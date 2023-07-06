import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

function ARTICULOS() {
  return (
    <div>
        <Header />
        <h1>Artículos</h1>

        <Link href="/articulos/orcust">
            <div>
                <h3>Orcust</h3>
            </div>
            </Link>
        <Footer />
    </div>
  )
}

export default ARTICULOS