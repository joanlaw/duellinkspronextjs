import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import ScorePopup from './ScorePopup';

function MatchupPopup({ matches = [], onClose, currentRound, leagueId, matchId  }) {
     console.log("Rendering MatchupPopup");
    console.log("MatchupPopup matches:", matches);

    const [showChat, setShowChat] = useState(false);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);

    const openChatRoom = (chatRoomId) => {
        setSelectedChatRoom(chatRoomId);
        setShowChat(true);
    };

    function Bracket({ matches, leagueId, currentRound, matchId  }) {
        console.log("leagueId en Bracket:", leagueId);
        console.log("roundNumber en Bracket:", currentRound);

        const totalRounds = Math.log2(matches.length * 2);
        console.log("Total Rounds:", totalRounds);
        
        return (
            <div className="bracket">
                {Array.from({ length: totalRounds }).map((_, index) => (
                    <Round 
                        key={index}
                        matches={matches}
                        round={index}
                        matchId={matchId}  // <-- Pasamos matchId aquí
                        leagueId={leagueId}
                        currentRound={currentRound}
                    />
                ))}
            </div>
        );
    }
    
    function Round({ matches, round, leagueId, currentRound, matchId }) {
        console.log("leagueId en Round:", leagueId);
        console.log("roundNumber en Round:", currentRound);
    
        return (
            <div className="round space-y-4">
                {matches.map((match) => (
                    <Match
                        key={match._id}  // Usamos el _id del partido como clave
                        match={match}
                        leagueId={leagueId}
                        currentRound={currentRound}
                    />
                ))}
            </div>
        );
    }
    

    function Match({ match, leagueId, currentRound, matchId  }) {
        console.log("leagueId en Match:", leagueId);
        console.log("roundNumber en Match:", currentRound);
        console.log("roundNumber en Match:", currentRound);


        const isByeMatch = !match.player2;
        const [showScorePopup, setShowScorePopup] = useState(false);
    
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
                                currentRound={currentRound}
                                matchId={match._id}  // <-- Pasamos matchId aquí
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
        <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg max-h-[500px] overflow-y-auto">
            <h2 className="text-2xl mb-6 text-black">Emparejamientos de la Ronda Actual</h2>
            <Bracket matches={matches} leagueId={leagueId} currentRound={currentRound} />
        </div>
        {showChat && (
            <ChatRoom roomId={selectedChatRoom} onClose={() => setShowChat(false)} />
        )}
    </div>
    );
}

export default MatchupPopup;