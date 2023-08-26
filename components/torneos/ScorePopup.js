import React, { useState } from 'react';
import axios from 'axios';

function ScorePopup({ leagueId, roundNumber, match, onClose }) {
    const [scorePlayer1, setScorePlayer1] = useState(0);
    const [scorePlayer2, setScorePlayer2] = useState(0);

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`https://api.duellinks.pro/leagues/${leagueId}/rounds/${roundNumber}/record-scores`, {
                matchId: match.id,
                scorePlayer1: scorePlayer1,
                scorePlayer2: scorePlayer2
            });

            if (response.status === 200) {
                // Cerrar el popup y refrescar los datos si es necesario
                onClose();
            } else {
                // Manejar el error
                console.log('Error al actualizar los puntajes');
            }
        } catch (error) {
            // Manejar el error
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black backdrop"
            onClick={event => {
                if (event.target.classList.contains('backdrop')) {
                    onClose();
                }
            }}
        >
            <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg">
                <h2 className="text-2xl mb-6 text-black">Actualizar Marcador</h2>
                <div className="flex space-x-4">
                    <input
                        type="number"
                        placeholder="Puntuación Jugador 1"
                        value={scorePlayer1}
                        onChange={e => setScorePlayer1(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Puntuación Jugador 2"
                        value={scorePlayer2}
                        onChange={e => setScorePlayer2(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>Actualizar</button>
            </div>
        </div>
    );
}

export default ScorePopup;