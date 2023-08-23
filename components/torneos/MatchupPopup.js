import React from 'react';

function MatchupPopup({ matches, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
      <div className="bg-white rounded-lg p-8 w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl mb-4">Emparejamientos de la Ronda Actual</h2>
        <ul className="list-decimal list-inside">
          {matches.map((match, index) => (
            <li key={index} className="mb-2">
              {match.player1.name} vs {match.player2 ? match.player2.name : 'BYE'}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="mt-4 p-2 bg-red-500 text-white rounded-full">
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default MatchupPopup;