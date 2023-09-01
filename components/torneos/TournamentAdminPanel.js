import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Spinner,
} from '@nextui-org/react';

import { EyeIcon } from '../nextuiicons/EyeIcon';
import { DeleteIcon } from '../nextuiicons/DeleteIcon';

function TournamentAdminPanel({ onClose, leagueId }) {
  const [players, setPlayers] = useState([]);
  const [playerDecks, setPlayerDecks] = useState({});
  const [visibleDeckId, setVisibleDeckId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const [page, setPage] = useState(1);
  const rowsPerPage = 150; // You can adjust this value
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  
  const toggleImageSize = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };


  useEffect(() => {
    // Cargar jugadores (puedes ajustar este llamado a la API según tus necesidades)
    fetch(`https://api.duellinks.pro/leagues/${leagueId}/players`)
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al recuperar los jugadores inscritos:', err);
        setLoading(false);
      });
  }, [leagueId]);
  

  const fetchPlayerDeck = async (playerId, discordId) => {
    try {
      const response = await fetch(
        `https://api.duellinks.pro/leagues/${leagueId}/playerdecks?discordId=${discordId}` // Usar discordId aquí
      );
      if (response.ok) {
        const data = await response.json();
        setPlayerDecks((prevDecks) => ({
          ...prevDecks,
          [playerId]: data,
        }));
        setVisibleDeckId(playerId);
      } else {
        console.error('Error al recuperar los mazos del jugador:', response.statusText);
      }
    } catch (error) {
      console.error('Error al recuperar los mazos del jugador:', error);
    }
  };

  const getImagePreview = (deckType, playerId) => {
    const currentDeck = playerDecks[playerId];
    if (currentDeck && currentDeck[deckType] && currentDeck[deckType].url) {
      return currentDeck[deckType].url;
    }
    return null;
  };

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const pages = Math.ceil(players.length / rowsPerPage);

  const items = players.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const disqualifyPlayer = (playerId) => {
    // Implementa la lógica para descalificar a un jugador aquí
  };

  const renderDeckImage = (playerId, deckType) => (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <Button size="mini" color="primary" variant="bordered">
          Ver {deckType.replace("_", " ").toUpperCase()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={isImageEnlarged ? "w-[480px]" : "w-[240px]"}>
        <img
          src={getImagePreview(deckType, playerId)}
          alt={`${deckType} Preview`}
          className="w-full h-auto cursor-pointer"
          onClick={toggleImageSize}
          style={{maxHeight: isImageEnlarged ? '480px' : '240px'}}
        />
      </PopoverContent>
    </Popover>
  );


  return (
    <>
<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 overflow-y-auto">
        <div className="bg-white p-6 w-4/5 max-w-4xl h-auto max-h-[80vh] overflow-y-auto rounded-md shadow-lg">
        <h2 className="text-xl font-extrabold mb-4 text-black text-center">
  Jugadores inscritos en el torneo
</h2>

          <div className="max-h-[520px] overflow-y-scroll"> 
          <Table>
            <TableHeader>
              <TableColumn>Nombre de Usuario</TableColumn>
              <TableColumn>Acciones</TableColumn>
            </TableHeader>
            <TableBody>
  {loading ? (
    <TableRow>
                    <TableCell colSpan={2}>
                <Spinner label="Cargando..." />
              </TableCell> {/* Aquí se ha corregido */}
    </TableRow>
  ) : (
    items.map((player) => (
      <TableRow key={player._id}>
      <TableCell>{player.username}</TableCell>
      <TableCell>
        <Button size="mini" color="primary" onClick={() => fetchPlayerDeck(player._id, player.discordId)}>
          Ver mazos
        </Button>
        {playerDecks[player._id] && visibleDeckId === player._id && (
          <div className="flex space-x-2">
            {["main_deck", "extra_deck", "side_deck", "especial_deck"].map((deckType) => (
              renderDeckImage(player._id, deckType)
            ))}
          </div>
        )}
        <Button size="mini" color="danger" variant="bordered" onClick={() => disqualifyPlayer(player._id)}>
          Descalificar
        </Button>
      </TableCell>
    </TableRow>
    ))
  )}
</TableBody>

          </Table>
         
          </div>
         

          <Button color="danger" size="large" className="mt-4" onClick={onClose}>Cerrar</Button>
        </div>
      </div>
      {/* ... (tu lógica para mostrar la imagen ampliada, si es necesario) */}
    </>
  );
}

export default TournamentAdminPanel;
