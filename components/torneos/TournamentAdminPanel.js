import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function TournamentAdminPanel({ onClose, leagueId }) {
  const [players, setPlayers] = useState([]);
  const [playerDecks, setPlayerDecks] = useState({});
  const [visibleDeckId, setVisibleDeckId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enlargedImage, setEnlargedImage] = useState(null);


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


  return (
<>
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 overflow-y-auto">
    <div className="bg-white p-6 w-4/5 max-w-4xl h-auto max-h-[80vh] overflow-y-auto rounded-md shadow-lg text-black">
      <h2 className="text-xl font-semibold mb-4">Jugadores inscritos en el torneo</h2>
      {loading ? (
        <p>Cargando jugadores...</p>
      ) : (
        <ul className="list-disc pl-6">
          {players.map((player) => (
            <li key={player._id}>
              {player.username}
              <button onClick={() => fetchPlayerDeck(player._id, player.discordId)}>Ver mazos</button>
              {playerDecks[player._id] && visibleDeckId === player._id && (
                <div>
                  {["main_deck", "extra_deck", "side_deck", "especial_deck"].map((deckType) => (
                    <div key={deckType} className="mb-4">
                      <h3 className="block mb-2">{deckType.replace("_", " ").toUpperCase()}</h3>
                      {getImagePreview(deckType, player._id) && (
                        <img
                          src={getImagePreview(deckType, player._id)}
                          alt={`${deckType} Preview`}
                          className="mb-2 w-1/4 h-auto cursor-pointer"
                          onClick={() => handleImageClick(getImagePreview(deckType, player._id))}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      <button
        className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        onClick={onClose}
      >
        Cerrar
      </button>
      {/* Agrega el botón de Iniciar Torneo aquí */}
      <Link href={`/moderacion/${leagueId}/matchups`} passHref>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Iniciar Torneo
        </button>
      </Link>
    </div>
  </div>

  {enlargedImage && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75" onClick={closeEnlargedImage}>
      <img src={enlargedImage} alt="Enlarged" />
    </div>
  )}
</>
  );
}

export default TournamentAdminPanel;
