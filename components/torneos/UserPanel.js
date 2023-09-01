import React from 'react';
import { Avatar, Card, Textarea, Badge, Button } from '@nextui-org/react';
import NavbarCustom from "../NavbarCustom"
import FooterCustom from "../FooterCustom"
import UserDecks from './UserDecks';
import YouTubeVideo from './YouTubeVideo ';

const UserPanel = ({ username, avatar, puntos, handleLogout  }) => {
  return (
    <>
<div className="flex flex-col min-h-screen">
  <NavbarCustom />
  <Card className="flex flex-col lg:flex-row p-4 bg-dark">
    {/* Sección de información del usuario */}
    <div className="flex flex-col items-center lg:items-start lg:w-2/5 lg:pr-4">
      <Avatar
        src={avatar}
        alt={username}
        size="lg"
        className="w-40 h-40 mb-4 lg:mb-0 lg:mr-4"
      />
      <p className="text-white text-center lg:text-left">
        <strong>Usuario:</strong> {username}
      </p>
      <p className="text-white text-center lg:text-left">
        <strong>Puntos:</strong> {puntos}
      </p>
      <p className="text-white text-center lg:text-left">
        <strong>$: 0</strong>
      </p>
      <p className="text-white text-center lg:text-left">
        <strong>Torneos ganados: 0</strong>
      </p>
      <a href="https://chat.whatsapp.com/GP3mBjmtzR90ZGJS3awl74" target="_blank" rel="nofollow noopener noreferrer">
        <Button color="warning" className="mt-4">
          Ayuda
        </Button>
      </a>
      <Button color="danger" onClick={handleLogout} className="mt-4">
        Logout
      </Button>
      <p className="text-white text-center lg:text-left mt-4">
        <strong>Tutorial para torneos</strong>
      </p>
      <div className="mt-2 w-full">
        <YouTubeVideo videoId="RManmwMRt4c" />
      </div>
    </div>

    {/* Separador vertical solo visible en pantallas grandes */}
    <div className="hidden lg:block border-r border-gray-600 h-full mx-4"></div>

    {/* Sección para "Decks" */}
    <div className="flex flex-col items-center lg:items-start lg:w-3/5 lg:pl-4">
      <p className="text-white text-center lg:text-left mt-4">
        <strong>Tus decks</strong>
      </p>
      <div className="w-full h-full rounded-lg mt-2 flex items-center justify-center overflow-y-auto">
        <UserDecks />
      </div>
    </div>
  </Card>
  <FooterCustom />
</div>

</>
  );
};

export default UserPanel;