import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatRoom from './ChatRoom';  // Importamos el componente de la sala de chat
import { useUser  } from '../../contexts/UserContext'; // Importa el contexto del usuario

const UserMatchupPopup = ({ onClose, leagueId }) => {
    const { discordId, token } = useUser();  // Usa useUser para obtener discordId y token
    const [matches, setMatches] = useState([]);
    const [currentRound, setCurrentRound] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showChat, setShowChat] = useState(false);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);

    useEffect(() => {
        const fetchCurrentRound = async () => {
            try {
                const response = await axios.get(`https://api.duellinks.pro/leagues/${leagueId}/current-round`);
                setCurrentRound(response.data.current_round);
            } catch (error) {
                console.error('Error al obtener la ronda actual:', error);
            }
        };

        const fetchMatches = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://api.duellinks.pro/leagues/${leagueId}/rounds/${currentRound}/match`, {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Incluye el token en las cabeceras
                    }
                });
                setMatches([response.data]);
            } catch (error) {
                console.error('Error al obtener los emparejamientos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrentRound();
        if (currentRound) {
            fetchMatches();
        }

    }, [leagueId, discordId, currentRound, token]);  // Agrega token y discordId como dependencias

    const openChatRoom = (chatRoomId) => {
        setSelectedChatRoom(chatRoomId);
        setShowChat(true);
    };

    if (loading) {
        return <div>Cargando emparejamientos...</div>;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
        <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg">
            <h2 className="text-2xl mb-6">Tus emparejamientos</h2>
            <ul>
                {matches.map((match, index) => (
                    <li key={index}>
                        {match.player1.username} vs {match.player2.username}
                        <button onClick={() => openChatRoom(match.chatRoom)}>Ir al chat</button>
                    </li>
                ))}
            </ul>
            <button onClick={onClose}>Cerrar</button>
        </div>
        {showChat && (
            <ChatRoom roomId={selectedChatRoom} onClose={() => setShowChat(false)} />
        )}
    </div>
    );
};

export default UserMatchupPopup;
