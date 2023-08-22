import React, { useState } from 'react';
import axios from 'axios';
import TournamentUserPanel from './TournamentUserPanel';

const TournamentList = ({ discordId }) => {
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showUserPanel, setShowUserPanel] = useState(false);
    const [selectedLeagueId, setSelectedLeagueId] = useState(null);

    useEffect(() => {
        const fetchTournaments = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://api.duellinks.pro/leagues/discordId/${discordId}`);
                setTournaments(response.data);
            } catch (error) {
                console.error('Hubo un problema al cargar la lista de torneos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTournaments();
    }, [discordId]);

    const handleAdminClick = (leagueId) => {
        setSelectedLeagueId(leagueId);
        setShowUserPanel(true);
    }

    if (loading) {
        return <div>Cargando torneos...</div>;
    }

    return (
        <div className="container mx-auto mt-10 mb-10 p-6 rounded-md shadow-sm" style={{ backgroundColor: '#27272a' }}>
            <h2 className="text-2xl font-bold mb-4 text-white">Lista de Torneos</h2>
            {tournaments.map((tournament, index) => (
                <div key={index} className="bg-white p-4 rounded-md mb-4 shadow-md text-black">
                    <h3 className="text-xl font-medium mb-2">{tournament.league_name}</h3>
                    <button onClick={() => handleAdminClick(tournament._id)}>
                        Administrar
                    </button>
                    {/* Aquí puedes agregar más detalles del torneo */}
                </div>
            ))}

            {showUserPanel && (
                <TournamentUserPanel
                    onClose={() => setShowUserPanel(false)}
                    leagueId={selectedLeagueId}
                />
            )}
        </div>
    );
};

export default TournamentList;
