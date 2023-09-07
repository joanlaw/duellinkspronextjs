import React, { useState, useEffect, useMemo } from 'react';
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
import format from 'date-fns/format';
import { es } from 'date-fns/locale';


export default function Torneos() {

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = format(date, "EEEE d 'de' MMMM 'a las' HH:mm aaaa 'MX'", { locale: es });

  // Capitalizar la primera letra de cada palabra
  return formattedDate.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

  const router = useRouter();

  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTournamentClick = (leagueId) => {
    router.push(`/leagues/${leagueId}`);
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

  // Use useMemo to optimize the filter operation
  const filteredLeagues = useMemo(() => {
    let filtered = [...leagues];
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(league =>
        league.league_name.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    if (startDate && endDate) {
      filtered = filtered.filter(league => {
        const leagueStartDate = new Date(league.start_date);
        return leagueStartDate >= startDate && leagueStartDate <= endDate;
      });
    }
    return filtered;
  }, [leagues, searchTerm, startDate, endDate]);

  if (loading) return <div className="flex justify-center items-center h-screen"><Spinner size="lg" /></div>;
  if (error) return <p>Hubo un error al cargar la data: {error.message}</p>;


    return (
      <div className='flex flex-col min-h-screen'>
      <NavbarCustom />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-semibold mb-4">Torneos</h1>
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <input
            className="w-full lg:w-1/3 border border-gray-300 p-2"
            type="text"
            placeholder="Buscar torneos..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <div className="w-full lg:w-1/4">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Rango inicial"
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <div className="w-full lg:w-1/4">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Rango final"
              className="w-full border border-gray-300 p-2"
            />
          </div>
          <Button
            color="primary"
            variant="solid"
            onClick={() => {
              setStartDate(null);
              setEndDate(null);
              setSearchTerm("");
            }}
          >
            Borrar Filtros
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {filteredLeagues.map((league) => (
      <div key={league?._id} className="relative max-w-[340px] border p-4">
        {/* Etiqueta para torneo finalizado */}
        {league.status === 'finalized' && (
  <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-semibold px-2 py-1">
    Torneo finalizado
  </div>
)}
{/* Etiqueta para torneo en progreso */}
{league.status === 'in_progress' && (
  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-2 py-1">
    En progreso
  </div>
)}
{/* Etiqueta para torneo con inscripciones abiertas */}
{league.status === 'open' && (
  <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-semibold px-2 py-1">
    Inscripciones abiertas
  </div>
)}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-lg font-semibold text-gray-600 text-center">
                {league?.league_name}
              </h4>
              <h5 className="text-sm text-gray-400">
                @{league?.organizer?.username}
              </h5>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-400">
          {league?.infoTorneo.map((info, index) => (
            <div key={index}>
              <p>
                <strong>Formato:</strong> {info.format}
              </p>
              <p>
                <strong>Banlist:</strong> {info.banlist}
              </p>
              <p>
                <strong>Información de Deck:</strong> {info.deck_info}
              </p>
              <p>
                <strong>Eliminación:</strong> {info.eliminacion}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-2">
          <CountdownTimer targetDate={league.start_date} />
        </div>
        <div className="pt-2 text-center">
          {formatDate(league.start_date)}
        </div>
        <div className="flex gap-1 mt-4">
          <p className="font-semibold text-gray-400 text-sm">
            {league.players.length}
          </p>
          <p className="text-gray-400 text-sm">Inscritos</p>
        </div>
        <div className="flex justify-center mt-4">
          <Button
            color="primary"
            variant="solid"
            onClick={() => handleTournamentClick(league._id)}
          >
            Ver Torneo
          </Button>
        </div>
      </div>
    ))}
    
        </div>
      </div>
      <FooterCustom />
    </div>
    

    
    );
}
