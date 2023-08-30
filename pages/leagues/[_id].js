// pages/torneos/[_id].js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TournamentDetails from '../../components/torneos/TournamentDetails';
import Head from 'next/head';

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

    return (
        <>
            <Head>
                <title>{tournament.league_name} - Torneo de Yu-Gi-Oh! Duel Links</title>
                <meta name="description" content={`Participa en el torneo ${tournament.league_name}. Comienza el ${new Date(tournament.start_date).toLocaleString()}.`} />
                <meta property="og:title" content={tournament.league_name} />
                <meta property="og:description" content={`Participa en el torneo ${tournament.league_name}. Comienza el ${new Date(tournament.start_date).toLocaleString()}.`} />
                <meta property="og:image" content={tournament.image.url} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={tournament.league_name} />
                <meta name="twitter:description" content={`Participa en el torneo ${tournament.league_name}. Comienza el ${new Date(tournament.start_date).toLocaleString()}.`} />
                <meta name="twitter:image" content={tournament.image.url} />
            </Head>
            <TournamentDetails tournament={tournament} />
        </>
    );
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
