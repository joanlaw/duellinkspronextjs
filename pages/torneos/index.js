import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function torneos() {

    //HOOKS - CAPTURA ESTADOS
    
    const [torneos, setTorneos] = useState ([])


  return (
    <>
    <Header />
        <div className='container'>
            <br />
            <h1>Torneos</h1>
      {torneos.length === 0 ? (
        <p>PRONTO TENDREMOS REPORTES DE TORNEOS DISPONIBLES GRACIAS POR VISITAR NUESTRA WEB.</p>
      ) : (
        torneos.map((torneo) => (
          <div key={torneo.id}>
            <h2>{torneo.nombre}</h2>
            <p>{torneo.descripcion}</p>
            {/* Agrega más información del torneo aquí */}
          </div>
        ))
      )}
      <br />
      <br />
      <br />
    </div>
    <Footer />
    </>
  )
}
