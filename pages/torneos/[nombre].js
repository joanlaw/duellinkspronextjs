import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavbarCustom from '../../components/NavbarCustom';
import FooterCustom from '../../components/FooterCustom';

import { DecksTournaments } from '../../components/reportes/DecksTournaments';
import PolarChartComponent from '../../components/reportes/PolarChartComponent';
import { data } from 'autoprefixer';

function ReporteTorneos() {
  const router = useRouter();
  const { nombre } = router.query;
  const [torneo, setTorneo] = useState(null);

  useEffect(() => {
    if (nombre) {
      // Realizar la solicitud HTTP para obtener el torneo por su nombre
      fetch(`https://api.duellinks.pro/torneos/nombre/${nombre}`)
        .then((response) => response.json())
        .then((data) => setTorneo(data))
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [nombre]);

  console.log(nombre);

  return (
    <>
            <NavbarCustom />
    <div className='container mx-auto' >

    <h1 className="text-4xl text-center">{torneo?.nombre}</h1>
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
