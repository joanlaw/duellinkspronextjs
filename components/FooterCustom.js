import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

const FooterCustom = () => {
  return (
    <>
    <Head>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      rel="stylesheet"
    />
  </Head>
  <Script src="https://kit.fontawesome.com/84fb9c4e8e.js" crossorigin="anonymous" />
    <footer className="p-6 border-t mt-auto">
    <div className="container mx-auto">
      
      {/* Contenido Principal */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        {/* Sección Reservada para la Imagen */}
        <div className="flex items-center mb-2 md:mb-0">
          <img 
            src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663790223/iconos%20dlp/IEV-77ba511log-dk_ue219k.png" 
            alt="Descripción de la Imagen" 

          />
        </div>
        
        {/* Sección de Enlaces */}
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4 md:items-center">
          <Link href="/contacto">
            <i className="hover:underline">Contacto</i>
          </Link>
          <Link href="/politica-de-privacidad">
            <i className="hover:underline">Política de Privacidad</i>
          </Link>
          <Link href="/politica-de-cookies">
            <i className="hover:underline">Política de Cookies</i>
          </Link>
      {/*  <a href="https://panel.duellinks.pro/" target="_blank" rel="noopener noreferrer">
            <i className="hover:underline">Panel</i>
          </a>  */}  
        </div>
        
        {/* Sección de Iconos a la Derecha */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100087752888287" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook fa-lg"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCSzOZtjYoPgHr82A38TGCTw" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-lg"></i>
          </a>
          <a href="https://discord.gg/vfB636u" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-discord fa-lg"></i>
          </a>
        </div>
      </div>
      
      {/* Leyenda Inferior Centrada */}
      <div className="text-center">
        © 2023 Duel Links Pro - Todos los Derechos Reservados.
      </div>
    </div>
  </footer>
  </>
  );
};

export default FooterCustom;
