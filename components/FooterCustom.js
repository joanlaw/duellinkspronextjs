import React from 'react';
import Link from 'next/link';

const FooterCustom = () => {
  return (
    <footer className="p-6 border-t mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Sección Reservada para la Imagen */}
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663790223/iconos%20dlp/IEV-77ba511log-dk_ue219k.png" 
            alt="Descripción de la Imagen" 
           
          />
        </div>
        
        {/* Sección de Enlaces Centrados */}
        <div className="flex flex-col space-y-2 items-center">
          <Link href="/contacto">
            <p className="hover:underline">Contacto</p>
          </Link>
          <Link href="/politica-de-privacidad">
            <p className="hover:underline">Política de Privacidad</p>
          </Link>
          <Link href="/politica-de-cookies">
            <p className="hover:underline">Política de Cookies</p>
          </Link>
          <Link href="/panel">
            <p className="hover:underline">Panel Adicional</p>
          </Link>
        </div>
        
        {/* Sección de Iconos a la Derecha */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100087752888287" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCSzOZtjYoPgHr82A38TGCTw" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-lg"></i>
          </a>
          <a href="https://discord.gg/vfB636u" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterCustom;
