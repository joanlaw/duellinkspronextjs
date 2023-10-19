import React, { useState } from 'react';
import axios from 'axios';
import { Avatar, Card, Textarea, Badge, Button, Tooltip } from '@nextui-org/react';
import NavbarCustom from "../NavbarCustom"
import FooterCustom from "../FooterCustom"
import UserDecks from './UserDecks';
import YouTubeVideo from './YouTubeVideo ';
import { useUser } from '../../contexts/UserContext'; // Asegúrate de tener el path correcto

const UserPanel = ({ username, avatar, puntos, handleLogout }) => {
  const { userId, ID_DL, clanId } = useUser();
  const [idDL, setIdDL] = useState('');  // Estado para ID_DL.
  const [idDuelista, setIdDuelista] = useState(''); // Estado para almacenar el ID Duelista después de actualizarlo.
  const [success, setSuccess] = useState(false);  // Nuevo estado para manejar el éxito
  


  const handleIdDLChange = (e) => {
    setIdDL(e.target.value);
  };

  const handleIdDLSubmit = () => {
    axios.post('https://api.duellinks.pro/update-id-dl', { _id: userId, ID_DL: idDL })
      .then(response => {
        console.log('ID_DL actualizado:', response.data);
        setIdDuelista(idDL);  // Actualiza el ID Duelista en el frontend.
        setSuccess(true);  // Set success to true on successful operation

        // Refrescar la página
        window.location.reload();
      })
      .catch(error => {
        console.error('Error actualizando el ID_DL:', error);
      });
  };


  const copyToClipboard = () => {
    navigator.clipboard.writeText(userId)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };



  
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
  {/*    <p className="text-white text-center lg:text-left">
        <strong>$: 0</strong>
      </p>  */}
            <p className="text-white text-center lg:text-left">
        <strong>Torneos ganados: 0</strong>
      </p>
      <p className="text-white text-center lg:text-left">
        <strong>Id:</strong> {userId}
        <Tooltip content="Copiar Id" placement="top">
          <Button auto size="mini" onClick={copyToClipboard}>
            Copiar
          </Button>
        </Tooltip>
      </p>
      <p className="text-white text-center lg:text-left">
  <strong>Clan:</strong> {clanId ? `Perteneces al clan con ID: ${clanId}` : 'No perteneces a ningún clan'}
</p>

  {/*    <p className="text-white text-center lg:text-left">
  <strong>ID Duelista:</strong> {ID_DL || 'No has establecido tu ID_DL'}
</p>


{!ID_DL && (
        <>
          <Textarea
            value={idDL}
            onChange={handleIdDLChange}
            placeholder="Introduce tu ID_DL aquí"
            className="mt-4"
          />
          <Button onClick={handleIdDLSubmit} className="mt-4">Actualizar ID_DL</Button>
        </>
      )}
      {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
            <strong className="font-bold">¡Éxito!</strong>
            <span className="block sm:inline"> ID_DL ha sido actualizado exitosamente.</span>
          </div>
        )}  */}
      <a href="https://discord.gg/vfB636u" target="_blank" rel="nofollow noopener noreferrer">
        <Button color="primary" className="mt-4">
          Discord
        </Button>
      </a>
      <Button color="danger" onClick={handleLogout} className="mt-4">
        Logout
      </Button>
      <p className="text-white text-center lg:text-left mt-4">
        <strong>Tutorial para torneos</strong>
      </p>
      <div className="mt-2 w-full">
        <YouTubeVideo videoId="0H3ptUETR0k" />
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
