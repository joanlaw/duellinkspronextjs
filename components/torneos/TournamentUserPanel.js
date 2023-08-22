import React, { useState, useEffect } from 'react';

function TournamentUserPanel({ onClose, leagueId }) {
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.duellinks.pro/leagues/${leagueId}/tournaments`)
            .then(res => res.json())
            .then(data => {
                setTournaments(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error al recuperar los torneos:", err);
                setLoading(false);
            });
    }, [leagueId]);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="bg-white p-6 rounded-md shadow-lg text-black">
                <h2 className="text-xl font-semibold mb-4">Torneos en el campeonato</h2>
                {loading ? (
                    <p>Cargando torneos...</p>
                ) : (
                    <ul className="list-disc pl-6">
                        {tournaments.map(tournament => (
                            <li key={tournament._id}>{tournament.league_name}</li>
                        ))}
                    </ul>
                )}
                <button
                    className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

export default TournamentUserPanel;
