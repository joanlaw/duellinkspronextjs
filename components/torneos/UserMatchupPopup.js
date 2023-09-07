    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import ChatRoom from './ChatRoom';
    import { useUser } from '../../contexts/UserContext';
    import { Avatar, Button } from '@nextui-org/react';

    const UserMatchupPopup = ({ onClose, leagueId }) => {
        const { discordId, token } = useUser();
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
                            Authorization: `Bearer ${token}`,
                        }
                    });
            
                    const matchesArray = Array.isArray(response.data) ? response.data : [response.data];
                    const playerIds = matchesArray.flatMap(match => [match.player1, match.player2]);
                    
                    // Obtener información de los usuarios y sus avatares
                    const usersResponse = await axios.get(`https://api.duellinks.pro/users?ids=${playerIds.join(',')}`);
                    const usersMap = Object.fromEntries(usersResponse.data.map(user => [user._id, user]));

                    const matchesWithUsernamesAndAvatars = matchesArray.map(match => ({
                        ...match,
                        player1Username: transformIdToBye(usersMap[match.player1]?.username),
                        player1Avatar: usersMap[match.player1] ? usersMap[match.player1].avatar : "", // Obtener el enlace del avatar
                        player2Username: transformIdToBye(usersMap[match.player2]?.username),
                        player2Avatar: usersMap[match.player2] ? usersMap[match.player2].avatar : "", // Obtener el enlace del avatar
                    }));
                    
                    setMatches(matchesWithUsernamesAndAvatars);
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
        }, [leagueId, discordId, currentRound, token]);

        
  // Función para transformar el ID "000000000000000000000000" a "BYE"
  const transformIdToBye = (username) => {
    return username === "000000000000000000000000" ? "BYE" : username;
  };

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
                    <h2 className="text-2xl mb-6 text-black">Tus emparejamientos</h2>
                    <ul>
                        {matches.map((match, index) => (
                            <li key={index} className="flex flex-col items-center">
                                <div className="flex items-center space-x-4 w-full">
                                    <div className="flex-none w-1/3 text-center text-black">
                                        <Avatar src={match.player1Avatar} size="lg" /> {/* Mostrar avatar */}
                                        {match.player1Username}
                                    </div>
                                    <div className="flex-none w-1/3 text-center text-black">vs</div>
                                    <div className="flex-none w-1/3 text-center text-black">
                                        <Avatar src={match.player2Avatar} size="md" /> {/* Mostrar avatar */}
                                        {match.player2Username}
                                    </div>
                                </div>
                                <div className="flex space-x-2 mt-2">
                                    <button
                                        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600`}
                                        onClick={() => openChatRoom(match.chatRoom)}
                                    >
                                        Chat
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <Button onClick={onClose} color='danger'>Cerrar</Button>
                </div>
                {showChat && (
                    <ChatRoom roomId={selectedChatRoom} onClose={() => setShowChat(false)} />
                )}
            </div>
        );
    };

    export default UserMatchupPopup;
