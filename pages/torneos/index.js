import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CountdownTimer from '../../components/CountdownTimer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NavbarCustom from '../../components/NavbarCustom'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Input} from "@nextui-org/react";
import { SearchIcon } from '../../components/SearchIcon';


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
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          color="primary"
          radius="full"
          size="sm"
          variant="solid"
          onClick={() => {/* Navegación al torneo */}}
        >
          Link
        </Button>
      </CardHeader>
      
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className="text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  ))}
</div>

</div>
        </div>
        <Footer />
    </>
    
    );
}
