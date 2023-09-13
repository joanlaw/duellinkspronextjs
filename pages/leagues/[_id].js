import React from 'react';
import axios from 'axios';
import TournamentDetails from '../../components/torneos/TournamentDetails';
import Head from 'next/head';

const TournamentPage = ({ tournament }) => {
    if (!tournament) {
        return (
            <>
                <Head>
                    <title>Error: Torneo no encontrado</title>
                    <meta name="description" content="No se pudo obtener información sobre el torneo." />
                </Head>
                <p>Error: No se pudo obtener el torneo</p>
            </>
        );
    }

    return (
        <>

            <TournamentDetails tournament={tournament} />
        </>
    );
};

// Esta función se usa para obtener los parámetros de la ruta actual y realizar la llamada a la API
export async function getServerSideProps(context) {
    const { _id } = context.params;
    let tournamentData = null;

    try {
        const response = await axios.get(`https://api.duellinks.pro/leagues/${_id}`);
        tournamentData = response.data;
    } catch (error) {
        console.error("Error al obtener los datos del torneo:", error);
    }

    return {
        props: {
            tournament: tournamentData,
        },
    };
}

export default TournamentPage;
