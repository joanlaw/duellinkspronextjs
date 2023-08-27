import React from 'react';
import MatchupsPanel from '../../components/torneos/MatchupsPanel'; // Ajusta la ruta de importación
import ChatRoom from '../../components/torneos/ChatRoom';

function ModeracionPage({ leagueId }) {
  return (
    <div>
      <h1>Panel de Moderación</h1>
      <ChatRoom />
    </div>
  );
}

export default ModeracionPage;
