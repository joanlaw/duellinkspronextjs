import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../../contexts/UserContext";

function AdminTournamentPage() {
  const router = useRouter();
  const { id } = router.query; // Obtener el ID del torneo de los parámetros de la URL
  const { discordId, authenticated } = useUser();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (authenticated && id) {
      fetch(`https://api.duellinks.pro/leagues/${id}/players`, {
        headers: {
          // Aquí puedes agregar headers si son necesarios para la consulta
        }
      })
      .then(res => res.json())
      .then(data => {
        setPlayers(data || []);
      })
      .catch(err => console.error("Error al recuperar los jugadores:", err));
    }
  }, [id, authenticated]);

  return (
    <div className="container mx-auto mt-10 mb-10 p-6 rounded-md shadow-sm" style={{ backgroundColor: '#27272a' }}>
      <h2 className="text-2xl font-bold mb-4 text-white">Lista de Jugadores Inscritos</h2>
      {players.map(player => (
        <div key={player._id} className="bg-white p-4 rounded-md mb-4 shadow-md text-black">
          <h3 className="text-xl font-medium mb-2">{player.username}</h3>
          {/* Aquí puedes mostrar más detalles del jugador si lo deseas */}
        </div>
      ))}
    </div>
  );
}

export default AdminTournamentPage;
