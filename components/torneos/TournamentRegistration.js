import { useState } from 'react';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext'; // Asegúrate de ajustar la ruta

const TournamentRegistration = ({ tournamentId }) => {
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Usa el Hook useUser para obtener los datos y métodos del usuario
  const { isAuthenticated, handleLogin, discordId } = useUser(); // Cambia username por discordId

  const handleRegistration = async () => {
    if (!isAuthenticated) {
        handleLogin();
        return; // Agrega esta línea
    }

    setLoading(true);
    setError(null);

    try {
      console.log('Calling enrollment API with playerId:', discordId, 'and tournamentId:', tournamentId);
      const response = await axios.post(`https://api.duellinks.pro/leagues/${tournamentId}/enroll`, {
        playerId: discordId, // Cambia username por discordId
      });

      if (response.status === 200) {
        setRegistered(true);
        setSuccessMessage('Inscripción exitosa');
      } else {
        setError('No se pudo completar la inscripción.');
      }

    } catch (err) {
      setError('Ocurrió un error al intentar inscribirse en el torneo.');
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
        <button onClick={handleRegistration}>Inscribirse en el Torneo</button>
      )}
    </div>
  );
};

export default TournamentRegistration;
