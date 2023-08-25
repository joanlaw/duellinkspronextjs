import React, { useState } from 'react';
import ChatRoom from './ChatRoom';

function MatchupPopup({ rounds = [], onClose }) {
    const [showChat, setShowChat] = useState(false);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);

    const openChatRoom = (chatRoomId) => {
        setSelectedChatRoom(chatRoomId);
        setShowChat(true);
    };

    function Bracket({ rounds }) {
        return (
            <div className="bracket">
                {rounds.map((round, index) => (
                    <Round key={index} matches={round.matches} round={index + 1} />
                ))}
            </div>
        );
    }

    function Round({ matches, round }) {
        return (
            <div className="round space-y-4">
                <h3>Ronda {round}</h3>
                {matches.map((match, index) => (
                    <Match key={index} match={match} />
                ))}
            </div>
        );
    }

    function Match({ match }) {
        const isByeMatch = !match.player2;
        return (
            <div className={`flex items-center space-x-4 ${isByeMatch ? 'bye' : ''}`}>
                <div className="flex-none w-1/3 text-center text-black">
                    {match.player1}
                </div>
                {!isByeMatch && <div className="flex-none w-1/3 text-center text-black">vs</div>}
                {!isByeMatch && (
                    <div className="flex-none w-1/3 text-center text-black">
                        {match.player2}
                    </div>
                )}
                <button
                    className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
                        match.chatRoom ? 'visible' : 'invisible'
                    }`}
                    onClick={() => openChatRoom(match.chatRoom)}
                >
                    Chat
                </button>
            </div>
        );
    }

    const handleBackdropClick = (event) => {
        if (event.target.classList.contains('backdrop')) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black backdrop"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg overflow-y-auto" style={{ maxHeight: '80vh' }}>
                <h2 className="text-2xl mb-6 text-black">Emparejamientos de la Ronda Actual</h2>
                <Bracket rounds={rounds} />
            </div>
            {showChat && (
                <ChatRoom roomId={selectedChatRoom} onClose={() => setShowChat(false)} />
            )}
        </div>
    );
}

export default MatchupPopup;
