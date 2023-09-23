import React from 'react'
import NavbarCustom from '../../components/NavbarCustom'
import FooterCustom from '../../components/FooterCustom'
import DeckCalculator from '../../components/DeckCalculator'

function index() {
  return (
<>
  <NavbarCustom />
  <h1 className="text-3xl font-extrabold my-4 text-center">Calculadora DLP</h1>

<p className="container mx-auto">
  ¡Bienvenidos a la <strong>Calculadora DLP!</strong> Para Yu-Gi-Oh! DUEL LINKS, esta herramienta ha sido diseñada para ofrecerles una experiencia <strong>sencilla y amigable,</strong> permitiéndoles calcular de forma rápida y precisa el costo en gemas y dinero de sus decks favoritos.
</p>
<p className="container mx-auto">
  Nuestro objetivo es proporcionarles información clara y precisa para ayudarles a planificar mejor y disfrutar al máximo de su experiencia de juego. ¡Esperamos que encuentren útil nuestra calculadora!
</p>

<div className="container mx-auto my-4 p-4 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-700">
  <p className="font-medium">
    <i className="fas fa-info-circle mr-2"></i>
    La Calculadora DLP está actualmente en fase de pruebas. Puede que algunas funciones aún no estén disponibles. ¡Gracias por su comprensión y paciencia!
  </p>
</div>

  
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