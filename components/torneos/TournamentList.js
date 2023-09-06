import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TournamentUserPanel from './TournamentUserPanel';
import UserMatchupPopup from './UserMatchupPopup';  // Importa el nuevo componente
import UserMatches from './UserMatches';

const TournamentList = ({ discordId }) => {
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showUserPanel, setShowUserPanel] = useState(false);
    const [showMatchupPopup, setShowMatchupPopup] = useState(false);  // Nuevo estado
    const [selectedLeagueId, setSelectedLeagueId] = useState(null);
    const [showUserMatches, setShowUserMatches] = useState(false);

    const fetchTournaments = async () => {
        try {
            const response = await axios.get(`https://api.duellinks.pro/leagues/discordId/${discordId}`);
            setTournaments(response.data);
        } catch (error) {
            console.error('Hubo un problema al cargar la lista de torneos:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTournaments(); // Realiza la primera carga de torneos

        // Establece un intervalo para actualizar la lista de torneos cada 5 minutos (o el intervalo deseado)
        const intervalId = setInterval(fetchTournaments, 5000); // 300000 ms = 5 minutos

        return () => {
            // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
            clearInterval(intervalId);
        };
    }, [discordId]);

    const handleUserMatchesClick = (leagueId) => {
        setSelectedLeagueId(leagueId);
        setShowUserMatches(true);
    }

    const handleAdminClick = (leagueId) => {
        setSelectedLeagueId(leagueId);
        setShowUserPanel(true);
    }

    const handleMatchupsClick = (leagueId) => {  // Nuevo manejador
        setSelectedLeagueId(leagueId);
        setShowMatchupPopup(true);
    }

    if (loading) {
        return <div>Cargando torneos...</div>;
    }

    return (
        <div className="container mx-auto mt-10 mb-10 p-6 rounded-md shadow-sm bg-gray-800 text-white">
            <h2 className="text-2xl font-bold mb-4">Tu lista de Torneos</h2>
            {tournaments.map((tournament, index) => (
                            <div key={index} className="bg-white p-4 rounded-md mb-4 shadow-md text-black relative">
                <h3 className="text-xl font-medium mb-2">{tournament.league_name}</h3>
                <div className="space-x-4 absolute top-0 right-0 flex items-start justify-end">
                    {tournament.status === 'open' && (
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded">El torneo aún no inicia</span>
                    )}
                    {tournament.status === 'in_progress' && (
                        <span className="bg-blue-500 text-white px-2 py-1 rounded">Torneo en curso</span>
                    )}
                    {tournament.status === 'finalized' && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded">El torneo ha finalizado</span>
                    )}
                </div>
                <button onClick={() => handleAdminClick(tournament._id)}>
                    Envio de Decks
                </button>
                <button onClick={() => handleMatchupsClick(tournament._id)}> 
                    Ver Emparejamientos
                </button>
                <button onClick={() => handleUserMatchesClick(tournament._id)}> 
                    Historial de Duelos
                </button>
            </div>

            ))}
            {showUserPanel && (
                <TournamentUserPanel
                    onClose={() => setShowUserPanel(false)}
                    leagueId={selectedLeagueId}
                />
            )}
            {showMatchupPopup && (  // Nuevo Popup
                <UserMatchupPopup
                    onClose={() => setShowMatchupPopup(false)}
                    leagueId={selectedLeagueId}
                    discordId={discordId}
                />
            )}
            {showUserMatches && (
                <UserMatches
                    onClose={() => setShowUserMatches(false)}
                    leagueId={selectedLeagueId}
                    discordId={discordId}
                />
            )}
        </div>
    );
};

export default TournamentList;
