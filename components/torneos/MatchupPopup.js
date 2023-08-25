import React, { useState } from 'react';
import ChatRoom from './ChatRoom';

function MatchupPopup({ matches = [], onClose }) {
    const [showChat, setShowChat] = useState(false);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);

    const openChatRoom = (chatRoomId) => {
        setSelectedChatRoom(chatRoomId);
        setShowChat(true);
    };

    function Bracket({ matches }) {
        const totalRounds = Math.log2(matches.length * 2);
        return (
            <div className="bracket">
                {Array.from({ length: totalRounds }).map((_, index) => (
                    <Round key={index} matches={matches} round={index} />
                ))}
            </div>
        );
    }

    function Round({ matches, round }) {
        const matchesForRound = matches.slice(2 ** round, 2 ** (round + 1));
        return (
            <div className="round space-y-4">
                {matchesForRound.map((match, index) => (
                    <Match key={index} match={match} />
                ))}
            </div>
        );
    }

    function Match({ match }) {
        const isByeMatch = !match.player2;
        return (
            <div className={`flex items-center space-x-4 ${isByeMatch ? 'bye' : ''}`}>
                <div className="flex-none w-1/3">
                    <div className="text-center text-black">
                        {match.player1Info ? match.player1Info.username : match.player1}
                    </div>
                </div>
                {!isByeMatch && <div className="flex-none w-1/3 text-center text-black">vs</div>}
                {!isByeMatch && (
                    <div className="flex-none w-1/3 text-center text-black">
                        {match.player2Info ? match.player2Info.username : match.player2}
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
            <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg">
                <h2 className="text-2xl mb-6 text-black">Emparejamientos de la Ronda Actual</h2>
                <Bracket matches={matches} />
            </div>
            {showChat && (
                <ChatRoom roomId={selectedChatRoom} onClose={() => setShowChat(false)} />
            )}
        </div>
    );
}

export default MatchupPopup;
