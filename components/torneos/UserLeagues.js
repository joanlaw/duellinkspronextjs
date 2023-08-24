import React, { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext"; 
import TournamentAdminPanel from "./TournamentAdminPanel";
import axios from "axios";
import MatchupPopup from "./MatchupPopup";

function UserLeagues() {
    const { discordId, authenticated } = useUser();
    const [leagues, setLeagues] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState(null);

    const [showPopup, setShowPopup] = useState(false);
    const [currentRoundMatches, setCurrentRoundMatches] = useState([]);
    const [tournamentStarted, setTournamentStarted] = useState(false);
    

    const openAdminPanel = (leagueId) => {
        setSelectedLeague(leagueId);
      };

      const closeAdminPanel = () => {
        setSelectedLeague(null);
      };

    useEffect(() => {
        if (authenticated) {
            fetch(`https://api.duellinks.pro/leagues/organizer/${discordId}`, {
                headers: {
                    // Aquí puedes agregar headers si son necesarios para la consulta
                }
            })
            .then(res => res.json())
            .then(data => {
                setLeagues(data || []); // Nota que he cambiado `data.leagues` a `data` ya que asumo que el servidor devuelve directamente el array de ligas.
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
        
        const matches = response.data.rounds[response.data.current_round - 1].matches;
        console.log('Emparejamientos de la ronda actual:', matches);  // Nueva línea para depurar
        setCurrentRoundMatches({
          ...currentRoundMatches,
          [leagueId]: matches,  // Almacenamos los emparejamientos bajo el leagueId
        });
  
        if (leagueStatus === 'in_progress') {
          setTournamentStarted(true);
        }
      } catch (error) {
        console.error("Error al iniciar el torneo:", error);
      }
    };
  
    const showMatchups = async (leagueId, currentRound) => {
      try {
        const response = await axios.get(`https://api.duellinks.pro/leagues/${leagueId}/rounds/${currentRound}/matches`);
        const matches = response.data || [];
        
        console.log('Emparejamientos de la ronda actual:', matches);  // Nueva línea para depurar
    
        setCurrentRoundMatches({
          ...currentRoundMatches,
          [leagueId]: matches,  // Almacenamos los emparejamientos bajo el leagueId
        });
    
        setShowPopup(true);
      } catch (error) {
        console.log("No se pudieron obtener los emparejamientos:", error);
      }
    };
    

    const startNextRound = async (leagueId) => {
        try {
            await axios.post(`https://api.duellinks.pro/leagues/${leagueId}/start-next-round`);
            updateLeagues();
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
            <p>Ronda actual: {league.current_round || "Torneo no iniciado"}</p>
            <p>Fecha de inicio: {new Date(league.start_date).toLocaleDateString()}</p>
            
            {league.status === 'open' && 
              <button onClick={() => startTournament(league._id, league.status)}>Iniciar Torneo</button>}
            {league.status === 'in_progress' && 
              <button onClick={() => showMatchups(league._id, league.current_round)}>Ver Emparejamientos</button>}
              
            <button onClick={() => startNextRound(league._id)}>Iniciar Siguiente Ronda</button>
            <button onClick={() => openAdminPanel(league._id)}>Administrar Torneo</button>
          </div>
        ))}

        {showPopup && selectedLeague && (  
          <MatchupPopup matches={currentRoundMatches[selectedLeague]} onClose={() => setShowPopup(false)} />
        )}

        {selectedLeague && (
          <TournamentAdminPanel leagueId={selectedLeague} onClose={closeAdminPanel} />
        )}
      </div>

    );
}

export default UserLeagues;