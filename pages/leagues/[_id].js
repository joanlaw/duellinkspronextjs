// pages/torneos/[_id].js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TournamentDetails from '../../components/torneos/TournamentDetails';

const TournamentPage = ({ _id }) => {
    const [tournament, setTournament] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTournament = async () => {
            try {
                const response = await axios.get(`https://api.duellinks.pro/leagues/${_id}`);
                setTournament(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTournament();
    }, [_id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return <TournamentDetails tournament={tournament} />
    ;
}

// Este función se usa para obtener los parámetros de la ruta actual
export async function getServerSideProps(context) {
    return {
        props: {
            _id: context.params._id, // El ID del torneo que está en la URL
        },
    };
}

export default TournamentPage;
