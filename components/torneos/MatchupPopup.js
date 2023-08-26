import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import ScorePopup from './ScorePopup';

function MatchupPopup({ matches = [], onClose, roundNumber, leagueId }) {
    console.log("MatchupPopup matches:", matches);  // Añade esta línea
    const [showChat, setShowChat] = useState(false);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);
    const [showScorePopup, setShowScorePopup] = useState(false);

    const openScorePopup = () => {
        setShowScorePopup(true);
    };


    const openChatRoom = (chatRoomId) => {
        setSelectedChatRoom(chatRoomId);
        setShowChat(true);
    };

    function Bracket({ matches, leagueId, roundNumber }) {
        const totalRounds = Math.log2(matches.length * 2);
        console.log("Total Rounds:", totalRounds);  // Añade esta línea
        return (
            <div className="bracket">
                {Array.from({ length: totalRounds }).map((_, index) => (
                    <Round 
                        key={index} 
                        matches={matches} 
                        round={index}
                        leagueId={leagueId}  // Añadido
                        roundNumber={roundNumber}  // Añadido
                    />
                ))}
            </div>
        );
    }
    
    function Round({ matches, round, leagueId, roundNumber }) {
        const matchesForRound = matches.filter((match, index) => {
            const matchRound = Math.floor(Math.log2(index + 2)); // +2 para compensar el índice basado en cero
            return matchRound === round;
        });
    
        console.log("Matches for Round", round, ":", matchesForRound);
    
        return (
            <div className="round space-y-4">
                {matchesForRound.map((match, index) => (
                    <Match 
                        key={index} 
                        match={match} 
                        leagueId={leagueId}  // Añadido
                        roundNumber={roundNumber}  // Añadido
                    />
                ))}
            </div>
        );
    }    
    

    function Match({ match, leagueId, roundNumber }) {
        const isByeMatch = !match.player2;
        const [showScorePopup, setShowScorePopup] = useState(false); // Asumo que este estado esté aquí para que funcione con ScorePopup
    
        const openScorePopup = () => {
            setShowScorePopup(true);
        };
    
        return (
            <div className={`flex flex-col items-center ${isByeMatch ? 'bye' : ''}`}>
                <div className="flex items-center space-x-4 w-full">
                    <div className="flex-none w-1/3 text-center text-black">
                        {match.player1Info ? match.player1Info.username : match.player1}
                    </div>
                    {!isByeMatch && <div className="flex-none w-1/3 text-center text-black">vs</div>}
                    {!isByeMatch && (
                        <div className="flex-none w-1/3 text-center text-black">
                            {match.player2Info ? match.player2Info.username : match.player2}
                        </div>
                    )}
                </div>
                {!isByeMatch && (
                    <div className="flex space-x-2 mt-2">
                        <button
                            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600`}
                            onClick={() => openChatRoom(match.chatRoom)}
                        >
                            Chat
                        </button>
                        <button
                            className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600`}
                            onClick={openScorePopup}
                        >
                            Marcador
                        </button>
                        {showScorePopup && (
                            <ScorePopup 
                                leagueId={leagueId} 
                                roundNumber={roundNumber} 
                                match={match} 
                                onClose={() => setShowScorePopup(false)} 
                            />
                        )}
                    </div>
                )}
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
