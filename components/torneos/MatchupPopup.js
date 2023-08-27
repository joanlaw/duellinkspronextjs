import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import ScorePopup from './ScorePopup';

function MatchupPopup({ matches = [], onClose, roundNumber, leagueId, matchId  }) {
    console.log("leagueId en MatchupPopup:", leagueId);
    console.log("roundNumber en MatchupPopup:", roundNumber);
    console.log("MatchupPopup matches:", matches);
    console.log("MatchId matchId:", matchId);

    const [showChat, setShowChat] = useState(false);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);

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
              matchId={matchId}
            />
          </div>
        );
      } 
    
    function Round({ matches, leagueId, roundNumber, matchId }) {
        return (
          <div className="round space-y-4">
            {matches.map((match, index) => (
              <Match 
                key={index}
                match={match}
                matchId={match._id}
                leagueId={leagueId}
                roundNumber={roundNumber}
              />
            ))}
          </div>
        );
      }
    function Match({ match, leagueId, roundNumber, matchId  }) {
        console.log("leagueId en Match:", leagueId);
        console.log("roundNumber en Match:", roundNumber);
        console.log("MatchId:", matchId);


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
                                roundNumber={roundNumber}
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
        <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg">
          <h2 className="text-2xl mb-6 text-black">Emparejamientos</h2>
          {Object.keys(matches).map((roundNumber) => (
            <div key={roundNumber}>
              <h3>Ronda {roundNumber}</h3>
              <Bracket matches={matches[roundNumber]} leagueId={leagueId} roundNumber={roundNumber} />
            </div>
          ))}
        </div>
        {showChat && (
          <ChatRoom roomId={selectedChatRoom} onClose={() => setShowChat(false)} />
        )}
      </div>    
    );
}

export default MatchupPopup;