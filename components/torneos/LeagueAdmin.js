import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../../contexts/UserContext";

function LeagueAdmin() {
  const router = useRouter();
  const { id } = router.query;

  // Aquí deberías realizar una solicitud para obtener la lista de jugadores inscritos en el torneo específico
  // y mostrarlos en el componente
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`/api/leagues/${id}/players`, {
        headers: {
          // Agrega headers si son necesarios para la consulta
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPlayers(data);
        })
        .catch((err) =>
          console.error("Error al recuperar los jugadores:", err)
        );
    }
  }, [id]);

  return (
    <div className="container mx-auto mt-10 mb-10 p-6 rounded-md shadow-sm" style={{ backgroundColor: '#27272a' }}>
      <h2 className="text-2xl font-bold mb-4 text-white">Administrar torneo</h2>
      {/* Mostrar la lista de jugadores inscritos en el torneo */}
      {players.map((player) => (
        <div key={player._id} className="bg-white p-4 rounded-md mb-4 shadow-md text-black">
          <h3 className="text-xl font-medium mb-2">{player.username}</h3>
          {/* Mostrar más información del jugador si es necesario */}
        </div>
      ))}
    </div>
  );
}

export default LeagueAdmin;
