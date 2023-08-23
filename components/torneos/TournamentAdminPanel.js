import React, { useState, useEffect } from "react";

function TournamentAdminPanel({ onClose, leagueId }) {
  const [players, setPlayers] = useState([]);
  const [playerDecks, setPlayerDecks] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.duellinks.pro/leagues/${leagueId}/players-decks`)
      .then(res => res.json())
      .then(data => {
        setPlayers(data.players);
        setPlayerDecks(
          data.playerDecks.reduce((acc, deck) => {
            acc[deck.user] = deck;
            return acc;
          }, {})
        );
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al recuperar los jugadores y mazos:", err);
        setLoading(false);
      });
  }, [leagueId]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white p-6 rounded-md shadow-lg text-black">
        <h2 className="text-xl font-semibold mb-4">Jugadores inscritos en el torneo</h2>
        {loading ? (
          <p>Cargando jugadores...</p>
        ) : (
          <ul className="list-disc pl-6">
            {players.map(player => (
              <li key={player._id}>
                {player.username}
                {playerDecks[player._id] && (
                  <div>
                    <button onClick={() => /* Mostrar o esconder los detalles del mazo */}>
                      Ver mazos
                    </button>
                    <div>
                      {/* Aquí puedes usar el código para mostrar las imágenes o detalles del mazo */}
                      {/* Ejemplo: playerDecks[player._id].main_deck.url */}
                    </div>
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
      </div>
    </div>
  );
}

export default TournamentAdminPanel;
