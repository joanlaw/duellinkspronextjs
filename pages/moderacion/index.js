import React from 'react';
import MatchupsPanel from '../../components/torneos/MatchupsPanel'; // Ajusta la ruta de importación

function ModeracionPage({ leagueId }) {
  return (
    <div>
      <h1>Panel de Moderación</h1>
      <MatchupsPanel leagueId={leagueId} />
    </div>
  );
}

export default ModeracionPage;
