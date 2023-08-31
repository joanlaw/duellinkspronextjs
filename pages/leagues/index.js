import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CountdownTimer from '../../components/CountdownTimer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NavbarCustom from '../../components/NavbarCustom'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Input, Spinner} from "@nextui-org/react";
import { SearchIcon } from '../../components/SearchIcon';
import FooterCustom from '../../components/FooterCustom';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Paso 1: Importar useRouter


export default function Torneos() {

  const router = useRouter(); // Paso 2: Utilizar el hook

    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleTournamentClick = (leagueId) => {
      router.push(`/leagues/${leagueId}`); // Paso 3: Navegar al URL
  };

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

    if (loading) return     <div className="flex gap-4">

    <Spinner size="lg" />
  </div> ;
    if (error) return <p>Hubo un error al cargar la data: {error.message}</p>;

    return (
        <>
        <NavbarCustom />
        <div className='container mx-auto p-4'>
    <h1 className='text-4xl font-semibold mb-4'>Torneos</h1>

    <div className='flex flex-col lg:flex-row gap-6 items-center'>
      
        <Input
            className='w-full lg:w-1/3'
            type='text'
            startContent={<SearchIcon size={18} />}
            placeholder='Buscar torneos...'
            value={searchTerm}
            onChange={event => setSearchTerm(event.target.value)}
        />
        
        <div className='w-full lg:w-1/4 react-datepicker-wrapper'>
  <div className='date-picker-input'>
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      placeholderText='Rango inicial'
      className='w-full'
    />
  </div>
</div>

<div className='w-full lg:w-1/4 react-datepicker-wrapper'>
  <div className='date-picker-input'>
    <DatePicker
      selected={endDate}
      onChange={date => setEndDate(date)}
      placeholderText='Rango final'
      className='w-full'
    />
  </div>
</div>

        <Button 
            color="primary" 
            variant="solid" 
            onClick={() => { setStartDate(null); setEndDate(null); setSearchTerm(''); }}
        >
            Borrar Filtros
        </Button>

    </div>
            <div className='tournament-card-container'>
            <div className='tournament-card-container-grid'>
  {filterLeagues().map(league => (
    <Card key={league?._id} className="max-w-[340px] tournament-card">
      
      <CardHeader className="justify-between">
        <div className="flex gap-5">
       
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{league?.league_name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{league?.organizer?.username}</h5>
          </div>
        </div>
       
{/* <Button
    color="primary"
    radius="full"
    size="sm"
    variant="solid"
  >
    Seguir
  </Button>*/}  

      </CardHeader>
      
      <CardBody className="px-3 py-0 text-small text-default-400">
        <div className="tournament-info">
          {league?.infoTorneo.map((info, index) => (
            <div key={index}>
              <p><strong>Formato:</strong> {info.format}</p>
              <p><strong>Banlist:</strong> {info.banlist}</p>
              <p><strong>Información de Deck:</strong> {info.deck_info}</p>
              <p><strong>Eliminación:</strong> {info.eliminacion}</p>
              
            </div>
          ))}
        </div>
        <span className="pt-2">
        <CountdownTimer targetDate={league.start_date} />
          <span className="py-2" aria-label="computer" role="img">
      
          </span>
        </span>
      </CardBody>
      
      
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small"></p>
        {/* <p className="text-default-400 text-small">Seguidres</p>*/ } 
        </div>
        <div className="flex gap-1">
        <p className="font-semibold text-default-400 text-small">{league.players.length}</p>
    <p className="text-default-400 text-small">Inscritos</p>
  </div>
      </CardFooter>
      <Button 
                  color="primary" 
                  variant="solid"
                  onClick={() => handleTournamentClick(league._id)}  // Usar handleTournamentClick aquí
                >
                  Ver Torneo
                </Button>
    </Card>
    
  ))}
</div>

</div>
        </div>
        <FooterCustom />
    </>
    
    );
}
