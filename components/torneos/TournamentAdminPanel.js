import React, { useState, useEffect } from "react";

function TournamentAdminPanel({ onClose, leagueId }) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.duellinks.pro/leagues/${leagueId}/players`)
      .then(res => res.json())
      .then(data => {
        setPlayers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al recuperar los jugadores inscritos:", err);
        setLoading(false);
      });
  }, [leagueId]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Jugadores inscritos en el torneo</h2>
        {loading ? (
          <p>Cargando jugadores...</p>
        ) : (
          <ul className="list-disc pl-6">
            {players.map(player => (
              <li key={player._id}>{player.username}</li>
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
