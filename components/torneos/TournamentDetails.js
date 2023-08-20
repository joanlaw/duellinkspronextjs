// components/torneos/TournamentDetails.js

import React from 'react';
import TournamentRegistration from './TournamentRegistration';
import NavbarCustom from '../NavbarCustom';

const TournamentDetails = ({ tournament }) => {
    if (!tournament) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <NavbarCustom />
            <h1>{tournament.league_name}</h1>
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
    );
}

export default TournamentDetails;
