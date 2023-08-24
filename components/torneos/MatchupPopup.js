import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MatchupPopup({ matches = [], onClose }) {
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    const playerIds = matches.flatMap(match => [match.player1, match.player2]).join(",");
    axios.get(`https://api.duellinks.pro/users?ids=${playerIds}`)
      .then(response => {
        setPlayersData(response.data);
      })
      .catch(error => {
        console.error("Error fetching player data:", error);
      });
  }, [matches]);

  const getPlayerName = (id) => {
    const player = playersData.find(player => player._id === id);
    return player ? player.username : 'Desconocido';
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
      <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 text-black">
        <h2 className="text-2xl mb-4">Emparejamientos de la Ronda Actual</h2>
        <ul className="list-decimal list-inside">
          {matches.map((match, index) => (
            <li key={index} className="mb-2">
              {getPlayerName(match.player1)} vs {match.player2 ? getPlayerName(match.player2) : 'BYE'}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-4 p-2 bg-red-500 text-white rounded-full">
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default MatchupPopup;
