// pages/leagues/[id].js
import axios from 'axios';
import { useRouter } from 'next/router';
import { Card, Button, Spinner } from '@nextui-org/react';

export default function LeagueDetailsPage({ league }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div>
      <h2>{league.league_name}</h2>
      <Card shadow hoverable>
        <p>{league.league_format}</p>
        <p>{new Date(league.start_date).toLocaleDateString()}</p>
        {/* Aquí puedes agregar más detalles del torneo */}
      </Card>
      <Button color="primary" onClick={() => router.push('/leagues')}>Volver a Torneos</Button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { _id } = context.params;
  const res = await axios.get(`https://api.duellinks.pro/leagues/${_id}`);
  return { props: { league: res.data } };
}
