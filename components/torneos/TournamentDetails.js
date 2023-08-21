// components/torneos/TournamentDetails.js

import React from 'react';
import TournamentRegistration from './TournamentRegistration';
import NavbarCustom from '../NavbarCustom';
import FooterCustom from '../FooterCustom';

const TournamentDetails = ({ tournament }) => {
    if (!tournament) {
        return <p>Loading...</p>;
    }

    return (
        <div className="bg-black text-white min-h-screen">
        <NavbarCustom />
        <div className='container mx-auto py-10'>
          <h1 className='text-center text-4xl font-bold mb-2'>{tournament.league_name}</h1>
          <p>ID del Torneo: {tournament._id}</p>
          <h2>Información:</h2>
          {tournament.infoTorneo.map((info, index) => (
            <div key={index}>
              <p><strong>Formato:</strong> {info.format}</p>
              <p><strong>Banlist:</strong> {info.banlist}</p>
              <p><strong>Información de Deck:</strong> {info.deck_info}</p>
              <p><strong>Eliminación:</strong> {info.eliminacion}</p>
            </div>
          ))}
          <TournamentRegistration tournamentId={tournament._id} /> {/* Asegúrate de usar "_id" y no "id" */}
        </div>
        <FooterCustom />
      </div>
    );
}

export default TournamentDetails;
