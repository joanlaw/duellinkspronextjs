import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext'; // Importa el contexto del usuario

const UserMatches = ({ leagueId, onClose }) => {
  const { discordId } = useUser(); // Usa useUser para obtener discordId
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.duellinks.pro/leagues/${leagueId}/players/${discordId}/matches`);
        const matchesWithUsernames = await fetchUsernamesForMatches(response.data);
        setMatches(matchesWithUsernames);
      } catch (error) {
        console.error('Hubo un problema al cargar los partidos:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchUsernamesForMatches = async (matchesData) => {
      const playerIds = matchesData.flatMap(match => [match.match.player1, match.match.player2]);
      const usersResponse = await axios.get(`https://api.duellinks.pro/users?ids=${playerIds.join(',')}`);
      const usersMap = Object.fromEntries(usersResponse.data.map(user => [user._id, user]));

      return matchesData.map(matchInfo => ({
        ...matchInfo,
        player1Username: usersMap[matchInfo.match.player1] ? usersMap[matchInfo.match.player1].username : "",
        player2Username: usersMap[matchInfo.match.player2] ? usersMap[matchInfo.match.player2].username : ""
      }));
    };

    fetchMatches();
  }, [leagueId, discordId]);

  const groupMatchesByRound = () => {
    const groupedMatches = {};
    matches.forEach(matchInfo => {
      const roundId = matchInfo.match.roundId;
      if (!groupedMatches[roundId]) {
        groupedMatches[roundId] = [];
      }
      groupedMatches[roundId].push(matchInfo);
    });
    return groupedMatches;
  };

  const calculateMatchResult = (match) => {
    if (!match || !match.match || !match.match.scores) {
      return "Información de partido no disponible";
    }
    const player1Score = match.match.scores.player1;
    const player2Score = match.match.scores.player2;
    if (player1Score === null || player2Score === null) {
      return "Puntuación no disponible";
    }
    if (player1Score > player2Score) {
      return `${match.player1Username} ganó`;
    } else if (player2Score > player1Score) {
      return `${match.player2Username} ganó`;
    } else {
      return "Empate";
    }
  };
  const renderMatchesByRound = () => {
    const groupedMatches = groupMatchesByRound();
    return Object.entries(groupedMatches).map(([roundId, matchesInRound], index) => (
      <div key={index}>
        <h3 className="text-xl font-semibold mb-2 text-black">Rondas</h3>
        {matchesInRound.map((matchInfo, matchIndex) => (
          <div key={matchIndex} className="mb-4 border rounded-lg p-4 text-black">
            <p className="text-lg font-semibold">
              {matchInfo.player1Username || "Jugador 1 desconocido"} vs {matchInfo.player2Username || "Jugador 2 desconocido"}
            </p>
            <p className="text-sm">
              Marcador: {(matchInfo.match?.scores?.player1 ?? "N/A")} - {(matchInfo.match?.scores?.player2 ?? "N/A")}
            </p>
            <p className="text-sm">
              Resultado: {calculateMatchResult(matchInfo)}
            </p>
            {/* Agrega aquí la lógica para abrir el chat si es necesario */}
          </div>
        ))}
      </div>
    ));
  };
  
  

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
      <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg">
        <h2 className="text-2xl mb-6 text-black">Historial de duelos</h2>
        {renderMatchesByRound()}
        <button onClick={onClose} className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default UserMatches;
