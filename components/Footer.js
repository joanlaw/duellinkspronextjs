import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
//import { Link } from 'react-router-dom'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Script from 'next/script';

// import the icons you need
/*import {
    faSearch,
    faAmbulance,
    faAnchor,
    faBell,
    faFacebook
  } from "@fortawesome/free-solid-svg-icons";
  
*/
//import "./footer.css";

function Footer() {
  return (

<>
<Head>

  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet" />

</Head>
<Script src="https://kit.fontawesome.com/84fb9c4e8e.js" crossorigin="anonymous" />
            <footer className='pie-pagina'>
        <div className='grupo-1'>
            <div className='box'>
                <figure>
                    <Link href={""} >
                  <a><img src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1665785399/iconos%20dlp/ico-d12_h2qmkg.png" alt="Logo Duel Links Pro" /></a>
                    </Link>
                </figure>
            </div>
            <div className='box redesfooter '>
                <h2>PÁGINAS LOCALES</h2>
                <Link href="/agregar" ><a>AGREGAR CARTA</a></Link>
                <br />
                <Link href="/crear-deck" ><a>CREAR DECK</a></Link>
                <p>CONTACTO</p>
            </div>
            <div className='box'>
                <h2>SÍGUENOS</h2>
                <div className='red-social redesfooter'>
                    <a href="https://www.facebook.com/profile.php?id=100087752888287" className='fa fa-facebook' target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://www.youtube.com/channel/UCSzOZtjYoPgHr82A38TGCTw" className='fa fa-youtube' target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://discord.gg/vfB636u" className='fa-brands fa-discord' target="_blank" rel="noopener noreferrer"></a>
                    <a href="#" className='fa fa-instagram' ></a>
                    
                    

                </div>
            </div>
        </div>
        <div className='grupo-2'>
            <small>&copy; 2022 <b>Duel Links Pro</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
    </>
  )
}

export default Footer