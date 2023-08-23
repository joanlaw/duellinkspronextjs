import React, { useState, useEffect } from 'react';

function TournamentAdminPanel({ onClose, leagueId }) {
  const [players, setPlayers] = useState([]);
  const [playerDecks, setPlayerDecks] = useState({});
  const [loading, setLoading] = useState(true);
  const [visibleDeckId, setVisibleDeckId] = useState(null); // Nuevo estado para el ID del mazo visible

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
    fetch(`https://api.duellinks.pro/leagues/${leagueId}/players/${playerId}/decks`)
      .then((res) => res.json())
      .then((data) => {
        setPlayerDecks((prevState) => ({
          ...prevState,
          [playerId]: data,
        }));
        setVisibleDeckId(playerId); // Establecer este mazo como el mazo visible
      })
      .catch((err) => {
        console.error('Error al recuperar los mazos del jugador:', err);
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
                {playerDecks[player._id] && visibleDeckId === player._id && (
                  <div>
                    <h3>Main Deck</h3>
                    <img src={playerDecks[player._id].main_deck.url} alt="Main Deck" />
                    <h3>Extra Deck</h3>
                    <img src={playerDecks[player._id].extra_deck.url} alt="Extra Deck" />
                    <h3>Side Deck</h3>
                    <img src={playerDecks[player._id].side_deck.url} alt="Side Deck" />
                    <h3>Especial Deck</h3>
                    <img src={playerDecks[player._id].especial_deck.url} alt="Especial Deck" />
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
