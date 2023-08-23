import React, { useState, useEffect } from 'react';

function MatchupsPanel({ leagueId }) {
  const [tournamentStatus, setTournamentStatus] = useState('open'); // Estado inicial del torneo
  const [currentRound, setCurrentRound] = useState(1); // Ronda actual del torneo
  const [matches, setMatches] = useState([]); // Emparejamientos de la ronda actual

  useEffect(() => {
    // Cargar información del torneo y emparejamientos de la ronda actual (puedes ajustar los llamados a la API según tus necesidades)
    fetch(`https://api.duellinks.pro/leagues/${leagueId}`)
      .then((res) => res.json())
      .then((data) => {
        setTournamentStatus(data.status);
        const currentRoundIndex = data.rounds.length - 1;
        setCurrentRound(currentRoundIndex + 1);
        setMatches(data.rounds[currentRoundIndex].matches);
      })
      .catch((err) => {
        console.error('Error al cargar la información del torneo:', err);
      });
  }, [leagueId]);

  const handleStartTournament = () => {
    // Lógica para iniciar el torneo
    fetch(`https://api.duellinks.pro/leagues/${leagueId}/start-tournament`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Actualiza el estado del torneo
        setTournamentStatus(data.status);
      })
      .catch((err) => {
        console.error('Error al iniciar el torneo:', err);
      });
  };

  const handleStartNextRound = () => {
    // Lógica para iniciar la siguiente ronda
    fetch(`https://api.duellinks.pro/leagues/${leagueId}/start-next-round`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Actualiza el estado del torneo y la ronda actual
        setTournamentStatus(data.league.status);
        const currentRoundIndex = data.league.rounds.length - 1;
        setCurrentRound(currentRoundIndex + 1);
        setMatches(data.league.rounds[currentRoundIndex].matches);
      })
      .catch((err) => {
        console.error('Error al iniciar la siguiente ronda:', err);
      });
  };

  return (
<div className="container mx-auto p-4">
  <h2 className="text-2xl font-bold mb-4">Panel de Emparejamientos</h2>
  <div className="bg-white p-4 rounded shadow">
    <p className="mb-2">
      Estado del Torneo: <span className="font-semibold">{tournamentStatus}</span>
    </p>
    <p className="mb-4">
      Ronda Actual: <span className="font-semibold">{currentRound}</span>
    </p>
    {tournamentStatus === 'open' && (
      <button
        onClick={handleStartTournament}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Iniciar Torneo
      </button>
    )}
    {tournamentStatus === 'in_progress' && (
      <button
        onClick={handleStartNextRound}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Iniciar Siguiente Ronda
      </button>
    )}
  </div>
  <div className="mt-6">
    <h3 className="text-xl font-bold mb-2">
      Emparejamientos de la Ronda {currentRound}
    </h3>
    <div className="bg-gray-100 p-4 rounded shadow">
      {/* Renderiza los emparejamientos aquí */}
    </div>
  </div>
</div>
  );
}

export default MatchupsPanel;
