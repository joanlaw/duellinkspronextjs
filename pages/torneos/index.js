import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CountdownTimer from '../../components/CountdownTimer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Torneos() {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.duellinks.pro/leagues');

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

    const filterLeagues = () => {
        let filteredLeagues = leagues;

        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            filteredLeagues = filteredLeagues.filter(league =>
                league.league_name.toLowerCase().includes(lowerCaseSearchTerm)
            );
        }

        if (startDate && endDate) {
            filteredLeagues = filteredLeagues.filter(league => {
                const leagueStartDate = new Date(league.start_date);
                return leagueStartDate >= startDate && leagueStartDate <= endDate;
            });
        }

        return filteredLeagues;
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Hubo un error al cargar la data: {error.message}</p>;

    return (
        <>
        <Header />
        <div className='container'>
            <h1>Torneos</h1>
            <div className='datepicker-container'>
                <input
                    className='search-input'
                    type='text'
                    placeholder='Buscar por nombre de liga'
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                />
                <div className='react-datepicker-wrapper'>
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        placeholderText='Rango inicial'
                    />
                </div>
                <div className='react-datepicker-wrapper'>
                    <DatePicker
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        placeholderText='Rango final'
                    />
                </div>
                <button className='clear-button' onClick={() => { setStartDate(null); setEndDate(null); setSearchTerm(''); }}>
                    Borrar Filtros
                </button>
            </div>
            <div className='tournament-card-container'>
                <div className='tournament-card-container-grid'>
                    {filterLeagues().map(league => (
                        <div className='tournament-card' key={league?._id}>
                            <h2 className='tournament-name'>{league?.league_name}</h2>
                            <div className='divider'></div>
                            {league?.start_date && <CountdownTimer targetDate={league.start_date} className='countdown-timer' />}
                            <p>Esta será una descripción de prueba del torneo.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </>
    
    );
}
