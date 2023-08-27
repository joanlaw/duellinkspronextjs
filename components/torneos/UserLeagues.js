import React, { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext"; 
import TournamentAdminPanel from "./TournamentAdminPanel";
import axios from "axios";
import MatchupPopup from "./MatchupPopup";

function UserLeagues() {
  const { discordId, authenticated } = useUser();
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState({ leagueId: null, currentRound: null, matchId: null });
  const [allRounds, setAllRounds] = useState({});  // Nueva variable de estado para todas las rondas

  const [showMatchupPopup, setShowMatchupPopup] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  useEffect(() => {
    if (authenticated) {
      fetch(`https://api.duellinks.pro/leagues/organizer/${discordId}`)
        .then(res => res.json())
        .then(data => {
          setLeagues(data || []);
        })
        .catch(err => console.error("Error al recuperar las ligas:", err));
    }
  }, [discordId, authenticated]);

  const updateLeagues = async () => {
    try {
      const res = await axios.get(`https://api.duellinks.pro/leagues/organizer/${discordId}`);
      setLeagues(res.data || []);
    } catch (error) {
      console.error("Error al actualizar las ligas:", error);
    }
  };

  const startTournament = async (leagueId, leagueStatus) => {
    try {
      const response = await axios.post(`https://api.duellinks.pro/leagues/${leagueId}/start-tournament`);
      updateLeagues();
  
      setAllRounds({
        ...allRounds,
        [leagueId]: response.data.rounds,
      });
  
    } catch (error) {
      console.error("Error al iniciar el torneo:", error);
    }
  };

  const showMatchups = async (leagueId, currentRound, matchId) => {
    try {
      const response = await axios.get(`https://api.duellinks.pro/leagues/${leagueId}/rounds/${currentRound}/matches`);
      const matches = response.data || [];
      
      const playerIds = [...new Set(matches.flatMap(match => [match.player1, match.player2]))];
      const usersResponse = await axios.get(`https://api.duellinks.pro/users?ids=${playerIds.join(',')}`);
      const usersInfo = usersResponse.data;

      const usersMap = Object.fromEntries(usersInfo.map(user => [user._id, user]));

      const enrichedMatches = matches.map(match => ({
        ...match,
        player1Info: usersMap[match.player1],
        player2Info: match.player2 ? usersMap[match.player2] : null
      }));
      console.log("Enriched matches:", enrichedMatches);  // Añade esta línea
      
      const updatedRoundsData = {
        ...allRounds,
        [leagueId]: enrichedMatches,
      };
      setAllRounds(updatedRoundsData);
      setSelectedLeague({ leagueId, currentRound, matchId });
      setShowMatchupPopup(true);

    } catch (error) {
      console.log("No se pudieron obtener los emparejamientos:", error);
    }
  };

  const openAdminPanel = (leagueId) => {
    setSelectedLeague(leagueId);
    setShowAdminPanel(true);
    setShowMatchupPopup(false);
  };

  const closeAdminPanel = () => {
    setShowAdminPanel(false);
  };

  return (
    <div className="container mx-auto mt-10 mb-10 p-6 rounded-md shadow-sm" style={{ backgroundColor: '#27272a' }}>
      <h2 className="text-2xl font-bold mb-4 text-white">Mis torneos y ligas creados</h2>
      
      {leagues.map(league => (
        <div key={league._id} className="bg-white p-4 rounded-md mb-4 shadow-md text-black">
          <h3 className="text-xl font-medium mb-2">{league.league_name}</h3>
          <p className="mb-1">Formato: {league.league_format}</p>
          <p>Ronda actual: {league.current_round || "Torneo no iniciado"}</p>
          <p>Fecha de inicio: {new Date(league.start_date).toLocaleDateString()}</p>
          
          <button onClick={() => startTournament(league._id, league.status)}>Iniciar Torneo</button>
          <button onClick={() => showMatchups(league._id, league.current_round)}>Ver Emparejamientos</button>
          <button onClick={() => openAdminPanel(league._id)}>Administrar Torneo</button>
        </div>
      ))}

      {showMatchupPopup && (
        <MatchupPopup 
          allRounds={allRounds[selectedLeague.leagueId] || []} 
          currentRound={selectedLeague.currentRound} 
          onClose={() => setShowMatchupPopup(false)} 
          leagueId={selectedLeague.leagueId}
        />
      )}
  
      {showAdminPanel && (
        <TournamentAdminPanel leagueId={selectedLeague} onClose={closeAdminPanel} />
      )}
    </div>
  );
}

export default UserLeagues;
