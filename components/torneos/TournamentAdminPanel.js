import React, { useState, useEffect } from 'react';

function TournamentAdminPanel({ onClose, leagueId }) {
  const [players, setPlayers] = useState([]);
  const [playerDecks, setPlayerDecks] = useState({});
  const [visibleDeckId, setVisibleDeckId] = useState(null);
  const [loading, setLoading] = useState(true);


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


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white p-6 rounded-md shadow-lg text-black">
        <h2 className="text-xl font-semibold mb-4">Jugadores inscritos en el torneo</h2>
        {loading ? (
          <p>Cargando jugadores...</p>
        ) : (
          <ul className="list-disc pl-6">
            {players.map((player) => (
              <li key={player._id}>
                {player.username}
                <button onClick={() => fetchPlayerDeck(player._id)}>Ver mazos</button>
                {playerDecks[player._id] && visibleDeckId === player._id && (
                  <div>
                    {["main_deck", "extra_deck", "side_deck", "especial_deck"].map((deckType) => (
                      <div key={deckType}>
                        <h3>{deckType.replace("_", " ").toUpperCase()}</h3>
                        {getImagePreview(deckType, player._id) && (
                          <img
                            src={getImagePreview(deckType, player._id)}
                            alt={`${deckType} Preview`}
                            className="mb-2 w-1/4 h-auto"
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
        <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default TournamentAdminPanel;
