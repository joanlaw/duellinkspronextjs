import React, { useState }  from 'react';
import ChatRoom from './ChatRoom';

function MatchupPopup({ matches = [], onClose }) {
    console.log("Emparejamientos en MatchupPopup:", matches);

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
            <div className="round">
                {matchesForRound.map((match, index) => (
                    <Match key={index} match={match} />
                ))}
            </div>
        );
    }

    function Match({ match }) {
        return (
            <div className="match">
                <div>{match.player1Info ? match.player1Info.username : match.player1}</div>
                vs
                <div>{match.player2Info ? match.player2Info.username : (match.player2 || 'BYE')}</div>
            </div>
        );
    }

    const [showChat, setShowChat] = useState(false);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);
  
    const openChatRoom = (chatRoomId) => {
      setSelectedChatRoom(chatRoomId);
      setShowChat(true);
    };
  
    
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
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
