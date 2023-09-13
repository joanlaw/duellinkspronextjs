import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavbarCustom from '../../components/NavbarCustom';
import FooterCustom from '../../components/FooterCustom';
import { Image } from '@nextui-org/react';
import Head from 'next/head';
import axios from 'axios'; // Importar axios si lo vas a utilizar

import { DecksTournaments } from '../../components/reportes/DecksTournaments';
import PolarChartComponent from '../../components/reportes/PolarChartComponent';
import { data } from 'autoprefixer';

export async function getServerSideProps(context) {
  const { nombre } = context.query;
  let torneoData = null;

  try {
    // Codificar el nombre del torneo antes de usarlo en la URL
    const encodedNombre = encodeURIComponent(nombre);
    const res = await axios.get(`https://api.duellinks.pro/torneos/nombre/${encodedNombre}`);
    torneoData = res.data;
  } catch (error) {
    console.log('Error al obtener los datos:', error);
  }

  return {
    props: {
      initialTorneoData: torneoData,
    },
  };
}

function ReporteTorneos({ initialTorneoData }) {
  const router = useRouter();
  const { nombre } = router.query;
  const [torneo, setTorneo] = useState(initialTorneoData);

  useEffect(() => {
    console.log("useEffect se está ejecutando con nombre:", nombre);
    
    if (nombre && !torneo) { // Solo realizar la llamada a la API si 'nombre' está presente y 'torneo' es null
      console.log("Iniciando solicitud fetch para:", nombre);
      // Codificar el nombre del torneo antes de usarlo en la URL
      const encodedNombre = encodeURIComponent(nombre);
      // Realizar la solicitud HTTP para obtener el torneo por su nombre
      fetch(`https://api.duellinks.pro/torneos/nombre/${encodedNombre}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Datos recibidos:", data);
          setTorneo(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [nombre]);


  console.log("Valor de nombre:", nombre);

  return (
    <>
          <Head>
        <title>{torneo?.nombre || 'Título predeterminado'}</title>
        <meta name="description" content={torneo?.informacion_torneo || 'Descripción predeterminada'} />
        <meta property="og:title" content={torneo?.nombre || 'Título predeterminado'} />
        <meta property="og:description" content={torneo?.informacion_torneo || 'Descripción predeterminada'} />
        <meta property="og:image" content={torneo?.banner || 'URL de la imagen predeterminada'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://duellinks.pro/${torneo?.nombre}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
            <NavbarCustom />
    <div className='container mx-auto' >
   

    <h1 className="text-4xl text-center">{torneo?.nombre}</h1>
    <div className="flex justify-center items-center">
  <Image className="w-full md:w-auto" src={torneo?.banner} alt={torneo?.nombre} width={500} height={300} />
</div>

      {torneo ? (
        <div>
        
          <PolarChartComponent decks={torneo?.decks} />

          <div>
  <h3 className="text-2xl font-bold mb-4">Información de torneo:</h3>
  <ul className="list-disc list-inside">
    <li className="mb-2"><strong>Organizador:</strong> {torneo?.organizador}</li>
    <li className="mb-2"><strong>Información del Torneo:</strong> {torneo?.informacion_torneo}</li>
    <li className="mb-2"><strong>Formato del Torneo:</strong> {torneo?.formato_torneo}</li>
  </ul>
</div>


          <DecksTournaments tournamentName={torneo?.nombre} />

        </div>
      ) : (
        'Cargando...'
      )}
    </div>
    <FooterCustom />
    </>
  );
}

export default ReporteTorneos;
