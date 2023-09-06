import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../contexts/UserContext';
import TournamentUserPanel from './TournamentUserPanel';

const TournamentRegistration = ({ tournamentId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showUserPanel, setShowUserPanel] = useState(false); // Nuevo estado para mostrar el panel de usuario

  const { authenticated, handleLogin, discordId } = useUser();

  // Nuevo estado para controlar si se hizo clic en el botón de inscripción
  const [registrationClicked, setRegistrationClicked] = useState(false);

  // Manejador de eventos para el botón de inscripción
  const handleRegistrationClick = async () => {
    setRegistrationClicked(true); // Marcar que se hizo clic en el botón de inscripción
  };

  useEffect(() => {
    // Verificar si se hizo clic en el botón de inscripción antes de ejecutar la lógica de inscripción
    if (registrationClicked) {
      const checkPlayerRegistration = async () => {
        setLoading(true);
        setError(null);

        try {
          const response = await axios.post(`https://api.duellinks.pro/leagues/${tournamentId}/enroll`, {
            playerId: discordId,
          });

          if (response.status === 200) {
            if (response.data.isPlayerRegistered) {
              setSuccessMessage('Ya estás inscrito en este torneo.');
            } else {
              setSuccessMessage('Inscripción exitosa');
              setShowUserPanel(true); // Mostrar el panel de usuario en caso de inscripción exitosa
            }
          } else {
            setError('No se pudo completar la inscripción.');
          }
        } catch (err) {
          if (err.response?.status === 400 && err.response?.data?.message === 'El torneo ya ha finalizado') {
            setError('El torneo ya ha finalizado');
          } else {
            setError(err.response?.data?.message || 'Ocurrió un error al intentar inscribirse en el torneo.');
          }
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      checkPlayerRegistration(); // Ejecutar la lógica de inscripción cuando se hizo clic en el botón
    }
  }, [tournamentId, discordId, registrationClicked]);

  const handleUserPanelClose = () => {
    setShowUserPanel(false);
  };

  return (
    <div>
      {loading ? (
        <div>Inscribiéndose...</div>
      ) : (
        <div>
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && (
            <div className="text-green-500">
              <p>{successMessage}</p>
              {/* Agregar el botón para abrir el panel de usuario */}
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                onClick={() => setShowUserPanel(true)}
              >
                Ver Detalles del Torneo
              </button>
            </div>
          )}
          {!successMessage && (
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleRegistrationClick} // Llama al manejador de eventos al hacer clic en el botón
            >
              Inscribirse en el Torneo
            </button>
          )}
        </div>
      )}

      {/* Mostrar el panel de usuario si showUserPanel es true */}
      {showUserPanel && <TournamentUserPanel onClose={handleUserPanelClose} leagueId={tournamentId} />}
    </div>
  );
};

export default TournamentRegistration;
