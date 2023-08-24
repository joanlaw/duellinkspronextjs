import React from 'react';

function MatchupPopup({ matches = [], onClose }) {
    console.log("Emparejamientos en MatchupPopup:", matches);
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
            <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2 shadow-lg">
                <h2 className="text-2xl mb-6 text-black">Emparejamientos de la Ronda Actual</h2>
                <ul className="list-decimal list-inside text-black pl-5 space-y-4">
                    {matches.map((match, index) => (
                        <li key={index} className="mb-2">
                            <div className="flex justify-between items-center">
                                <span>
                                    {match.player1Info ? match.player1Info.username : match.player1} 
                                    vs 
                                    {match.player2Info ? match.player2Info.username : (match.player2 || 'BYE')}
                                </span>
                                <button className="bg-blue-500 text-white rounded p-1 hover:bg-blue-600 transition duration-200">
                                    Ir a sala de chat
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={onClose}
                    className="mt-6 p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

export default MatchupPopup;
