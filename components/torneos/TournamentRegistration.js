import { useState } from 'react';
import axios from 'axios';

const TournamentRegistration = ({ tournamentId, username }) => {
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleRegistration = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`https://api.duellinks.pro/leagues/register/${tournamentId}`, {
        username: username,
      });

      if (response.status === 200) {
        setRegistered(true);
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

  if (registered) {
    return <div>Inscripción exitosa!</div>;
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <button onClick={handleRegistration}>Inscribirse en el Torneo</button>
    </div>
  );
};

export default TournamentRegistration;
