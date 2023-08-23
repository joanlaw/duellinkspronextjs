import React, { useState, useEffect } from 'react';

function TournamentAdminPanel({ onClose, leagueId }) {
  const [players, setPlayers] = useState([]);
  const [playerDecks, setPlayerDecks] = useState({});
  const [loading, setLoading] = useState(true);
  const [visibleDeckId, setVisibleDeckId] = useState(null); // Nuevo estado para el ID del mazo visible
  const [playerErrors, setPlayerErrors] = useState({});

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

  const fetchPlayerDeck = (playerId) => {
    // Establecer el estado de carga para este jugador específico
    setPlayerDecks((prevState) => ({
      ...prevState,
      [playerId]: { loading: true },
    }));
  
    fetch(`https://api.duellinks.pro/leagues/${leagueId}/playerdecks?discordId=${playerId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo recuperar el mazo");
        }
        return res.json();
      })
      .then((data) => {
        setPlayerDecks((prevState) => ({
          ...prevState,
          [playerId]: { data, loading: false },
        }));
        setVisibleDeckId(playerId);
        // Limpiar errores si existen
        setPlayerErrors((prevState) => ({
          ...prevState,
          [playerId]: null,
        }));
      })
      .catch((err) => {
        console.error('Error al recuperar los mazos del jugador:', err);
        setPlayerDecks((prevState) => ({
          ...prevState,
          [playerId]: { loading: false },
        }));
        // Actualizar el estado de error para este jugador específico
        setPlayerErrors((prevState) => ({
          ...prevState,
          [playerId]: err.message,
        }));
      });
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
              {playerDecks[player._id]?.loading && <span>Cargando mazos...</span>}
              {playerErrors[player._id] && <span>Error: {playerErrors[player._id]}</span>}
              {playerDecks[player._id]?.data && visibleDeckId === player._id && (
                <div>
                  <h3>Main Deck</h3>
                  <img src={playerDecks[player._id].data.main_deck.url} alt="Main Deck" />
                  <h3>Extra Deck</h3>
                  <img src={playerDecks[player._id].data.extra_deck.url} alt="Extra Deck" />
                  <h3>Side Deck</h3>
                  <img src={playerDecks[player._id].data.side_deck.url} alt="Side Deck" />
                  <h3>Especial Deck</h3>
                  <img src={playerDecks[player._id].data.especial_deck.url} alt="Especial Deck" />
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
