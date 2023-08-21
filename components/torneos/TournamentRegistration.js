import { useState } from 'react';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';

const TournamentRegistration = ({ tournamentId }) => {
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const { authenticated, handleLogin, discordId } = useUser();

  const handleRegistration = async () => {
    if (!authenticated) {
      handleLogin();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('Calling enrollment API with playerId:', discordId, 'and tournamentId:', tournamentId);
      const response = await axios.post(`https://api.duellinks.pro/leagues/${tournamentId}/enroll`, {
        playerId: discordId,
      });

      if (response.status === 200) {
        setRegistered(true);
        setSuccessMessage('Inscripción exitosa');
      } else {
        setError('No se pudo completar la inscripción.');
      }

    } catch (err) {
      setError(err.response?.data?.message || 'Ocurrió un error al intentar inscribirse en el torneo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return <div>Inscribiéndose...</div>;
  }



  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {!registered && (
              <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleRegistration}
            >
              Inscribirse en el Torneo
            </button>
      )}
    </div>
  );
};

export default TournamentRegistration;
