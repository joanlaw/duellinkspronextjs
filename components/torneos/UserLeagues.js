import React, { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext"; 
import TournamentAdminPanel from "./TournamentAdminPanel";
import axios from "axios";
import MatchupPopup from "./MatchupPopup";

function UserLeagues() {
  const { discordId, authenticated } = useUser();
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState({ leagueId: null, currentRound: null, matchId: null });
  const [currentRoundMatches, setCurrentRoundMatches] = useState({});
  const [updatedMatches, setUpdatedMatches] = useState({}); // Nueva variable de estado
  const [tournamentStarted, setTournamentStarted] = useState(false); // Agrega el estado tournamentStarted
  const [totalRounds, setTotalRounds] = useState(0); // Agrega el estado totalRounds

  const [showMatchupPopup, setShowMatchupPopup] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);

  const [tournamentWinner, setTournamentWinner] = useState(null); // Agrega el estado del ganador

    // Este es el nuevo useEffect que rastrea los cambios en selectedLeague
    useEffect(() => {
      console.log("Estado actualizado de selectedLeague:", selectedLeague);
    }, [selectedLeague]);

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

  const startTournament = async (leagueId, leagueStatus ) => {
    try {
      const response = await axios.post(`https://api.duellinks.pro/leagues/${leagueId}/start-tournament`);
      updateLeagues();
  
      const { matches, totalRounds } = response.data; // Obtén los emparejamientos y el número total de rondas
      console.log('Emparejamientos de la ronda actual:', matches);
  
      setCurrentRoundMatches({
        ...currentRoundMatches,
        [leagueId]: matches,
      });
  
      setTotalRounds(totalRounds); // Actualiza el estado de totalRounds
      setTournamentStarted(true); // Marca el torneo como iniciado
  
    } catch (error) {
      console.error("Error al iniciar el torneo:", error);
    }
  };
  

  const showMatchups = async (leagueId, currentRound, matchId) => {
    try {
      const response = await axios.get(`https://api.duellinks.pro/leagues/${leagueId}/rounds/${currentRound}/matches`);
      const matches = response.data || [];
      console.log("Received matches:", matches);  // Añade esta línea
      console.log("Received matches:", matches); // Verifica que el array de matches contiene los objetos con los _id
      
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

      const updatedMatchesData = {
        ...currentRoundMatches,
        [leagueId]: enrichedMatches,
      };

      setUpdatedMatches(updatedMatchesData); // Guardamos la información enriquecida en updatedMatches
      console.log("currentRound antes de setSelectedLeague:", currentRound);
      setSelectedLeague({ leagueId, currentRound, matchId });  // <-- Cambia aquí
      console.log("Estado de selectedLeague después de setSelectedLeague:", selectedLeague);
      console.log("Estado de selectedLeague:", selectedLeague);
      setShowMatchupPopup(true);

      setTournamentWinner(null); // Resetea el ganador antes de cargar nuevos datos
          // Verifica si el torneo está finalizado y si hay un ganador en el último partido
    const lastMatch = matches[matches.length - 1];
    if (lastMatch.status === "finalized" && lastMatch.winner) {
      setTournamentWinner(lastMatch.winner);
    }

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
  
  const startNextRound = async (leagueId) => {
    try {
      const response = await axios.post(`https://api.duellinks.pro/leagues/${leagueId}/start-next-round`);
      updateLeagues();  // Actualiza la lista de ligas
  
      // Actualiza la información sobre la ronda actual y los emparejamientos
      const { matches, current_round } = response.data;
      console.log('Emparejamientos de la nueva ronda:', matches);
  
      setCurrentRoundMatches({
        ...currentRoundMatches,
        [leagueId]: matches,
      });
  
      setSelectedLeague({
        ...selectedLeague,
        currentRound: current_round
      });
  
    } catch (error) {
      console.error("Error al iniciar la siguiente ronda:", error);
    }
  };
  


    return (
      <div className="container mx-auto mt-10 mb-10 p-6 rounded-md shadow-sm" style={{ backgroundColor: '#27272a' }}>
      <h2 className="text-2xl font-bold mb-4 text-white">Mis torneos y ligas creados</h2>
      
      {leagues.map(league => (
  <div key={league._id} className="bg-white p-4 rounded-md mb-4 shadow-md text-black">
    <h3 className="text-xl font-medium mb-2">{league.league_name}</h3>
    <p className="mb-1">Formato: {league.league_format}</p>
    {league.status === "finalized" ? (
      tournamentWinner ? (
        <p>Torneo Finalizado - Campeón: {tournamentWinner}</p>
      ) : (
        <p>Torneo Finalizado</p>
      )
    ) : (
      <p>Ronda actual: {league.current_round || "Torneo no iniciado"}</p>
    )}
    <p>Fecha de inicio: {new Date(league.start_date).toLocaleDateString()}</p>
    
    <button onClick={() => startTournament(league._id, league.status)}>Iniciar Torneo</button>
    <button onClick={() => showMatchups(league._id, league.current_round)}>Ver Emparejamientos</button>
    <button onClick={() => startNextRound(league._id)}>Iniciar Siguiente Ronda</button>
    <button onClick={() => openAdminPanel(league._id)}>Administrar Torneo</button>
  </div>
))}

  
  {showMatchupPopup && (
  <MatchupPopup 
    matches={updatedMatches[selectedLeague.leagueId]} 
    onClose={() => setShowMatchupPopup(false)} 
    leagueId={selectedLeague.leagueId}  // <-- Pasa leagueId aquí
    currentRound={selectedLeague.currentRound}  // <-- Ahora
    matchId={selectedLeague.matchId}  // <-- Pasa matchId aquí
  />
)}

  
      {showAdminPanel && (
        <TournamentAdminPanel leagueId={selectedLeague} onClose={closeAdminPanel} />
      )}
    </div>
    );
}

export default UserLeagues;