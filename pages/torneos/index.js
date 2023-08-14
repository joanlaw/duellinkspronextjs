import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Asegúrate de agregar esta línea para importar axios
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CountdownTimer from '../../components/CountdownTimer';

export default function Torneos() {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.duellinks.pro/leagues');
                
                // Verificar que docs existe
                if (response.data && Array.isArray(response.data.docs)) {
                    setLeagues(response.data.docs);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Hubo un error al cargar la data: {error.message}</p>;

    return (
        <>
            <Header />
            <div className='container'>
    <h1>Torneos</h1>
    <div className='tournament-card-container-grid'>
        {leagues.map(league => (
            <div className='tournament-card' key={league?._id}>
                <h2 className='tournament-name'>{league?.league_name}</h2>
                <div className='divider'></div> {/* Línea divisoria */}
                {league?.start_date && <CountdownTimer targetDate={league.start_date} className='countdown-timer' />}
                {/* Puedes agregar otros detalles del torneo aquí */}
                <p>Esta será una descripción de prueba del torneo.</p>
            </div>
        ))}
    </div>
</div>



            <Footer />
        </>
    );
}
