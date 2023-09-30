import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import TournamentRegistration from './TournamentRegistration';
import TournamentBracket from './llaves/TournamentBracket';

import NavbarCustom from '../NavbarCustom';
import FooterCustom from '../FooterCustom';
import { Divider, Image, Spacer, Tabs, Tab } from "@nextui-org/react";
import { stateToHTML } from 'draft-js-export-html';  
import { convertFromRaw, EditorState, ContentState } from 'draft-js';
import CountdownTimer from '../CountdownTimer';
import PlayerTable from './PlayerTable';
import { utcToZonedTime, format } from 'date-fns-tz';
import { es } from 'date-fns/locale';
import { parseISO } from 'date-fns';


import Head from 'next/head';



const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const TournamentDetails = ({ tournament }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlContent, setHtmlContent] = useState('');

  const formatDate = (dateString) => {
    try {
        const mexicoCityTimezone = "America/Mexico_City";
        // Convertir la fecha a la zona horaria de México antes de formatearla
        const dateInMexicoCityTimezone = new Date(new Date(dateString).toLocaleString("en-US", { timeZone: mexicoCityTimezone }));

        // Formatea la nueva fecha
        const formattedDate = format(dateInMexicoCityTimezone, "EEEE d 'de' MMMM 'a las' HH:mm aaaa 'MX'", { locale: es });

        // Capitalizar la primera letra de cada palabra
        return formattedDate.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    } catch (error) {
        console.error("Error al formatear la fecha", error);
        return dateString; // En caso de error, retorna la fecha original
    }
};

  
  

  useEffect(() => {
    if (tournament && tournament.reglas) {
      try {
        const reglasData = JSON.parse(tournament.reglas);
        const contentState = convertFromRaw(reglasData);
        setEditorState(EditorState.createWithContent(contentState));
        
        const contentHtml = stateToHTML(contentState);
        setHtmlContent(contentHtml);
      } catch (error) {
        console.error('Error parsing tournament rules JSON:', error);
      }
    }
  }, [tournament]);

  return (
    <div className="bg-black text-white min-h-screen">
            <Head>
        <title>{tournament.league_name} - Torneo de Yu-Gi-Oh! Duel Links</title>
        <meta name="description" content={`Participa en el torneo ${tournament.league_name}. Comienza el ${formatDate(tournament.start_date)}.`} />
        <meta property="og:title" content={tournament.league_name} />
        <meta property="og:description" content={`Participa en el torneo ${tournament.league_name}. Comienza el ${formatDate(tournament.start_date)}.`} />
        <meta property="og:image" content={tournament.image.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={tournament.league_name} />
        <meta name="twitter:description" content={`Participa en el torneo ${tournament.league_name}. Comienza el ${formatDate(tournament.start_date)}.`} />
        <meta name="twitter:image" content={tournament.image.url} />
      </Head>
      <NavbarCustom />
      <div className='container mx-auto py-10 px-4 md:px-0'>
        <div className="flex justify-center items-center mb-4">
          <Image className="w-full md:w-auto" src={tournament.image.url} alt={tournament.league_name} width={500} height={300} />
        </div>
        <h1 className='text-center text-3xl font-bold mb-4'>{tournament.league_name}</h1>
        
        <Tabs variant="bordered" aria-label="Tournament tabs">
          <Tab key="detalles" title="Detalles">
            <div className="ml-4 w-full">
              <Spacer y={0.5} />
              <h3>Información:</h3>
              {tournament.infoTorneo.map((info, index) => (
                <div key={index} className="mb-4">
                  <p className="mb-1"><strong>Formato:</strong> {info.format}</p>
                  <p className="mb-1"><strong>Banlist:</strong> {info.banlist}</p>
                  <p className="mb-1"><strong>Información de Deck:</strong> {info.deck_info}</p>
                  <p className="mb-1"><strong>Eliminación:</strong> {info.eliminacion}</p>
                  <p className="mb-1"><strong>¿Cuándo?</strong> {formatDate(tournament.start_date)}</p>
                  <Spacer y={3} />
                  <TournamentRegistration tournamentId={tournament._id} />
                  <Spacer y={3} />
                  <Divider orientation="horizontal" />
                </div>
              ))}
            <strong><h3>Reglas</h3></strong>  
              <Editor
                readOnly
                editorState={editorState}
                toolbarClassName="hidden-toolbar"
                wrapperClassName="overflow-auto"
              />
              
            </div>
          </Tab>
          <Tab key="participantes" title="Participantes">
            <h2 className="text-center text-2xl font-bold mb-4">Jugadores Inscritos</h2>
            <PlayerTable players={tournament.players} />
          </Tab>
          <Tab key="campeon" title="Campeón">
            {/* Contenido vacío por ahora */}
          </Tab>
          <Tab key="bracket" title="Llave del Torneo">
          <TournamentBracket tournament={tournament} />
        </Tab>

        </Tabs>
      </div>
      <FooterCustom />
    </div>
  );
}

export default TournamentDetails;
