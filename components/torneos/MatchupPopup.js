import React from 'react';
import PropTypes from 'prop-types';

const MatchupPopup = ({ rounds, onClose }) => {
  return (
    <div className="matchup-popup">
      <button onClick={onClose}>Cerrar</button>
      <h1>Emparejamientos</h1>
      {rounds.map((round, roundIndex) => (
        <div key={round._id}>
          <h2>Ronda {roundIndex + 1}</h2>
          {round.matches.map((match, matchIndex) => (
            <div key={match._id}>
              <h3>Partida {matchIndex + 1}</h3>
              <p>{match.player1 ? match.player1.username : 'Esperando...'}</p>
              <p>vs</p>
              <p>{match.player2 ? match.player2.username : 'Esperando...'}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

MatchupPopup.propTypes = {
  rounds: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      matches: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          player1: PropTypes.shape({
            username: PropTypes.string // Actualizado para usar username
          }),
          player2: PropTypes.shape({
            username: PropTypes.string // Actualizado para usar username
          }),
        })
      ),
    })
  ),
  onClose: PropTypes.func.isRequired,
};

export default MatchupPopup;
