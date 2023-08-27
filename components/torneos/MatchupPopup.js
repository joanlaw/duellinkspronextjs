import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import ScorePopup from './ScorePopup';

function MatchupPopup({ rounds = [], onClose, roundNumber, leagueId }) {
    const [showChat, setShowChat] = useState(false);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);

    // Encuentra los matches para la ronda actual
    const currentRoundMatches = rounds.find(round => round._id === roundNumber)?.matches || [];
    console.log("Matches for current round:", currentRoundMatches);

    const openChatRoom = (chatRoomId) => {
        setSelectedChatRoom(chatRoomId);
        setShowChat(true);
    };

    function Bracket({ matches, leagueId, roundNumber }) {
        return (
            <div className="bracket">
                <Round 
                    matches={matches}
                    leagueId={leagueId}
                    roundNumber={roundNumber}
                />
            </div>
        );
    }

    function Round({ matches, leagueId, roundNumber }) {
        return (
            <div className="round space-y-4">
                {matches.map((match, index) => (
                    <Match 
                        key={index}
                        match={match}
                        leagueId={leagueId}
                        roundNumber={roundNumber}
                    />
                ))}
            </div>
        );
    }

    function Match({ match, leagueId, roundNumber }) {
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
                        <button onClick={() => openChatRoom(match.chatRoom)}>
                            Chat
                        </button>
                        <button onClick={openScorePopup}>
                            Marcador
                        </button>
                        {showScorePopup && (
                            <ScorePopup 
                                leagueId={leagueId}
                                roundNumber={roundNumber}
                                matchId={match._id}
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
        <div onClick={handleBackdropClick}>
            <div>
                <h2>Emparejamientos de la Ronda Actual</h2>
                <Bracket matches={matches} leagueId={leagueId} roundNumber={roundNumber} />
            </div>
            {showChat && (
                <ChatRoom roomId={selectedChatRoom} onClose={() => setShowChat(false)} />
            )}
        </div>
    );
}

export default MatchupPopup;
