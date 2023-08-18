// components/LeagueCard.js
import React from 'react';
import { Card, Button } from '@nextui-org/react';
import Link from 'next/link'; // Importa el componente Link

function LeagueCard({ league }) {
  return (
    <Card shadow hoverable>
      {/* Usa Link para hacer que el título sea un enlace */}
      <Link href={`/leagues/${league._id}`}>
    
          <h3>{league.league_name}</h3>
   
      </Link>
      <p>{league.league_format}</p>
      <p>{new Date(league.start_date).toLocaleDateString()}</p>
      <Button color="primary">Ver más</Button>
    </Card>
  );
}

export default LeagueCard;
