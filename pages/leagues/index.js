// pages/leagues/index.js
import axios from 'axios';
import LeagueCard from '../../components/LeagueCard';
import NavbarCustom from '../../components/NavbarCustom';

export default function LeaguesPage({ leagues }) {
  return (
    <div>
        <NavbarCustom />
        <div className='container mx-auto'>
      <h2>Mis Torneos</h2>
      {leagues.map((league) => (
        <LeagueCard key={league._id} league={league} />
      ))}
    </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get('https://api.duellinks.pro/leagues');
  return { props: { leagues: res.data.docs } };
}
