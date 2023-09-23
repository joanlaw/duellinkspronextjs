import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CountdownTimer from '../../components/CountdownTimer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NavbarCustom from '../../components/NavbarCustom'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Input, Spinner, Image} from "@nextui-org/react";
import { SearchIcon } from '../../components/SearchIcon';
import FooterCustom from '../../components/FooterCustom';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Paso 1: Importar useRouter
import format from 'date-fns/format';
import { es } from 'date-fns/locale';


export default function Torneos() {

  const formatDate = (dateString) => {
    // Extrae la hora, minuto y segundo del tiempo UTC
    const timeParts = dateString.split('T')[1].split('.')[0].split(':');
    const hour = parseInt(timeParts[0], 10);
    const minute = parseInt(timeParts[1], 10);
    const second = parseInt(timeParts[2], 10);
  
    // Crea una nueva fecha en la zona horaria local pero usando la hora, minuto y segundo de UTC
    const date = new Date(dateString);
    date.setHours(hour, minute, second);
  
    // Formatea la nueva fecha
    const formattedDate = format(date, "EEEE d 'de' MMMM 'a las' HH:mm aaaa 'MX'", { locale: es });
  
    // Capitalizar la primera letra de cada palabra
    return formattedDate.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  

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
          const sortedLeagues = response.data.docs.sort((a, b) => {
            // Convertir las fechas de inicio a objetos Date para compararlas
            const startDateA = new Date(a.start_date);
            const startDateB = new Date(b.start_date);
            
            // Retorna 1 si la fechaA es menor que la fechaB, -1 si la fechaA es mayor que la fechaB, y 0 si son iguales
            return startDateA < startDateB ? 1 : startDateA > startDateB ? -1 : 0;
          });
          setLeagues(sortedLeagues);
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
            className="w-full lg:w-1/3 border border-gray-300 p-2 rounded-md"
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
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="w-full lg:w-1/4">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Rango final"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <Button color="primary" variant="solid" onClick={() => {
            setStartDate(null);
            setEndDate(null);
            setSearchTerm("");
          }}>
            Borrar Filtros
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8 justify-items-center">
          {filteredLeagues.map((league) => (
            <Link href={`/leagues/${league._id}`} key={league?._id}>
            
            <Card
              key={league?._id}
              className="relative max-w-[340px] p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg transform hover:-translate-y-1 cursor-pointer"
              shadow
              hoverable
            >
              <Image 
                src={league.image.url}
                alt={`${league.league_name} image`}
                width="100%"
                height="200px"
                objectFit="cover"
              />
              <div className="absolute top-2 right-2 z-10">
                {league.status === 'finalized' && (
                  <div className="bg-green-500 text-white text-xs font-semibold px-2 py-1 shadow-md rounded-full">
                    Torneo finalizado
                  </div>
                )}
                {league.status === 'in_progress' && (
                  <div className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 shadow-md rounded-full">
                    En progreso
                  </div>
                )}
                {league.status === 'open' && (
                  <div className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 shadow-md rounded-full">
                    Inscripciones abiertas
                  </div>
                )}
              </div>
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
                    <p><strong>Formato:</strong> {info.format}</p>
                    <p><strong>Banlist:</strong> {info.banlist}</p>
                    <p><strong>Información de Deck:</strong> {info.deck_info}</p>
                    <p><strong>Eliminación:</strong> {info.eliminacion}</p>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <CountdownTimer targetDate={league.start_date} />
              </div>
              <div className="pt-2 text-center">
                {formatDate(league.start_date)} {/* Asegúrate de que esta función esté definida en tu componente */}
              </div>
              <div className="flex gap-1 mt-4">
                <p className="font-semibold text-gray-400 text-sm">
                  {league.players.length}
                </p>
                <p className="text-gray-400 text-sm">Inscritos</p>
              </div>
            </Card>
            
            </Link>
          ))}
        </div>
      </div>
      <FooterCustom />
    </div>

    

    
    );
}
