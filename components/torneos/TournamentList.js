const TournamentList = ({ discordId }) => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTournaments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.duellinks.pro/leagues/discordId/${discordId}`);
        setTournaments(response.data);
      } catch (error) {
        console.error('Hubo un problema al cargar la lista de torneos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, [discordId]);

  if (loading) {
    return <div>Cargando torneos...</div>;
  }

  return (
    <div>
      <h2>Lista de Torneos</h2>
      {tournaments.map((tournament, index) => (
        <div key={index}>
          <h3>{tournament.league_name}</h3>
          {/* Aquí puedes agregar más detalles del torneo */}
        </div>
      ))}
    </div>
  );
};
