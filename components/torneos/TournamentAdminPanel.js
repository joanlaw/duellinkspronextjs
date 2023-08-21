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
    <div className="popup">
      <h2>Jugadores inscritos en el torneo</h2>
      {loading ? (
        <p>Cargando jugadores...</p>
      ) : (
        <ul>
          {players.map(player => (
            <li key={player._id}>{player.username}</li>
          ))}
        </ul>
      )}
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default TournamentAdminPanel;
